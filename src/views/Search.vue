<template>
	<div>
		<section class="search">
      <div class="container" style="text-align: center;">
        <div class="row">
          
            <div class="input-group mb-3  col-md-12">
              <input type="text" class="form-control input-search" placeholder="ابحث عن الأفلام والمسلسلات والكرتون..."  v-model="inputResult" aria-describedby="basic-addon1">
            </div>                      
              
           <h5 v-show="notResults">لا يوجد بيانات</h5>        
          <div class="col-md-2 col-sm-6" v-for="(result, index) in results" :key="index">

              <a @click.prevent="goToPage(result.id ,result.type)">
                <span>cvmc,v</span>
                  <img v-lazy="result.poster_path" alt="" style="height: 200px; ">
                  <br>
                  <h6 v-if="result.name">
                    <span v-if="result.name.length > 15">...</span>
                    {{result.name.slice(0,15)}}
                  </h6>       

                  <h6 v-if="result.title">
                    <span v-if="result.title.length > 15">...</span>
                    {{result.title.slice(0,15)}}
                  </h6>                                 
              </a> 
            </div> 

                                   
        </div>		
        </div>  	
		</section>
	</div>

<div v-show="isLoading" class="search-load">
    <loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="" name="circular"></loader>   

</div>  
</template>

<script>
	export default{
		data(){
			return{
        results:[],
        inputResult:null,
        isLoading:false,
        notResults:false,
			}
		},  

    mounted(){
      this.getWidth()
    } ,

    watch:{
      inputResult(val){
        this.getResult(val)
      }
    },

		methods:{ 

      getWidth(){
        let height = window.innerHeight
        let el= document.querySelectorAll(".search")[0]
        let hei = height - 500
        el.style.marginTop = hei+'px'
      },

      getResult: function(value){
        this.isLoading = true

        this.axios.get('https://animeeplus.online/api/search/'+value+'/code').then((res)=>{

          if (res.data.search.length <= 0) {
            this.notResults = true
            this.results = '';
          }else{
             this.notResults = false
            this.results = res.data.search;
          }
        

          this.isLoading = false
        }).catch((err)=>{
          this.isLoading = false
            console.log(err)
        })      
      },     

        goToPage(id ,type){
            if (type == "Serie") {
                this.$store.dispatch("goToPage",{id: id});

                this.$router.push('season') 

            }else if(type == "Movie"){
                this.$store.dispatch("goToPage",{id: id});

                this.$router.push('latest-movie')  

            }else if(type == "Anime"){
                this.$store.dispatch("goToPage",{id: id});

                this.$router.push('anime')      
                            
            }
        },                  
    }
	}
</script>

<style>

.search-load #overlay-circular{
  width: 50%;
  height: 50%;
  transform: translate(50%,50%);
  right: 50%;  
}

.search h5{
text-align: center;
margin-top: 10%;  
}

.search h6{
margin-bottom: 10%; 
color:#fff; 
}

  .input-search{
    background:none;
    border:1px solid #fff;
    border-radius:10px;
    color:#fff;
  }

  .input-search:focus{
    border:none;
  }



  .search img:hover{
    cursor:pointer;
  }

  .search img{
    border-radius: 10px;
    margin-bottom:10px;
    width:100%;
    padding:0 5px;
  }

</style>