<template>
	<div>
		<section class="all-latest-series">
			<div class="row">
        <div class="row">
          <div class="col-md-2" v-for="(latestSeri, index) in latestAnim" :key="index">
              <a @click.prevent="goToPage(latestSeri.id)">
              <div class="col-md-3 col-sm-6 serie-image">
                  <img v-lazy="latestSeri.poster_path" alt="">

                  <h6>
                        {{latestSeri.name.slice(0, 15)}}
                        <span v-if="latestSeri.name.length > 15">...</span>
                  </h6> 
              </div>  
               
              </a> 
            </div>                          
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
				allLatestEpisodes:[],
				episodeComments:[],
        latestEpisodeWithServer:[],
        latestAnim:[],

            commentsEpisode:{
              comments_message:null,
              episode_id:null,
              
              allLatestEpisodes:[],
              isLoading:false
            },				
			}
		},

		created(){
      this.getHomeContents();
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

        getHomeContents(){
            this.isLoading = true
            this.axios.get("https://animeeplus.online/api/media/homecontent/code"
            ).then(res=>{

                this.latestAnim = res.data.anime;
                this.isLoading = false

            }).catch(err=>{

                if (err.message == "Network Error") {
                    window.alert(
                      "لا يوجد إتصال</n>تحقق من الاتصال بالانترنت ثم اعد المحاوله")
                }
            })
        },   

			getAllLatestEpisodes(){
			this.$store.dispatch("getHomeContents","latestEpisodes").then((res)=>{
				this.allLatestEpisodes = res;
				
			}).catch((err)=>{
				console.log(err)
			})		
			},

        goToPage(id){
            // this.$store.dispatch("goToPage",{id: id});

            // this.$router.push('season')
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

  .all-latest-series .serie-image img{
    height: 290px;
    object-fit:cover;
    cursor:pointer;
  }
</style>