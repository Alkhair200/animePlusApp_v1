<template>
    <div>

    <section class="home-carousel">
<!-- :autoplay="10000" -->
  <Carousel  :wrap-around="true" >
    <Slide v-for="(item,index) in homeContents.featured" :key="item.id">
      <div class="carousel__item">
        <div class="shadow"></div>
        <img :src="item.poster_path" width="100%" alt="">
        <div class="miniposter">
            <div class="image">
               <img :src="item.miniposter" alt=""> 
            </div>
            <h4>{{item.title}}</h4>
            <ol class="sm-list">
                <li>{{item.genre}}</li>
                <li>{{moment(item.created_at).format("YYYY") }}</li>
                <li>{{item.vote_average}}
                    <i class="fa fa-star"></i>
                </li>
            </ol>
            <div class="row home-btn">
                <div class="col-md-4 col-sm-12">
                    <button class="btn btn-danger">شاهد الاَن</button>
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
                            <i class="fas fa-arrow-left"></i>
                        </a>
                    </div>
                </div>

                <carousel :items-to-show="3">
                <slide v-for="(latestSeri, index) in latestEpisodes.data" :key="index">
                    <div class="carousel__item">
                        <div class="row" style="height: 230px;">
                            <div class="col-md-8 col-sm-6 move-content">
                                <h5>{{latestSeri.name}}</h5>
                                <span>

                                     قبل 18 ساعة  &nbsp;<i class="far fa-clock"></i>
                                </span>
                                <h6 class="season">{{latestSeri.seasons_name}}</h6>
                                <h6 class="episode">{{latestSeri.episode_name}}</h6>

                                <div class="row">
                                    <div class="col-6  text-center">
                                        <a class="dics-dtn"><i class="fa fa-commenting-o"></i> التعليقات</a>
                                    </div>
                                    <div class="col-6 text-center" style="padding-right: 5px;">
                                        <a class="dics-dtn"><i class="fa fa-info-circle"></i> دخول</a>
                                    </div>
                                </div>

                            </div> 
                            <div class="col-md-4 col-sm-6 move-image">
                                <img :src="latestSeri.poster_path" alt="" style="width:100%">
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
                        <h2>اخر المسلسلات</h2>
                    </div>

                    <div class="right">
                        <a href="test.html">
                            <p>مشاهدة الكل</p>
                            <i class="fas fa-arrow-left"></i>
                        </a>
                    </div>
                </div>
                <carousel :items-to-show="6">
                <slide v-for="(latestSeri, index) in latestSeries.data" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <router-link :to="{ name: 'season', params: { id:latestSeri.id } } " >
                            <div class="col-md-3 col-sm-6 serie-image">
                                
                                    <img :src="latestSeri.poster_path" alt="">
                                
                                 <h6>{{latestSeri.name}}</h6>
                            </div>    
                            </router-link>                           
                        </div>
                    </div>
                </slide>

                <template #addons>
                  <!-- <navigation /> -->
                  <pagination />
                </template>
                </carousel>   
<!--                 <div class="owl-carousel top-slider owl-theme">
                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/e8/ed/3a/e8ed3a18eb5f35e05882fd4b2c531619.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Doctor Sleep</h4>
                            <h6>2019</h6>
                        </a>
                    </div>
                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/e8/ed/3a/e8ed3a18eb5f35e05882fd4b2c531619.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Doctor Sleep</h4>
                            <h6>2019</h6>
                        </a>
                    </div>
                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/39/72/4d/39724d949a63c777247ce84cfc96e969.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Terminator: Dark Fate</h4>
                            <h6>2019</h6>
                        </a>
                    </div>

                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/02/93/0f/02930feaf86e13a87ffcde4f7b1dc7d8.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Zombieland: Double Tap</h4>
                            <h6>2019</h6>
                        </a>
                    </div>
                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/02/93/0f/02930feaf86e13a87ffcde4f7b1dc7d8.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Zombieland: Double Tap</h4>
                            <h6>2019</h6>
                        </a>
                    </div>

                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/02/93/0f/02930feaf86e13a87ffcde4f7b1dc7d8.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Zombieland: Double Tap</h4>
                            <h6>2019</h6>
                        </a>
                    </div>

                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/02/93/0f/02930feaf86e13a87ffcde4f7b1dc7d8.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Zombieland: Double Tap</h4>
                            <h6>2019</h6>
                        </a>
                    </div>


                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/c1/b9/32/c1b932ed723486efb7f52fefc35f673f.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Pet Sematary</h4>
                            <h6>2019</h6>
                        </a>
                    </div>
                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/4f/de/02/4fde02bc4a420213d1ab083ada7c4f2c.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Us</h4>
                            <h6>2019</h6>
                        </a>
                    </div>
                    <div class="item movie-item">
                        <a href="test.html">
                            <div class="movie-poster-box">
                                <img src="https://i.pinimg.com/474x/50/dd/74/50dd748acabdd528df05caec926313a5.jpg"
                                    alt="" class="img-fluid">
                                <div class="play-btn">
                                    <i class="far fa-play-circle"></i>
                                </div>
                            </div>
                            <h4>Glass</h4>
                            <h6>2019</h6>
                        </a>
                    </div>
                </div> -->

            </div>
        </section>

    </main>

    <Footer></Footer>
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
            moment: moment,
        }
    },

    created(){
        this.getHomeContents();
        this.getLatestSeries();
        this.getLatestEpisodes();
    },

    methods:{

        getHomeContents(){

            this.axios.get("https://animeeplus.online/api/media/homecontent/code"
            ).then(res=>{

                this.homeContents = res.data;
                console.log(this.homeContents.featured);
            }).catch(err=>{
                console.log(err);
            })
        },

        getLatestSeries(){

            this.axios.get("https://animeeplus.online/api/series/latestadded/code"
            ).then(res=>{

                this.latestSeries = res.data;
            }).catch(err=>{
                console.log(err);
            })
        },

        getLatestEpisodes(){

            this.axios.get("https://animeeplus.online/api/media/seriesEpisodesAll/code"
            ).then(res=>{

                this.latestEpisodes = res.data;

            }).catch(err=>{
                console.log(err);
            })
        }           
    }

}
</script>

<style>
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}



.carousel__item {
  min-height: 200px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item img{
    width:100%;
    object-fit: cover;
}

.carousel__slide {
height: 80vh;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>