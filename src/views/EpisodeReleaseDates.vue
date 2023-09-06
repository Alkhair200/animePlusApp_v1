<template>
	<div>
		<section class="all-coming-episodes">
			<div class="row"
      style="justify-content: center;" 
      v-for="(coming_episode, index) in allReleaseDates" :key="index">

          <h4>{{index}}</h4>
          <div class="card mb-3 col-md-3 col-sm-12" style="width: 20rem;"
          v-for="(item, key) in allReleaseDates[index]" :key="key">
            <img :src="item.poster_path" class="" alt="...">
            <h5 class="card-title">{{item.name}}</h5>
          </div> 
             
		<!-- 		<div class="card mb-3 col-md-4 col-sm-12" style="max-width: 540px;"
				v-for="(coming_episode, index) in allLatestEpisodes" :key="index">
				  <div class="row g-0 content-all-ep">
				    <div class="col-md-4 episode-img">
              <button
                  class="btn whatch-latest-episode" 
                  type="button" 
                  data-bs-toggle="modal" 
                  href="#whatch-latest-episode"
                  @click="getLatestEpisodeWithServer(latest_episode.episode_id)">

                  <i class="fa fa-play-circle-o play-icon" aria-hidden="true"></i>                  
				      <img v-lazy="latest_episode.poster_path" class="img-fluid rounded-start" alt="...">
              </button>
				    </div>
				    <div class="col-md-8">
              <div class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="...">
                <h6>{{index}}</h6>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
				    </div>
				  </div>
				</div>	 -->		
			</div>		         				
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				allReleaseDates:[],

            commentsEpisode:{
              comments_message:null,
              episode_id:null,
            },				
			}
		},

		created(){
			this.getAllReleaseDates();
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
			getAllReleaseDates(){

          this.axios.post('https://animeeplus.online/api/media/coming/showAll').then(res=>{
              this.allReleaseDates = res.data;
              console.log(res.data);
          }).catch(err=>{
              console.log(err);
          }) 
			},

      getLatestEpisodeWithServer(id){

        this.axios.get('https://animeeplus.online/api/series/episodeshow/'+id+'/code'
        ).then(res=>{

            this.latestEpisodeWithServer = res.data.episode;

        }).catch(err=>{
            console.log(err.message);
        })
      },  
		        	
		}
	}
</script>

<style>
  .all-coming-episodes .card{
    margin-left:10px;
    height: 300px;
    border-radius:10px;
    overflow: hidden;
    background-color: #0E0E0D;  
  }

  .all-coming-episodes .card img{
    height: 60%;
    object-fit: cover;    
  }

  .all-coming-episodes .card h5{
    margin: 10px;
    color:#fff;
  }
</style>