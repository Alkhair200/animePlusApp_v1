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
                <li>{{moment(item.created_at).format("YYYY") }}</li>
                <li>
                    <i class="fa fa-star"></i>
                    {{item.vote_average}}
                    
                </li>
            </ol>
            <div class="row home-btn">
                <div class="col-md-4 col-sm-12">
                    <button type="button" data-bs-toggle="modal" href="#whatch-episode" role="button" class="btn btn-danger">شاهد الاَن</button>
                </div>
                <div class="col-md-4 col-sm-12">
                     <button class="btn btn-light">
                        
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
                        <a href="test.html">
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
                                    <img :src="latestSeri.poster_path" alt="">
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
                       <!--      <div class="col-md-4 col-sm-6 move-image">
                            </div>      -->                          
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
                        <h2>اخر المسلسلات</h2>
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
                                <img :src="latestSeri.poster_path" alt="">
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
                  <!-- <div class="modal-footer">
                  <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">إغلاق</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">التعليقات</h1>
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
                                <span>
                                  <a href="http://" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                    aria-expanded="false">أعجبنى</a>

                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="" href="#">
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
                              </span>
                              <span><a href="http://">رد</a></span>
                              <span>
                                <i class="fa fa-heart"></i>
                                3
                              </span>
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
            <!--  End episode commet -->                          
    </div>
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


  mounted() {

  },   

    created(){
        this.getHomeContents();
    },

    methods:{

        getHomeContents(){

            this.axios.get("https://animeeplus.online/api/media/homecontent/code"
            ).then(res=>{

                this.homeContents = res.data;
                this.latestEpisodes = res.data;
                this.latestSeries = res.data;
                // console.log(res.data);

            }).catch(err=>{
                console.log(err);
            })
        },   

        getLatestEpisodeWithServer(id){

            this.axios.get('https://animeeplus.online/api/series/episodeshow/'+id+'/code'
            ).then(res=>{

                this.latestEpisodeWithServer = res.data.episode;

            }).catch(err=>{
                console.log(err);
            })
        },  

        getEpisodeComment(id){
                console.log(id);
            this.axios.get('https://animeeplus.online/api/media/episodes/comments/'+id+'/code'
            ).then(res=>{

                this.episodeComments = res.data.comments;    
                console.log(res.data.comments);            

            }).catch(err=>{
                console.log(err);
            })
        }                      
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
</style>