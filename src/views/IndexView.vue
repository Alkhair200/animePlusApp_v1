<template>
    <div>

    <section class="home-carousel">
<!-- :autoplay="10000" -->
  <Carousel  :wrap-around="true" >
    <Slide v-for="(item,index) in homeContents.featured" :key="item.id">
      <div class="carousel__item">
        <div class="shadow"></div>
        <img :src="item.poster_path" alt="" class="img-poster">
        <div class="miniposter">
            <div class="image">
               <img :src="item.miniposter" alt=""> 
            </div>
            <h4>{{item.title}}</h4>
            <ol class="sm-list">
                <li>{{item.genre}}</li>
                <li>{{moment(item.release_date).format("YYYY") }}</li>
                <li>
                    <i class="fa fa-star"></i>
                    {{item.vote_average}}
                    
                </li>
            </ol>
            <div class="row home-btn">
                <div class="col-md-4 col-sm-12">
                    <button @click="getServerFeatured(item.featured_id)" type="button" data-bs-toggle="modal" href="#whatch-episode-header" role="button" class="btn btn-danger">شاهد الاَن</button>
                </div>
                <div class="col-md-4 col-sm-12">

                <dropdown-menu v-if="getLoggedIn">
                  <template #trigger>
                    <button class="btn btn-light">
                        إضافة لقائمتي
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>                  
                  </template>                

                  <template #body>
                    <ul>
                        <li>
                            <button class="btn" @click="addtofavAction(item.featured_id ,item.title,'now')">
                                <i :class="['fa fa-check', 'checked-type-'+item.featured_id]"></i>
                              اشاهدها حالياً
                            </button>        
                        </li>
                        <li>
                            <button class="btn" @click="addtofavAction(item.featured_id ,item.title,'want')">
                                <i :class="['fa fa-check', 'checked-type-'+item.featured_id]"></i>
                              أرغب بمشاهدتها
                            </button>       
                        </li>
                        <li>
                            <button class="btn" @click="addtofavAction(item.featured_id ,item.title,'done')">
                                <i :class="['fa fa-check', 'checked-type-'+item.featured_id]"></i>
                              تمت مشاهدتها
                            </button>                                      
                        </li>
                        <li>
                            <button class="btn" @click="addtofavAction(item.featured_id ,item.title,'want')">
                                <i :class="['fa fa-check', 'checked-type-'+item.featured_id]"></i>
                             أكمله لاحقاً
                            </button>                                       
                        </li>                        
                      
                    </ul>
                  </template>
                </dropdown-menu>

                    <button @click="message('يجب عليك تسجيل الدخول أولاً')" v-if="!getLoggedIn" class="btn btn-light">
                        إضافة لقائمتي
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>              
                   
                </div>
            </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</section>

    <main>

        <section class="premium-account">
            <div class="container">
                <a href="subscription.html">
                    <img src="https://animeeplus.online/api/image/custombanner" alt="">
                </a>
            </div>
        </section>     

        <section id="moves" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>اَخر الحلقات</h2>
                    </div>

                    <div class="right">
                        <a
                       type="button" 
                       data-bs-toggle="modal" 
                       href="#all-latest-episode" role="button">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </a>
                    </div>
                </div>

                <carousel v-bind="settings" :breakpoints="breakpoints">
                <slide v-for="(latestSeri, index) in latestEpisodes.latest_episodes" :key="index">
                    <div class="carousel__item">
                        <div class="row" style="height: 230px;">
                            <div class="move-content">
                                <div class="image-right">
                                    <button
                                    class="btn whatch-latest-episode" 
                                    type="button" 
                                    data-bs-toggle="modal" 
                                    href="#whatch-latest-episode"
                                    @click="getLatestEpisodeWithServer(latestSeri.episode_id)"
                                    >
                                        <i class="fa fa-play-circle-o play-icon" aria-hidden="true"></i>
                                    </button>
                                    <img v-lazy="latestSeri.poster_path" alt="">
                                </div>
                                
                                <h5>{{latestSeri.name}}</h5>
                                <span class="date">

                                     قبل 18 ساعة  &nbsp;<i class="far fa-clock"></i>
                                </span>
                                <h6 class="season">{{latestSeri.seasons_name}}</h6>
                                <h6 class="episode">{{latestSeri.episode_name}}</h6>

                                <div class="row">
                                    <div class="col-6  text-center">
                                        <a
                                        v-if="getLoggedIn" 
                                        class="dics-dtn" 
                                        type="button" 
                                        data-bs-toggle="modal" 
                                        href="#comments" role="button"
                                        @click="getEpisodeComment(latestSeri.episode_id)">
                                            <i class="fa fa-commenting-o"></i> التعليقات
                                        </a>

                                        <a
                                        v-if="!getLoggedIn" 
                                        class="dics-dtn" 
                                        type="button"
                                        @click="message('تحتاج الي تسجيل الدخول لتتمكن من التعليق')">
                                            <i class="fa fa-commenting-o"></i> التعليقات
                                        </a>                                        
                                    </div>
                                    <div class="col-6 text-center">
                                        <a class="dics-dtn"><i class="fa fa-info-circle"></i> دخول</a>
                                    </div>
                                </div>
                            </div>                         
                        </div>
                    </div>                   
                </slide>

                <template #addons>
                  <pagination />
                </template>
                </carousel>              
            </div>
        </section>

        <section id="top" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>اَخر المسلسلات</h2>
                    </div>

                    <div class="right">
                        <a href="test.html">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </a>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(latestSeri, index) in latestSeries.recents" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <router-link :to="{ name: 'season', params: { id:latestSeri.id } } " >
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="latestSeri.poster_path" alt="">
                            </div>  
                            <h6>{{latestSeri.name}}</h6>  
                            </router-link>                           
                        </div>
                    </div>
                </slide>

                <template #addons>
                  <navigation />
                  <!-- <pagination /> -->
                </template>
            </carousel>  
             
            </div>
        </section>

    </main>

    <Footer></Footer>

            <!-- start whatch episode from header-->
            <!-- Modal -->
            <div class="modal fade" id="whatch-episode-header" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                 <!--        <div v-for="video in episode.videos" :key="index">
                        <a :href="video.link" target="_blank">{{video.server}}</a>
                        </div>
 -->                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">إغلاق</button>
                    <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                  </div>
                </div>
              </div>
            </div>
            <!--  End whatch episode from header--> 


            <!-- start whatch episode main slider -->
            <!-- Modal -->
            <div class="modal fade" id="whatch-episode" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <!-- <h1 class="modal-title fs-5" id="exampleModalLabel">الموسم: 0 -  الحلقة: 1</h1> -->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row warning video-img">
                      <img src="/front/img/image_2.jpg" alt="" srcset="">
                      <div class="video-text">
                        <h2>
                          اونا 1
                        </h2>
                        <p class="text-1">
                          <span>7.8</span>
                          &nbsp;
                          &nbsp;
                          2023-16-23
                        </p>
                        <p class="text-2">اونا اضافية وتعتبر الحلقة رقم 12 للانمى.</p>
                        <p class="text-3">whatch whatchwhatch whatchwhatch whatch.</p>
                      </div>
                    </div>

                    <div class='whatch-option'>

                      <div class="row">
                        <div class="col-md-6">
                          <button type="button" class="btn whatch-now">شاهد الآن</button>
                        </div>

                        <div class="col-md-6">
                          <button type="button" class="btn download-now">تحميل</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  End whatch episode main slider -->     

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
                        <div v-for="video in latestEpisodeWithServer.videos" :key="index">
                        <a :href="video.link" target="_blank">{{video.server}}</a>
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

           <!-- start episode comment -->
            <!-- Modal -->
            <div class="modal fade latest-episode-comment " id="comments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">التعليقات ({{episodeComments.length }}) </h1>
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
                                    <i 
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
                                    </i>                                                                         
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
                            <input type="text" v-model="commentsEpisode.comments_message" class="form-control" placeholder="أكتب تعليق...."
                              aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button @click.prevent="addComentsEpisode" class="btn btn-secondary">
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



           <!-- start all latest episode -->
            <!-- Modal -->
            <div class="modal fade latest-episode-comment " id="all-latest-episode" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">اَخر الحلقات</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                        <div class="row" style="justify-content: center;">
                            <div class="card m-2 col-md-5 col-sm-12" style="max-width: 540px;"
                            v-for="(latestSeri, index) in latestEpisodes.latest_episodes" :key="index">
                              <div class="row g-0 ">
                                <div class="col-md-4">
                                  <img src="front/img/51107.jpg" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <h5 class="card-title">{{latestSeri.name}}</h5>
                                    <span class="date">

                                         قبل 18 ساعة  &nbsp;<i class="far fa-clock"></i>
                                    </span>
                                    <h6 class="season">{{latestSeri.seasons_name}}</h6>
                                    <h6 class="episode">{{latestSeri.episode_name}}</h6>

                                    <div class="row">
                                        <div class="col-6  text-center">
                                            <a 
                                            class="dics-dtn" 
                                            type="button" 
                                            data-bs-toggle="modal" 
                                            href="#comments" role="button"
                                            @click="getEpisodeComment(latestSeri.episode_id)">
                                                <i class="fa fa-commenting-o"></i> التعليقات
                                            </a>
                                        </div>
                                        <div class="col-6 text-center">
                                            <a class="dics-dtn"><i class="fa fa-info-circle"></i> دخول</a>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                  </div>
                  <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button> -->

                    <div class="row" style="width: 100%;">
                      <div class="col-md-12">
                        <div class="type-comment">
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="أكتب تعليق...."
                              aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-secondary">
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
            <!--  End all latest episode -->                                           
    </div>

<!-- <div v-show="isLoading">
<loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="false" name="circular"></loader>   
    </div>    --> 
</template>

<script>
import Footer from '../components/Footer.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import moment from "moment";

export default{
    components:{
        Footer,
        Carousel,
        Slide,
        Pagination,
        Navigation,        
    },

    data(){
        return{
            homeContents:[],
            latestSeries:[],
            latestEpisodes:[],
            latestEpisodeWithServer:[],
            episodeComments:[],
            moment: moment,
            itemShow:3,
            screenWidth: window.innerWidth,
            isLoading:false,
            countReacts:0,
            countHeart:0,

            commentsEpisode:{
              comments_message:null,
              episode_id:null,
            },

            settings: {
              itemsToShow: 1,
              snapAlign: 'center',
            },

            breakpoints:{
              // 700px and up
              700: {
                itemsToShow: 2,
                snapAlign: 'center',
              },
              // 1024 and up
              1024: {
                itemsToShow: 3,
                snapAlign: 'start',
              },
            },

            settingsLatestSeri: {
                itemsToShow: 2,
                snapAlign: 'center',
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


        computed:{
            getToken(){
                return this.$store.getters.get_token;
            },
            getUser(){
                return this.$store.getters.get_user;
            },
            getLoggedIn(){
                return this.$store.getters.get_loggedIn
            },               
        },   

    created(){
        this.getHomeContents();
        this.$store.dispatch("getParams")
    },

    methods:{

        getServerFeatured(id){
            this.axios.get('https://animeeplus.online/api/series/episodeshow/'+id+'/code'
            ).then(res=>{

                console.log(res.data);

            }).catch(err=>{
                console.log(err.message);
            })
        },

      addlikeOrReplies(react_type ,comment_id,commentable_id){
        const headers ={
          'Authorization': 'Bearer '+ this.getToken,
        }  
        let reactType = null;
        if (react_type == 'like') {
            this.countReacts ++;
          reactType = react_type;
           this.isActive =! this.isActive;
        }

            this.axios.post('https://animeeplus.online/api/media/addCommentReacts/'+comment_id,{
              react_type: reactType
            },{headers}
            ).then(res=>{

                this.getEpisodeComment(commentable_id);

            }).catch(err=>{
                console.log(err);
            })        
      },

        getHomeContents(){

            this.isLoading = true
            this.axios.get("https://animeeplus.online/api/media/homecontent/code"
            ).then(res=>{

                this.homeContents = res.data;
                this.latestEpisodes = res.data;
                this.latestSeries = res.data;
                this.isLoading = false

            }).catch(err=>{
                this.isLoading = false
                console.log(err);
                if (err.message == "Network Error") {
                    window.alert(
                      "لا يوجد إتصال</n>تحقق من الاتصال بالانترنت ثم اعد المحاوله")
                }
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

        getEpisodeComment(id){

          this.commentsEpisode.episode_id = id
            this.axios.get('https://animeeplus.online/api/media/episodes/comments/'+id+'/code'
            ).then(res=>{

                this.episodeComments = res.data.comments; 
                this.episodeComments.forEach((value, index) => {

                    value.reacts.forEach((item)=>{
                        if (item.react_type == "like") {
                            this.countReacts ++;
                        }else if(item.react_type == "love"){
                            this.countHeart ++;
                        }

                        
                    })
                });

            }).catch(err=>{
                console.log(err);
            })
        },

        addComentsEpisode(){
          let episodeId = this.commentsEpisode.episode_id;
          const headers ={
                  'Authorization': 'Bearer '+ this.getToken,
                }          

            this.axios.post('https://animeeplus.online/api/media/episode/addcomment',{
              movie_id: episodeId,
              comments_message: this.commentsEpisode.comments_message,
            },{headers}
            ).then(res=>{

              if (res.data != '') {
                this.getEpisodeComment(episodeId);
              }            

            }).catch(err=>{
                console.log(err);
            })                
        } , 

        addtofavAction(featured_id,title,watch_type){
            this.$store.dispatch('addtofavAction',{
                id: featured_id,
                watch_type: watch_type
            }).then((res)=>{

                if (res.data != '') {
                    // let getAllcheckIcon =document.querySelectorAll(".fa-check")

                    // getAllcheckIcon.forEach((element) => {
                    //     // Change the color of each element here
                    //     element.style.display = 'none'

                    // });                    

                    // document.querySelectorAll(".checked-type-"+featured_id)[0].style.display ="inline-block";
                    //console.log(document.querySelectorAll(".checked-type-"+featured_id)[0])


                    this.$notify({
                       
                      title: "تم إضافة "+title+" الي قائمتي 🎉",
                      type: "success",
                    });                    
                }
            }).catch((err)=>{
                console.log(err)
            })
        },

        message(msg){
            this.$notify({
               
              title: msg,
              type: "warn",
            });
        },               
    }

}
</script>

<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
#moves .image-right{
    position: relative;

}

#moves .image-right .btn{
    width: 100%;
    display: block;
    height: 100%;
    padding: 0;
    margin-left: 10px;
    position: absolute;
}

#moves .image-right .btn:hover{
box-shadow: none;
}

.modal-header .btn-close{
    margin:0;
}

#all-latest-episode .card-body{
background-color: #0E0E0D;  
height: 100%;  
}

#all-latest-episode .card{
    background: none ;
    border-radius: 10px;
overflow: hidden;
box-shadow: 0px 0px 3px #868484;
}

#all-latest-episode .card img{
    height: 100%;
object-fit: cover;
} 

.home-carousel .v-dropdown-menu__body{
    background: #fff;
    border-radius: 10px;  
    margin-top: 6px;
    font-size: 14px;  
}
.home-carousel .v-dropdown-menu__body .btn{
    
}

.home-carousel .v-dropdown-menu__body .btn:hover{
    background:var(--primary-color);
    color:#fff;
    box-shadow:none;
}

.home-carousel .v-dropdown-menu__body ul{
    padding:0 ;
}

.home-carousel .fa-check{
    display:none;
}


</style>