<template>
	<div>
		<section class="all-latest-episodes">
<!--  <video width="320" height="240" controls>
  <source src="https://vudeo.co/embed-1q1vvgum2ody.html" type="video/ogg">
  Your browser does not support the video tag.
</video>  -->
<embed width="320" height="240" src="https://vudeo.co/embed-1q1vvgum2ody.html"  type=""/>
      				<!--  -->
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				allLatestEpisodes:[],
				episodeComments:[],
        latestEpisodeWithServer:[],

            commentsEpisode:{
              comments_message:null,
              episode_id:null,
            },				
			}
		},

		created(){
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