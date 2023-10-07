

<template>
	<div>
		<section class="all-coming-episodes">
            <div class="row container" v-for="(coming_episode, key) in allReleaseDates" :key="key">

                <div class="section-header">
                    <div class="left">
                        <h2>{{key}}</h2>
                    </div>


                </div>
                <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                    <slide v-for="(item, key) in allReleaseDates[key]" :key="key">
                        <div class="carousel__item">
                            <div class="row">
                                <a @click.prevent="goToPage(item.coming_id ,item.coming_type)">
                                <div class="col-md-3 col-sm-6 serie-image">
                                    <img v-lazy="item.poster_path" alt="">
                                </div>  

                                <h6 v-if="item.name" style="text-align: center;">
                                    <span v-if="item.name.length > 15">...</span>
                                    {{item.name.slice(0,15)}}

                                </h6>                                 
                                </a>                           
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                      <navigation />
                      <!-- <pagination /> -->
                    </template>
                </carousel>  
            </div>
<!-- 			<div class="row row-content" 
      v-for="(coming_episode, index) in allReleaseDates" :key="index">
          <div class="title">
            <h4>{{index}}</h4>
          </div>
          
          <div class="card mb-3 col-md-3 col-sm-12" style="width: 20rem;"
          v-for="(item, key) in allReleaseDates[index]" :key="key">
            <img :src="item.poster_path" class="" alt="...">
            <h5 class="card-title">{{item.name}}</h5>
          </div> 	
			</div> -->		         				
		</section>
	</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

	export default{
    components:{
      Carousel, Slide, Pagination, Navigation
    },
		data(){
			return{
				allReleaseDates:[],

            commentsEpisode:{
              comments_message:null,
              episode_id:null,
            },	

            settingsLatestSeri: {
                itemsToShow: 2,
                snapAlign: 'center',
                dir:'rtl',
            },

            breakpointsLatestSeri:{
              // 700px and up
              700: {
                itemsToShow: 4,
                snapAlign: 'center',
              },
              // 1024 and up
              1024: {
                itemsToShow: 6,
                snapAlign: 'start',
              },
            }

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
      goToPage(id ,type){
                  if (type == "App\\Serie") {
                      this.$store.dispatch("goToPage",{id: id});

                      this.$router.push('season') 

                  }
                  // else if(type == "App\\Movie"){
                  //     this.$store.dispatch("goToPage",{id: id});

                  //     this.$router.push('latest-movie')  

                  // }else if(type == "App\\Anime"){
                  //     this.$store.dispatch("goToPage",{id: id});

                  //     this.$router.push('anime')      
                                  
                  // }
              }, 

       // 
		        	
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

  .all-coming-episodes h6{
    color:#fff;
    margin-top: 10px;
  }

  .all-coming-episodes .serie-image{
    width:100%;
  }

  .all-coming-episodes .serie-image img{
    cursor:pointer;
    height: 250px; border-radius: 15px;    
  }
</style>