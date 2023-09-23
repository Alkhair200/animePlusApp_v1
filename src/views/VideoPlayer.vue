<template>
	<div>
		<section class="all-latest-episodes">
<!--  <video width="320" height="240" controls>
  <embed src="https://vudeo.co/embed-1q1vvgum2ody.html" type="video/ogg">
  Your browser does not support the video tag.
</video> --> 
<embed width="1000" height="400" :src="getVideoLink"  type=""/>
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
            this.getLatestEpisodeWithServer();
            console.log(this.getVideoLink)
		},

        computed:{   

            getVideoLink(){
                return this.$store.getters.get_playLink;

            },                                     
        },      

		methods:{

      getLatestEpisodeWithServer(){
 
	         	
		}
    }
	}
</script>