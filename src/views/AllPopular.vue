<template>
	<div>
		<section class=" all-popular">
		        <div class="row">
		          <div class="col-md-3" style="text-align: center;" v-for="(popular, index) in allPopular.data" :key="index">
		              <a @click.prevent="goToPage(popular.id)">
		                  <img v-lazy="popular.profile_path" alt="">

		                  <h6>
		                        {{popular.name.toUpperCase().slice(0, 15)}}
		                        <span v-if="popular.name.length > 15">...</span>
		                  </h6> 
		               
		              </a> 
		            </div>                          
		        </div>			

          				
		</section>
	</div>

<div v-show="isLoading">
    <loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="" name="circular"></loader>   
</div>    
</template>

<script>
	export default{
		data(){
			return{

		        allPopular:[],
		        isLoading:false			
			}
		},

		created(){
            this.getHomeContents();
		},

        computed:{
            getUser(){
                return this.$store.getters.get_user;
            }       
        },      

		methods:{

        getHomeContents(page =1){
            this.isLoading = true
            this.axios.get('https://animeeplus.online/api/genres/allCasters/all/code?page='+page
            ).then(res=>{
            	
                this.allPopular = res.data;
                this.isLoading = false
                console.log(this.allPopular)

            }).catch(err=>{

                if (err.message == "Network Error") {
                    window.alert(
                      "لا يوجد إتصال</n>تحقق من الاتصال بالانترنت ثم اعد المحاوله")
                }
            })
        },   

        goToPage(id){
            this.$store.dispatch("goToPage",{id: id});

            this.$router.push('popular')
        },       
		}
	}
</script>

<style>

.all-popular{
	padding: 20px;
	margin-top: 7%;	
}
.all-popular img{
width: 150px;
height: 150px;
border-radius: 50%;	
border: 4px solid #B41D1E; 
}

.all-popular h6{
	margin: 10px 0;
	color:var(--white);
}
</style>