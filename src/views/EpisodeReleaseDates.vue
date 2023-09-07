<template>
	<div>
		<section class="all-coming-episodes">
			<div class="row row-content" 
      v-for="(coming_episode, index) in allReleaseDates" :key="index">
          <div class="title">
            <h4>{{index}}</h4>
          </div>
          
          <div class="card mb-3 col-md-3 col-sm-12" style="width: 20rem;"
          v-for="(item, key) in allReleaseDates[index]" :key="key">
            <img :src="item.poster_path" class="" alt="...">
            <h5 class="card-title">{{item.name}}</h5>
          </div> 	
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

.all-coming-episodes{
margin-top: 9%;
}

.all-coming-episodes .row-content{
  justify-content: center;   
}
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

  .all-coming-episodes .title{
    position:relative;
    margin-bottom: 20px;
  }

  .all-coming-episodes .title h4{
    margin-right: 16px !important;   
  }

  .all-coming-episodes h4::after{
right: 0;
position: absolute;
height: 32px;
width: 5px;
background: var(--primary-color);
content: "";    
  }
</style>