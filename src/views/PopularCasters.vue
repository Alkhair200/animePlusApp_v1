<template>
	<div>
		<section class="all-latest-series popular">
			<div class="row">
        <div class="row">
          <div class="col-md-2" v-for="(popular, index) in popularCasters" :key="index">
              <a @click.prevent="goToPage(popular.id)">
              <div class="col-md-3 col-sm-6 serie-image">
                  <img v-lazy="popular.profile_path" alt="" style="height: 200px; ">
                  <br>
                  <h6>{{popular.name.toUpperCase().slice(0, 20)}}
                    <span v-if="popular.name.length > 20">...</span>
                  </h6> 
                  
              </div>  
               
              </a> 
            </div>                          
        </div>			
			</div>	

          				
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
                popularCasters:[],
			}
		},

		created(){
            this.getAllPopularCasters();
		},

        computed:{
            getUser(){
                return this.$store.getters.get_user;
            } ,
            getToken(){
                return this.$store.getters.get_token;
            },             
        },      

		methods:{ 

            getAllPopularCasters(){

                this.$store.dispatch("getHomeContents","popularCasters").then((res)=>{
                    this.popularCasters = res;
                      console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })      
            },            

        goToPage(id){
            this.$store.dispatch("goToPage",{id: id});

            this.$router.push('season')
        },       
		}
	}
</script>

<style>
.all-latest-series .serie-image{
  padding:10px;

}
  .all-latest-series .serie-image,
  .all-latest-series .serie-image img{
    width:100%;
  }

  .popular{
    margin-top: 7%;
  }
  .popular .serie-image img{
border-radius: 100px;
height: 200px; 
border: 4px solid #B41D1E;
object-fit: cover;    
  }

    .popular .serie-image h6{
        text-align: center;
        margin-top:15px;
    }
</style>