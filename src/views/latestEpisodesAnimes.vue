<template>
	<div>
		<section class="all-latest-episodes">
			<div class="row">
				<div class="card mb-3 col-md-4 col-sm-12" style="max-width: 540px;"
				v-for="(latest_episode_anime, index) in latestEpisodesAnimes" :key="index">
				  <div class="row g-0 content-all-ep">
				    <div class="col-md-4 episode-img">
              <button
                  class="btn whatch-latest-episode" 
                  type="button" 
                  data-bs-toggle="modal" 
                  href="#whatch-latest-episode"
                  @click="getlatestEpisodeAnimeWithServer(latest_episode_anime.anime_episode_id)">

                  <i class="fa fa-play-circle-o play-icon" aria-hidden="true"></i>                  
				      <img v-lazy="latest_episode_anime.poster_path" class="img-fluid rounded-start" alt="...">
              </button>
				    </div>
				    <div class="col-md-8">
				      <div class="card-body">
                        <h5 class="card-title">
                        {{latest_episode_anime.name.slice(0, 15)}}
                        <span v-if="latest_episode_anime.name.length > 15">...</span>                          
                        </h5>
                            <span class="date">

                                 قبل 18 ساعة  &nbsp;<i class="far fa-clock"></i>
                            </span>
                            <h6 class="season">{{latest_episode_anime.seasons_name}}</h6>
                            <h6 class="episode">{{latest_episode_anime.episode_name}}</h6>

                            <div class="row">
                                <div class="col-6  text-center">
                                    <a 
                                    class="dics-dtn" 
                                    type="button" 
                                    data-bs-toggle="modal" 
                                    href="#whatch-latest-episode"
                                    @click="getlatestEpisodeAnimeWithServer(latest_episode_anime.anime_episode_id)">
                                        <i class="fa fa-commenting-o"></i> التعليقات
                                    </a>
                                </div>
                                <div class="col-6 text-center">
                                    <a 
                                      type="button" 
                                      data-bs-toggle="modal" 
                                      href="#whatch-latest-episode"
                                      @click="getlatestEpisodeAnimeWithServer(latest_episode_anime.anime_episode_id)"                                    
                                      class="dics-dtn"><i class="fa fa-info-circle"></i> دخول
                                    </a>
                                </div>
                            </div>				      
                        </div>
				    </div>
				  </div>
				</div>			
			</div>	

           <!-- start episode comment -->
            <!-- Modal -->
            <div class="modal fade latest-episode-comment " id="comments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">التعليقات </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body comments">
                    <div class="comm-info">

                      <div class="users-comments" v-for="(episodeComm , index) in episodeComments" :key="index">
                        <div class="row">
                          <div class="col-md-1 col-sm-1">
                            <div class="img-user">
                              <img :src="episodeComm.user_image" alt="">
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-12">
                            <div class="info">
                              <h6>{{episodeComm.user_name}}</h6>
                              <p class="comment">{{episodeComm.comment}}</p>
                            </div>
                            <div class="active">
                              <span><a href="http://">1 ع</a></span>
                                <span>
                                  <a href="http://" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span v-if="episodeComm.reacts.length != 0">

                                        <span v-for="itemName in episodeComm.reacts">
                              <!--           <span v-if="episodeComm.reacts[index].react_type == 'love'">
                                          <span 
                                            v-if="episodeComm.reacts[index].user_id == getUser.id"
                                            style="color:#CA1919;">أحببته
                                          </span>
                                        </span>
                                        <span v-else>
                                          <span>أحببته
                                          </span>                                            
                                        </span> -->
                                        
                                        <span v-if="episodeComm.user_id == getUser.id">

                                        <span 
                                            v-if="itemName.react_type == 'like'"
                                            style="color:rgb(81, 119, 233);">أعجبني
                                          </span>
                                  

                                        </span>
                                     
                                        <!-- </span>  -->

                       <!--                  <span 
                                        v-if="itemName.react_type == 'dislike'"
                                        style="color:#f03;">لم يعجبني</span>

                                        <span 
                                        v-if="itemName.react_type == 'haha'"
                                        style="color:#ffb600;">أضحكني</span>    -->                                                                             
                                                                           
                                    </span>
                                    </span>

                                      <span v-else>أعجبنى</span>
                                    
                                    </a>

                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">

                                    <li><a class="" @click.prevent="addlikeOrReplies('like',episodeComm.id ,episodeComm.commentable_id)" href="#">
                                        <img src="/front/img/like-100.png" alt="" srcset="">
                                      </a>
                                    </li>

                                    <li>
                                      <a class="" href="#">
                                        <img src="/front/img/heart-100.png" alt="" srcset="">
                                      </a>
                                    </li>

                                    <li><a class="" href="#">
                                        <img src="/front/img/joy-100.png" alt="" srcset="">
                                      </a>
                                    </li>

                                    <li><a class="" href="#">
                                        <img src="/front/img/unlike-100.png" alt="" srcset="">
                                      </a>
                                    </li>
                                  </ul>
                                </span>

                              <span><a href="http://">رد</a></span>

                              <span v-if="episodeComm.reacts.length != 0">
                                   <div v-for="(item ,key) in episodeComm.reacts"> 
                              <!--       <i 
                                    v-if="item.react_type == 'like'"
                                    class="fa fa-thumbs-up" 
                                    style="color:#5177e9">
                                     {{countReacts}} 
                                    </i> 

                                    <i 
                                    v-if="item.react_type == 'love'"
                                    class="fa fa-heart" 
                                    style="color:#CA1919">
                                     {{countHeart}} 
                                    </i>  -->                                                                        
                                    <!-- </div> -->
                                    
                                    

<!-- 
                                    <i 
                                    class="fa fa-heart" 
                                    v-if="item.react_type == 'love'" 
                                    style="color:#CA1919"></i>  

                                    <i 
                                    class="fa fa-thumbs-down" 
                                    v-if="item.react_type == 'dislike'" 
                                    style="color:#f03"></i>

                                    <i 
                                    class="fa" 
                                    v-if="item.react_type == 'haha'">
                                      <img src="/front/img/joy-100.png"
                                      style="width:20px;" 
                                       alt="" srcset="">
                                    </i> -->

                                   </div>
                              
                                
                              </span>

                              <span v-else>
                                  <i 
                                  class="fa" >
                                  <span style="color:#000">.</span>
                                  </i>                                  
                              </span>                             
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="modal-footer">

                    <div class="row" style="width: 100%;">
                      <div class="col-md-12">
                        <div class="type-comment">
                          <div class="input-group">
                            <input type="text" 
                            v-model="commentsEpisodeAnimes.comments_message"
                            class="form-control" 
                            placeholder="أكتب تعليق...."
                              aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button @click.prevent="addComentsAnimes" class="btn btn-secondary">
                              <i class="fa fa-send"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  End episode commet -->  	

            <!-- start whatch latest episode -->
            <!-- Modal -->
            <div class="modal fade" id="whatch-latest-episode" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">إختر السيرفر</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row warning">
                      <div class="container">
                        <div v-for="video in latestEpisodeAnimeWithServer.videos" :key="index">
                        <a
                         @click="goToPlayer(video.link ,video.episode_id,'season')"
                         :href="video.link" target="_blank">{{video.server}}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">إغلاق</button>
                    <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                  </div>
                </div>
              </div>
            </div>
            <!--  End whatch latest episode -->             				
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
				latestEpisodesAnimes:[],
				episodeComments:[],
        latestEpisodeAnimeWithServer:[],

            commentsEpisodeAnimes:{
              comments_message:null,
              anime_episode_id:null,
            },				
			}
		},

		created(){
			this.getLatestEpisodesAnimes();
		},

        computed:{
            getUser(){
                return this.$store.getters.get_user;
            },
            getToken(){
                return this.$store.getters.get_token;
            }, 
        },      

		methods:{
			getLatestEpisodesAnimes(){
        this.isLoading = true
			this.$store.dispatch("getHomeContents","latestEpisodesAnimes").then((res)=>{
        
				this.latestEpisodesAnimes = res;
        this.isLoading = false

			}).catch((err)=>{
				console.log(err)
			})		
			},

      getlatestEpisodeAnimeWithServer(id){

        this.axios.get('https://animeeplus.online/api/animes/episodeshow/'+id+'/code'
        ).then(res=>{

            this.latestEpisodeAnimeWithServer = res.data.episode;

        }).catch(err=>{
            console.log(err.message);
        })
      },  


        getAnimesComment(id){

          this.commentsEpisodeAnimes.anime_episode_id = id
            this.axios.get('https://animeeplus.online/api/media/episodesanimes/comments/'+id+'/code'
            ).then(res=>{

                this.episodeComments = res.data.comments; 

            }).catch(err=>{
                console.log(err);
            })
        },		

      addComentsAnimes(){
        let episodeAnimeId = this.commentsEpisodeAnimes.anime_episode_id;
        const headers ={
                'Authorization': 'Bearer '+ this.getToken,
              }          

          this.axios.post('https://animeeplus.online/api/media/episodeAnime/addcomment',{
            movie_id: episodeAnimeId,
            comments_message: this.commentsEpisodeAnimes.comments_message,
          },{headers}
          ).then(res=>{
            
            if (res.status != '') {
              this.getAnimesComment(episodeAnimeId);
            }            

          }).catch(err=>{
              console.log(err);
          })                
      } ,

        goToPlayer(link ,id,type){
            if (type == "season") {
                this.$store.dispatch("goToPlayer",{link: link,id:id,type:'season'});
                 this.$router.push(window.open('play','_blank'))

            }else if(type == "anim"){
                this.$store.dispatch("goToPlayer",{link: link,id:id,type:'anim'});
                 this.$router.push(window.open('play','_blank'))                 
            }
        }, 

		}
	}
</script>