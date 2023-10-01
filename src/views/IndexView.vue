<template>
    <div>

    <section class="home-carousel">
        <!-- :autoplay="10000"  -->
        <Carousel  :wrap-around="true" id="carousel-home">
            <Slide v-for="(item,index) in homeContents.featured" :key="index">
              <div class="carousel__item">
                <div @click.prevent="goToPage(item.featured_id ,'season')" class="shadow"></div>
                <img :src="item.poster_path" alt="" class="img-poster">
                <div class="miniposter">
                    <div class="image">
                       <img :src="item.miniposter" alt=""> 
                    </div>
                    <h4>{{item.title.slice(0,25)}} <span v-if="item.title.length > 25">...</span></h4>
                    <ol class="sm-list">
                        <li>
                            {{item.genre}}
                        </li>
                        <li>{{moment(item.release_date).format("YYYY") }}
                        </li>
                        <li>
                            <i class="fa fa-star"></i>
                            {{item.vote_average}}
                            
                        </li>
                    </ol>
                    <div class="row home-btn">
                            <div class="col-md-3 col-sm-12">
                                <button @click="getServerFeatured(item.featured_id)" type="button" data-bs-toggle="modal" href="#whatch-episode-header" role="button" class="btn btn-danger btn-sm">شاهد الاَن</button>                               
                            </div>

                            <div class="col-md-3 col-sm-12">
                                <dropdown-menu v-if="getLoggedIn">
                                  <template #trigger>
                                    <button class="btn btn-light btn-sm">
                                        إضافة لقائمتي
                                        <i class="fa fa-bars" aria-hidden="true"></i>
                                    </button>                  
                                  </template>                

                                  <template #body>
                                    <ul>
                                        <li>
                                            <button :class="['btn',btnColor]" @click="addtofavAction(item.featured_id ,item.title,'now')">
                                                <i v-show="btnNow" :class="['fa fa-check', 'checked-type-'+item.featured_id]"></i>
                                              اشاهدها حالياً
                                            </button>        
                                        </li>
                                        <li>
                                            <button :class="['btn',btnColor]" @click="addtofavAction(item.featured_id ,item.title,'want')">
                                                <i v-show="btnWant" :class="['fa fa-check', 'checked-type-'+item.featured_id]"></i>
                                              أرغب بمشاهدتها
                                            </button>       
                                        </li>
                                        <li>
                                            <button class="btn" @click="addtofavAction(item.featured_id ,item.title,'done')">
                                                <i v-show="btnDone" :class="['fa fa-check', 'checked-type-'+item.featured_id]"></i>
                                              تمت مشاهدتها
                                            </button>                                      
                                        </li>
                                        <li>
                                            <button class="btn" @click="addtofavAction(item.featured_id ,item.title,'later')">
                                                <i v-show="btnLater" :class="['fa fa-check', 'checked-type-'+item.featured_id]"></i>
                                             أكمله لاحقاً
                                            </button>                                       
                                        </li>                        
                                      
                                    </ul>
                                  </template>
                                </dropdown-menu>

                                <button v-if="!getLoggedIn" @click="message('يجب عليك تسجيل الدخول أولاً')" class="btn btn-light">
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

        <section id="top" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>أنميات مستمرة</h2>
                    </div>

                    <div class="right">
                        <router-link to="latest-series">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(latestSeri, index) in ongoingAnime" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click.prevent="goToPage(latestSeri.id ,'season')">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="latestSeri.poster_path" alt="">
                            </div>  
                            <div class="col-md-12">
                            <h6 style="text-align: center;">
                                <span v-if="latestSeri.name.length > 21">.....</span>
                                {{latestSeri.name.slice(0, 21)}}
                            </h6>
                            </div>  
                                
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
        </section>    

        <section id="top" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>شخصيات رائجة</h2>
                    </div>

                    <div class="right">
                        <router-link to="popular-casters">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(popular, index) in popularCasters" :key="index">
                    <div class="carousel__item" style="width: 100%;">
                        <div class="row">
                            <a @click.prevent="goToPage(popular.id ,'season')">
                            <div class="col-md-3 col-sm-6 char-image">
                                <img v-lazy="popular.profile_path" alt="" style="border-radius: 100px; border: 4px solid #B41D1E;">
                                <h6 style="text-align: center;">
                                    {{popular.name.toUpperCase().slice(0, 10)}}
                                    <span v-if="popular.name.length > 10">...</span>
                                </h6>  
                            </div>  
                                
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
        </section>                

        <section id="moves" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>اَخر الحلقات</h2>                     
                    </div>

                    <div class="right">
                        <router-link to="/latest">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
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
                             
                                <h5>
                                    {{latestSeri.name.slice(0, 20)}}  
                                    <span v-if="latestSeri.name.length > 20">...</span> 
                                </h5>

                                <span class="date">

                                     <Timeago :datetime="latestSeri.created_at" long locale="ar"/>  &nbsp;<i class="far fa-clock"></i>
                                </span>
                                <h6 class="season">الموسم&nbsp;{{latestSeri.season_number}}</h6>
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
                                    <a  
                                        @click.prevent="goToPage(latestSeri.id ,'season')"
                                         class="dics-dtn"><i class="fa fa-info-circle"></i> دخول
                                    </a>
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

        <section id="moves" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>اَخر حلقات الكرتون</h2>                     
                    </div>

                    <div class="right">
                        <router-link to="/latest-episodes-animes">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>

                <carousel v-bind="settings" :breakpoints="breakpoints">
                <slide v-for="(latestSeri, index) in latestEpisodesAnimes" :key="index">
                    <div class="carousel__item">
                        <div class="row" style="height: 230px;">
                            <div class="move-content">
                                <div class="image-right">
                                    <button
                                    class="btn whatch-latest-episode" 
                                    type="button" 
                                    data-bs-toggle="modal" 
                                    href="#whatch-latest-episode-anim"
                                    @click="getLatestEpisodeAnimWithServer(latestSeri.anime_episode_id)"
                                    >
                                        <i class="fa fa-play-circle-o play-icon" aria-hidden="true"></i>
                                    </button>
                                    <img v-lazy="latestSeri.poster_path" alt="">
                                </div>
                                
                                <h5>
                                    {{latestSeri.name.slice(0, 20)}}  
                                    <span v-if="latestSeri.name.length > 20">...</span>                                     
                                </h5>
                                <span class="date">

                                     <Timeago :datetime="latestSeri.created_at" long locale="ar"/>  &nbsp;<i class="far fa-clock"></i>
                                </span>
                                <h6 class="season">الموسم&nbsp;{{latestSeri.season_number}}</h6>
                                <h6 class="episode">{{latestSeri.episode_name}}</h6>

                                <div class="row">
                                    <div class="col-6  text-center">
                                        <a
                                        v-if="getLoggedIn" 
                                        class="dics-dtn" 
                                        type="button" 
                                        data-bs-toggle="modal" 
                                        href="#anim-comments" role="button"
                                        @click="getLatestEpisodeAnimWithServer(latestSeri.anime_episode_id)"                                        
                                        >
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
                                    <a 

                                     

                                        class="dics-dtn"><i class="fa fa-info-circle"></i> دخول
                                    </a>
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
                        <h2>اَخر الأفلام المضافة</h2>
                    </div>

                    <div class="right">
                        <router-link to="latest-movie">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(latestMovei, index) in latestMovieWatched" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click.prevent="goToPage(latestMovei.id , 'latestMovie')">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="latestMovei.poster_path" alt="">
                            </div>  
                            <h6 style="text-align: center;">
                                <span v-if="latestMovei.title.length > 20">...</span>
                                {{latestMovei.title.slice(0,20)}}

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
        </section>

      <section id="top" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>اَخر المسلسلات</h2>
                    </div>

                    <div class="right">
                        <router-link to="latest-series">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(latestSeri, index) in latestSeries.recents" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click.prevent="goToPage(latestSeri.id ,'season')">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="latestSeri.poster_path" alt="">
                            </div>  
                            <h6 style="text-align: center;">
                                <span v-if="latestSeri.name.length > 20">...</span>
                                {{latestSeri.name.slice(0,20)}}
                                
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
        </section>        

        <section id="top" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>اَخر برامج الكرتون</h2>
                    </div>

                    <div class="right">
                        <router-link to="latest-anime">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(latestSeri, index) in latestAnim" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a>
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="latestSeri.poster_path" alt="">
                            </div>  
                            <h6 style="text-align: center;">
                                {{latestSeri.name.slice(0,20)}}
                                <span v-if="latestSeri.name.length > 20">...</span>
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
        </section>

        <section id="top" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>أكثر الأفلام مشاهدة</h2>
                    </div>

                    <div class="right">
                        <router-link to="latest-anime">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(latestSeri, index) in trending" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click.prevent="goToPage(latestSeri.id ,'latestMovie')">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="latestSeri.poster_path" alt="">
                            </div>  
                            <h6 style="text-align: center;">
                                {{latestSeri.title.slice(0,20)}}
                                <span v-if="latestSeri.title.length > 20">...</span>
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
        </section> 

        <section id="top" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>اأكثر المسلسلات مشاهدة</h2>
                    </div>

                    <div class="right">
                        <router-link to="latest-anime">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(latestSeri, index) in top10" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click.prevent="goToPage(latestSeri.id,'season')">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="latestSeri.poster_path" alt="">
                            </div>  
                            <h6 style="text-align: center;">
                                {{latestSeri.name.slice(0,20)}}
                                <span v-if="latestSeri.name.length > 20">...</span>
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
        </section>        

        <section id="top" class="section-padding">
            <div class="container">

                <div class="section-header">
                    <div class="left">
                        <h2>جديد هذا الشهر</h2>
                    </div>

                    <div class="right">
                        <router-link to="latest-series">
                            <p>مشاهدة الكل</p>
                            <i class="fa fa-arrow-left"></i>
                        </router-link>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(item, index) in thiWeeks" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click.prevent="goToPage(item.id , 'latestMovie')">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="item.poster_path" alt="">
                            </div>  
                            <h6 v-if="item.title" style="text-align: center;">
                                {{item.title.slice(0,20)}}
                                <span v-show="item.title.length > 20">...</span>
                            </h6>  
                            <h6 v-if="item.name" style="text-align: center;">
                                {{item.name.slice(0,20)}}
                                <span v-show="item.name.length > 20">...</span>                                
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
                        <a style="cursor: pointer;" @click="goToPlayer(video.link ,video.episode_id,'season')" >{{video.server}}</a>
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

            <!-- start whatch latest episode anim -->
            <!-- Modal -->
            <div class="modal fade" id="whatch-latest-episode-anim" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                        <div v-for="video in latestEpisodeAnimWithServer.videos" :key="index">
                        <a style="cursor: pointer;" @click="goToPlayer(video.link,video.episode_id,'anim')">{{video.server}}</a>
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
            <!--  End whatch latest episode anim -->              

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
                        <!-- <div v-if="episodeComm.reacts.length != 0" v-for="item in episodeComm.reacts"> -->
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
                                  <a :class="'react-text-type-'+episodeComm.id" href="http://" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                    aria-expanded="false">

                                    أعجبني
                                    </a>

                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">

                                    <li><a class="" @click.prevent="addlikeOrReplies('like',episodeComm.id ,episodeComm.commentable_id)" href="#">
                                        <img src="/front/img/like-100.png" alt="" srcset="">
                                      </a>
                                    </li>

                                    <li>
                                      <a class="" href="#" @click.prevent="addlikeOrReplies('love',episodeComm.id ,episodeComm.commentable_id)">
                                        <img src="/front/img/heart-100.png" alt="" srcset="">
                                      </a>
                                    </li>

                                    <li><a class="" href="#" @click.prevent="addlikeOrReplies('haha',episodeComm.id ,episodeComm.commentable_id)">
                                        <img src="/front/img/joy-100.png" alt="" srcset="">
                                      </a>
                                    </li>

                                    <li><a class="" href="#" @click.prevent="addlikeOrReplies('dislike',episodeComm.id ,episodeComm.commentable_id)">
                                        <img src="/front/img/unlike-100.png" alt="" srcset="">
                                      </a>
                                    </li>
                                  </ul>
                                </span>

                              <span><a href="http://">رد</a></span>

                                    <i
                                    :class="['fa fa-thumbs-up', 'myLike-'+episodeComm.id]" 
                                    style="color:#5b8cb8">
                                     
                                    </i> 


                                    <i 
                                    :class="['fa fa-thumbs-down', 'myDislike-'+episodeComm.id]" 
                                    style="color:#f03"></i>                                    

                                    <i
                                    :class="['fa fa-heart', 'myLove-'+episodeComm.id]" 
                                    style="color:#CA1919">
                                    
                                    </i>  

                                    <i class="fa">
                                        <span :class="'myHaha-'+episodeComm.id"></span>
                                      <img src="/front/img/joy-100.png"
                                      style="width:20px;" 
                                       alt="" srcset="">
                                    </i>                                                                  
                            </div>
                          </div>
                        </div>
                      <!-- </div> -->
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


           <!-- start episode anim comment -->
            <!-- Modal -->
            <div class="modal fade latest-episode-anim-comment" id="anim-comments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">التعليقات</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body comments">
                    <div class="comm-info">

                      <div class="users-comments" v-for="(episodeComm , index) in episodeAnimComments" :key="index">
                        <div>
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
                                  <a :class="'react-text-type-'+episodeComm.id" href="http://" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                    aria-expanded="false">

                                    أعجبني
                                    </a>

                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">

<!--                                     <li>
                                       <a class="" @click.prevent="addlikeOrRepliesAnim('like',episodeComm.id ,episodeComm.commentable_id ,item.reactable_type)" href="#">
                                        <img src="/front/img/like-100.png" alt="" srcset="">
                                      </a>
                                    </li>

                                    <li>
                                    <a class="" href="#" @click.prevent="addlikeOrRepliesAnim('love',episodeComm.id ,episodeComm.commentable_id,item.reactable_type)">
                                        <img src="/front/img/heart-100.png" alt="" srcset="">
                                      </a>
                                    </li>

                                    <li>
                                        <a class="" href="#" @click.prevent="addlikeOrRepliesAnim('haha',episodeComm.id ,episodeComm.commentable_id,item.reactable_type)">
                                        <img src="/front/img/joy-100.png" alt="" srcset="">
                                        </a>
                                    </li>

                                    <li>
                                        <a class="" href="#" @click.prevent="addlikeOrRepliesAnim('dislike',episodeComm.id ,episodeComm.commentable_id,item.reactable_type)">
                                        <img src="/front/img/unlike-100.png" alt="" srcset="">
                                      </a>
                                    </li> -->
                                  </ul>
                                </span>

                              <span><a href="http://">رد</a></span>

                                    <i
                                    :class="['fa fa-thumbs-up', 'myLike-'+episodeComm.id]" 
                                    style="color:#5b8cb8">
                                     
                                    </i> 


                                    <i 
                                    :class="['fa fa-thumbs-down', 'myDislike-'+episodeComm.id]" 
                                    style="color:#f03"></i>                                    

                                    <i
                                    :class="['fa fa-heart', 'myLove-'+episodeComm.id]" 
                                    style="color:#CA1919">
                                    
                                    </i>  

                                    <i class="fa">
                                        <span :class="'myHaha-'+episodeComm.id"></span>
                                      <img src="/front/img/joy-100.png"
                                      style="width:20px;" 
                                       alt="" srcset="">
                                    </i>                                                                  
                            </div>
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
            <!--  End episode anim commet -->                
                                          
    </div>

<div v-show="isLoading">
    <loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="" name="circular"></loader>   
</div>
</template>

<script>
import Footer from '../components/Footer.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import  {Timeago}  from 'vue2-timeago'
import moment from "moment";

export default{
    components:{
        Footer,
        Carousel,
        Slide,
        Pagination,
        Navigation, 
        Timeago,  
    },

    data(){
        return{
            homeContents:[],
            latestSeries:[],
            latestEpisodes:[],
            latestEpisodeWithServer:[],
            latestEpisodeAnimWithServer:[],
            episodeComments:[],
            episodeAnimComments:[],
            ongoingAnime:[],
            latestAnim:[],
            top10:[],
            trending:[],
            popularCasters:[],

            moment: moment,

            itemShow:3,
            thiWeeks:[],
            latestEpisodesAnimes:[],
            latestMovieWatched:[],

            // screenWidth: window.innerWidth,

            isLoading:false,
            countReacts:0,
            countHeart:0,

            btnNow: false,
            btnDone: false,
            btnWant: false,
            btnLater: false,

            commentsEpisode:{
              comments_message:null,
              episode_id:null,
            },

            commentsAnimEpisode:{
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

        getReactsCount(reactType ,reactable_id,reactable_type){

        const headers ={
          'Authorization': 'Bearer '+ this.getToken,
        } 

            let id = reactable_id;

                this.episodeComments.forEach((item,value)=>{

                    item.reacts.forEach((val)=>{

                    this.axios.post('https://animeeplus.online/api/media/reactsCount/'+item.id,{
                      react_type: reactType,
                      reactable_type : reactable_type,
                    },{headers}
                    ).then(res=>{

                let count = res.data.count

                // document.querySelectorAll('.myLike-'+reactable_id)[0].innerText = ''
                // document.querySelectorAll('.myDislike-'+reactable_id)[0].innerText = ''
                // document.querySelectorAll('.myHaha-'+reactable_id)[0].innerText = ''
                // document.querySelectorAll('.myLove-'+reactable_id)[0].innerText = ''

                if (reactType == 'like') {
                    let target = document.querySelectorAll('.myLike-'+reactable_id)[0];
                    if (count != 0) {
                        target.innerText = count
                    }else{
                        target.innerText = ''
                    }
                    
                               
                }else if(reactType == 'dislike'){
                    let target = document.querySelectorAll('.myDislike-'+reactable_id)[0];
                    if (count != 0) {
                        target.innerText = count
                    }else{
                        target.innerText = ''
                    }

                }else if(reactType == 'haha'){
                    let target = document.querySelectorAll('.myHaha-'+reactable_id)[0];
                    if (count != 0) {
                        target.innerText = count
                    }else{
                        target.innerText = ''
                    }

                }else if(reactType == 'love'){
                    let target = document.querySelectorAll('.myLove-'+reactable_id)[0];
                    if (count != 0) {
                        target.innerText = count
                    }else{
                        target.innerText = ''
                    }
                }

            }).catch(err=>{
                console.log(err);
            })
                    })
                })            

 
        },

      addlikeOrReplies(react_type ,comment_id,commentable_id ,reactable_type){

        let id = this.commentsEpisode.episode_id

        const headers ={
          'Authorization': 'Bearer '+ this.getToken,
        }      

        //create new react       
        this.axios.post('https://animeeplus.online/api/media/addCommentReacts/'+comment_id,{
          react_type: react_type,
          reactable_type: reactable_type
        },{headers}
        ).then(res=>{

            // react-text-type and color
            let text =document.querySelectorAll('.react-text-type-'+comment_id)[0]
            if (react_type == 'like') {
                text.innerText = 'أعجبني';
                text.style.color ='#5b8cb8'   

            }else if(react_type == 'love'){
                text.innerText = 'أحببته';
                text.style.color = '#c74032' 

            }else if(react_type == 'dislike'){
                text.innerText = 'لم يعجبني';
                text.style.color = 'rgb(255, 0, 51)'

            }else if(react_type == 'haha'){
                text.innerText = 'أضحكني';
                text.style.color = '#ebd458'
            }

            this.getHomeContents();
            // this.getReactsCount(react_type ,comment_id,reactable_type)
            // this.getEpisodeComment(commentable_id);
            

        }).catch(err=>{
            console.log(err);
        })      

      },

      addlikeOrRepliesAnim(react_type ,comment_id,commentable_id ,reactable_type){

        let id = this.commentsEpisode.episode_id

        const headers ={
          'Authorization': 'Bearer '+ this.getToken,
        }      

        //create new react       
        this.axios.post('https://animeeplus.online/api/media/addCommentReacts/'+comment_id,{
          react_type: react_type,
          reactable_type: reactable_type
        },{headers}
        ).then(res=>{

            // react-text-type and color
            let text =document.querySelectorAll('.react-text-type-'+comment_id)[0]
            if (react_type == 'like') {
                text.innerText = 'أعجبني';
                text.style.color ='#5b8cb8'   

            }else if(react_type == 'love'){
                text.innerText = 'أحببته';
                text.style.color = '#c74032' 

            }else if(react_type == 'dislike'){
                text.innerText = 'لم يعجبني';
                text.style.color = 'rgb(255, 0, 51)'

            }else if(react_type == 'haha'){
                text.innerText = 'أضحكني';
                text.style.color = '#ebd458'
            }

            this.getHomeContents();
            // this.getReactsCount(react_type ,comment_id,reactable_type)
            // this.getEpisodeComment(commentable_id);
            

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
                this.ongoingAnime = res.data.pinned;
                this.thiWeeks = res.data.thisweek;
                this.latestMovieWatched =res.data.latest;
                this.latestEpisodesAnimes = res.data.latest_episodes_animes;
                this.latestAnim = res.data.anime;
                this.top10 = res.data.top10;
                this.trending =res.data.trending;
                this.popularCasters = res.data.popular_casters;
                this.isLoading = false
                     console.log(res.data.anime); 
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

        getLatestEpisodeAnimWithServer(id){

            this.axios.get('https://animeeplus.online/api/animes/episodeshow/'+id+'/code'
            ).then(res=>{

                this.latestEpisodeAnimWithServer = res.data.episode;

            }).catch(err=>{
                console.log(err.message);
            })            
        },

        getEpisodeComment(id){

          this.commentsEpisode.episode_id = id
            this.axios.get('https://animeeplus.online/api/media/episodes/comments/'+id+'/code'
            ).then(res=>{

                this.episodeComments = res.data.comments;

                console.log(this.episodeComments)

                this.episodeComments.forEach((item,value)=>{

                    // item.reacts.forEach((val)=>{ 

                    //     this.getReactsCount(val.react_type,val.reactable_id ,val.reactable_type)
                    // })
                })

            }).catch(err=>{
                console.log(err);
            })
        },

        getEpisodeAnimComment(id){
          this.commentsAnimEpisode.episode_id = id
            this.axios.get('https://animeeplus.online/api/media/episodesanimes/comments/'+id+'/code'
            ).then(res=>{

                this.episodeAnimComments = res.data.comments;

                 console.log(this.episodeAnimComments);

                // this.episodeAnimComments.forEach((item,value)=>{

                //     item.reacts.forEach((val)=>{ 

                //         this.getReactsCount(val.react_type,val.reactable_id ,val.reactable_type)
                //     })
                // })

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
                    this.btnNow =false
                    this.btnDone = false
                    this.btnWant = false
                    this.btnLater = false

                    if (watch_type == "now") {
                        this.btnNow = true
                    }else if(watch_type == "later"){
                         this.btnLater = true
                    }else if(watch_type == "want"){
                         this.btnWant= true
                    }else if(watch_type == "done"){
                         this.btnDone = true
                    }

                    // '+item.
                    // let iconCheck =document.querySelectorAll('.checked-type-'+featured_id)[0]
                    // iconCheck.style.color("primary-color)");
                    // console.log(iconCheck)
                    this.$notify({
                       
                      title: "تم إضافة "+title+" الي قائمتي 🎉",
                      type: "success",
                    });                    
                }
            }).catch((err)=>{
                console.log(err)
            })
        },         

        goToPage(id ,type){
            if (type == "season") {
                this.$store.dispatch("goToPage",{id: id});

                this.$router.push('season') 

            }else if(type == "latestMovie"){
                this.$store.dispatch("goToPage",{id: id});

                this.$router.push('latest-movie')  

            }
        }, 

        goToPlayer(link ,id,type){
            if (type == "season") {
                this.$store.dispatch("goToPlayer",{link: link,id:id,type:'season'});
                 this.$router.push(window.open('play','_blank'))

            }else if(type == "anim"){
                this.$store.dispatch("goToPlayer",{link: link,id:id,type:'anim'});
                 this.$router.push(window.open('play','_blank'))                 
            }
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

.home-carousel .home-btn .btn{
    height:40px;

}

.home-carousel .v-dropdown-menu__body{
    background: #fff;
    border-radius: 10px;  
    margin-top: 6px;
    font-size: 14px;  
}
.home-carousel .v-dropdown-menu__body .btn{
    
}

.home-carousel .sm-list{
    width:100%;
}

.home-carousel .sm-list li:not(:last-child):after{
    content: '';
    background: #f03;
    color: #f03;
    height: 8px;
    width: 8px;
    position: absolute;
    margin-top: 10px;
    border-radius: 20px;
    margin-right: 8px;
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
    display:;
}


#comments .like-color{
    color:#5b8cb8;
}
#comments .love-color{
    color: #c74032;
}
</style>