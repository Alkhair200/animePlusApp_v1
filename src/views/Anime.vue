<template>
  <section class="slider">

    <div class="shadow"></div>
    <div class="image-slide" v-bind:style="{backgroundImage: 'url(' +episode.poster_path+ ')'}">
      <!-- <img src=""> -->
    </div>
    <div class="text-image">
      <img :src="episode.poster_path">
<!--       <h4>
        {{episode.serieName}}
      </h4> -->
      <p>
        <span class="views"><i class="fa fa-eye"></i> {{episode.views}} ألف </span>
      </p>

      <ul class="list-style d-flex justify-content-center align-episodes-center">
        <li>
          <i class="fa fa-star"></i> {{episode.vote_average}}
        </li>
        <li>
          {{episode.first_air_date}}
        </li>
        <li>
          <span v-if="episode.seasons">عدد الموسم: {{episode.seasons.length}}</span>
        </li>
        <li>
          <span v-if="episode.newEpisodes == 0">مكتمل</span>
          <span v-if="episode.newEpisodes == 1">مستمر</span>
          
        </li>
      </ul>
    </div>
  </section>

  <div class="container">
    <div class="row">
      <section class="rating">
        <div class="main-comment">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="comment">
                <button v-if="getLoggedIn" type="button" data-bs-toggle="modal" href="#series-comments" role="button"
                 @click="getEpisodeComment(episode.id)"
                  class="btn btn">التعليقات</button>

                <button v-if="!getLoggedIn" type="button" @click.prevent="message('يجب عليك تسجيل الخول اولاً')" role="button"
                  class="btn btn">التعليقات</button>                  
              </div>
            </div>
            <div class="col-md-12 col-sm-12">
              <div class="add">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <button type="button" data-bs-toggle="modal" href="#rating-modal" role="button" :class="btnColor">
                      <i class="fa fa-star-o"></i>
                      <br>    
                      أضف تقييمك
                    </button>

                    <!-- End Ratings -->
                    <!-- Modal -->
                    <div class="modal fade" id="rating-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog ">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">تقييمك</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div class="comm-info">
                              <h5>القصة</h5>
                              <star-rating 
                              @update:rating ="setStory"
                              v-bind:max-rating="10"
                              v-bind:star-size="25"
                              active-color="#dc3545"></star-rating>

                              <h5>الشخصيات</h5>
                              <star-rating 
                              @update:rating ="setChars"
                              v-bind:max-rating="10"
                              v-bind:star-size="25"
                              active-color="#dc3545"></star-rating>

                              <h5>الرسم والتحريك</h5>
                              <star-rating 
                              @update:rating ="setAnimation"
                              v-bind:max-rating="10"
                              v-bind:star-size="25"
                              active-color="#dc3545"></star-rating>

                              <h5>الموسيقى</h5>
                              <star-rating 
                              @update:rating ="setMusic"
                              v-bind:max-rating="10"
                              v-bind:star-size="25"
                              active-color="#dc3545"></star-rating>   

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger  btn-sm" data-bs-dismiss="modal">إغلاق</button>
                            &nbsp;
                                <button @click.prevent="addEvaluation" type="button" 
                                :class="['btn btn-sm',btnRateColor]">تقييم</button>
                            </div>                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End Ratings -->

                  </div>
                  <div class="col-md-6  col-sm-6">
                    <i class="fa fa-star"></i>
                    <br>
                    <div v-if="episode.story">{{episode.story.aveg}}/10
                      <br>
                      <span v-show="episode.story.count != 0 ">({{episode.story.count}} &nbsp;صوت)</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12">
              <div class="social">
                <ul class="content">
                  <li>
                    <i class="fa fa-video-camera"></i>
                    <br>
                    التريلر
                  </li>
                  <li>
                    <i class="fa fa-share-alt"></i>
                    <br>
                    مشاركة
                  </li>

                  <li>
                    <div v-if="getLoggedIn" class="dropdown">
                      <button :class="dropbtn">
                        <img style="padding:0;width: 20px;height: 20px;" src="/front/img/list2.png" alt="">
                        <br>    
                        إضافة لقائمتي
                      </button>
                      <div class="dropdown-content">
                        <ul>
                          <li>
                            <a @click="addtofavAction(episode.id ,episode.title,'now')" href="#">
                              <span> <i class="fa fa-plus"></i> </span>
                              اشاهدها حالياً
                              <span class="icon-left"> <i class="fa fa-plus"></i> </span>      
                            </a>                             
                          </li>
                          <li>
                            <a @click="addtofavAction(episode.id ,episode.title,'want')" href="#">
                              <span> <i class="fa fa-plus"></i> </span>
                              أرغب بمشاهدتها
                              <span class="icon-left"> <i class="fa fa-plus"></i> </span>      
                            </a>                              
                          </li>
                          <li>
                        <a @click="addtofavAction(episode.id ,episode.title,'done')" href="#">
                          <span> <i class="fa fa-plus"></i> </span>
                          تمت مشاهدتها
                          <span class="icon-left"> <i class="fa fa-plus"></i> </span>      
                        </a>                              
                          </li>
                          <li>
                        <a @click="addtofavAction(episode.id ,episode.title,'later')" href="#">
                          <span> <i class="fa fa-plus"></i> </span>
                          أكمله لاحقاً
                          <span class="icon-left"> <i class="fa fa-plus"></i> </span>      
                        </a>                              
                          </li>
                        </ul>                                                                                        
                      </div>                    
                    </div>                                      
                  </li>

                  <li>
                    <a :class="btnFavColor" @click.prevent="addToFav(episode.id,episode.name)" href="#">
                      <i class="fa fa-heart"></i>
                      <br>
                      المفضلة                      
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="story">
        <h4>القصة</h4>
        <p>
          {{episode.overview}}
        </p>
        <br>
        <p class="slug" style="overview:auto">
          <ul>
            <li v-for="(list ,index) in episode.genreslist" :key="index">{{list}}</li>
          </ul>
        </p>
      </section> 
      
      <section class="content">
        <h4>تصنيف المحتوى</h4>

        <div class="accordion" id="accordionExample">
          <div class="accordion-episode">
            <h2 class="accordion-header" id="headingOne">
              <button id="accordion" :class="['accordion-button',accordionButtonNasty ]" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                style="margin-right: auto; color:#fff">
                الفاظ نابيه
                &nbsp;
                <span class="descrip" v-if="nasty >= 1">شديد [{{episode.nasty.count}}]</span>
                <span class="descrip" v-else>لا يوجد</span>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">

                <div class="row">
                  <div class="col-md-12">
                    <div class="head">
                      <span class="head-text" v-if="nasty >= 1">عدد المصوتين ({{episode.nasty.count}})</span>
                      <p class="head-text" v-else>لا يوجد</p>

                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="body">
                      <p>هل يحتوي علي مشاهد بها الفاظ نابية ؟</p>
                      <div class="row">
                        <div class="col-md-3 col-sm-12">
                          <button class="btn btn-danger" @click.prevent="addClassify(episode.id ,'nasty')">يحتوي</button>
                        </div>
                        <div class="col-md-3 col-sm-12">
                          <button class="btn btn-success" @click.prevent="addClassify(episode.id ,'nasty')">لا يحتوي</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="accordion-episode">
            <h2 class="accordion-header" id="headingTwo">
              <button
              :class="['accordion-button , collapsed',accordionButtonBloody ]"
               type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                عنف و دمويه
                &nbsp;
                <span class="descrip" v-if="bloody >= 1">شديد [{{episode.bloody.count}}]</span>
                <span class="descrip" v-else>لا يوجد</span>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="head">
                      <span class="head-text"  v-if="bloody >= 1">عدد المصوتين ({{episode.bloody.count}})</span>
                      <p class="head-text" v-else>لا يوجد</p>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="body">
                      <p> هل يحتوي علي مشاهد بها عنف و دمويه ؟</p>
                      <div class="row">
                        <div class="col-md-3 col-sm-12">
                          <button @click.prevent="addClassify(episode.id ,'bloody')" class="btn btn-danger">يحتوي</button>
                        </div>
                        <div class="col-md-3 col-sm-12">
                          <button @click.prevent="addClassify(episode.id ,'bloody')" class="btn btn-success">لا يحتوي</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-episode">
            <h2 class="accordion-header" id="headingThree">
              <button :class="['accordion-button , collapsed',accordionButtonScary ]" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                مشاهد مخيفه او صادمه
                &nbsp;
                <span class="descrip" v-if="scary >= 1">متوسط [{{episode.scary.count}}]</span>
                <span class="descrip" v-else>لا يوجد</span>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="head">
                      <span class="head-text" v-if="scary >= 1">عدد المصوتين ({{episode.scary.count}})</span>
                      <p class="head-text" v-else>لا يوجد</p>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="body">
                      <p>هل يحتوي علي مشاهد مخيفه او صادمه ؟</p>
                      <div class="row">
                        <div class="col-md-3 col-sm-12">
                          <button class="btn btn-danger" @click.prevent="addClassify(episode.id ,'scary')">يحتوي</button>
                        </div>
                        <div class="col-md-3 col-sm-12">
                          <button class="btn btn-success" @click.prevent="addClassify(episode.id ,'scary')">لا يحتوي</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-episode">
            <h2 class="accordion-header" id="headingFour">
              <button :class="['accordion-button , collapsed',accordionButtonDrugs ]"  type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                مخدرات و كحول و تدخين
                &nbsp;
                <span class="descrip" v-if="drugs >= 1">متوسط [{{episode.drugs.count}}]</span>
                <span class="descrip" v-else>لا يوجد</span>
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="head">
                      <span class="head-text" v-if="drugs >= 1">عدد المصوتين ({{episode.drugs.count}})</span>
                      <p class="head-text" v-else>لا يوجد</p>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="body">
                      <p> هل يحتوى علي مشاهد بها مخدرات ؟</p>
                      <div class="row">
                        <div class="col-md-3 col-sm-12">
                          <button class="btn btn-danger" @click.prevent="addClassify(episode.id ,'drugs')">يحتوي</button>
                        </div>
                        <div class="col-md-3 col-sm-12">
                          <button class="btn btn-success" @click.prevent="addClassify(episode.id ,'drugs')">لا يحتوي</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="videos section-padding" id="popular">

        <div class="row">
          <div class="col-md-5 col-sm-5">
            <select class="form-select dropdown" aria-label="Default select example" 
            @change="getSeasonsWithEpisode($event)">
              <option selected disabled="">إختر الموسم</option>}
              option
              <option :class="[episode.seasons.length == 1?'selected':'']" :value="season.id" v-for="(season ,index) in episode.seasons" :key="index"
              >{{season.name}}
              </option>
            </select>
          </div>
          &nbsp;
          &nbsp;

          <div class="col-md-5 col-sm-5 nav-searchs">
            <input v-model="searchEpisodeNmber" class="form-control video-search bordred" type="search" placeholder="إبحث برقم الحلقه....">
          </div>

        </div>
        <br>
        <div class="row">
          <div class="col-sm-12 col-md-6" v-for="(episode, index) in findEpisodeName" :key="index">
          <div class="card mb-3" style="max-width: 540px;" >
            <div class="row g-0">
              <div class="col-md-4 col-sm-4 position-relative card-video">

                <div class="image-episode">
                  <button class="btn btn-whatch"
                    type="button" 
                    data-bs-toggle="modal" 
                    role="button"
                    href="#whatch-episode"
                    @click="getEpisodeWithServer(episode.id)">

                    <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                  </button>
                  <img :src="episode.still_path" class="img-fluid rounded-start" alt="...">
                </div>

                <!--  -->
              </div>
              <div class="col-md-8 col-sm-8">
                <div class="card-body">
                  <h5 class="card-title">
                     {{episode.name}}
                    <span>
                      <a class="btn exclamation" data-bs-toggle="modal" href="#exampleModal" role="button">
                        <i class="fa fa-exclamation-circle"></i>
                      </a>
                    </span>
                  </h5>

                  <div class=" comm-down">
                  <a v-if="getLoggedIn"  class="btn downloads" target="_blank">
                    <i class="fa fa-download"></i>
                    تحميل
                  </a>

                  <a class="btn comment" @click="getEpisodeComment(episode.id)" data-bs-toggle="modal" :href="'#comments-'+index" role="button">
                    <i class="fa fa-commenting">&nbsp; التعليقات</i>
                  </a>                    
                  </div>
                </div>
              </div>
            </div>                 

            <!-- start noty -->
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">الموسم: 0 - الحلقة: 1</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row warning">
                      <div class="container">
                        <p>
                          <i class="fa fa-warning"></i>
                          &nbsp;
                          أولاَ قم بالتأكد من سرعة الإنترنت عندك.
                        </p>
                        <p>
                          <i class="fa fa-warning"></i>
                          &nbsp;
                          ثانياَ قم بتشغيل VPN قبل إرسال البلاغ.
                        </p>
                        <p>
                          <i class="fa fa-warning"></i>
                          &nbsp;
                          ثالثاَ تكرار البلاغ يؤدي الي حظر حسابك.
                        </p>
                      </div>
                    </div>

                    <div class='check-option'>
                      <div class="dpx">
                        <div class='py'>
                          <label>
                            <input type="radio" class="option-input radio" name="example" checked />
                            الترجمة غير متزامنه مع الصوت
                          </label>
                          <label>
                            <input type="radio" class="option-input radio" name="example" />
                            ترجمة خاطئة
                          </label>
                          <label>
                            <input type="radio" class="option-input radio" name="example" />
                            الصوت غير واضح أو سيئ
                          </label>
                          <label>
                            <input type="radio" class="option-input radio" name="example" />
                            سيرفر معطل
                          </label>
                          <label>
                            <input type="radio" class="option-input radio" name="example" />
                            الفيديو لا يعمل إطلاقاً
                          </label>
                          <label>
                            <input type="radio" class="option-input radio" name="example" />
                            آخرى
                          </label>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <button type="button" class="btn send">إرسال</button>
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
            <!--  End noty -->

            <!-- start whatch and download -->
            <!-- Modal -->
            <div class="modal fade" id="whatch-down" tabindex="-1" aria-labelledby="exampleModalLabel"
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
            <!--  End whatch and download -->

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
          </div>
        </div>

        <div class="pagination" v-if="episodes.links != ''">
          <ul>
            <li v-for="(episode_link, key) in episodes.last_page" :key="key">
            <button @click.prevent="getSeasonsWithEpisode(page = key+1)" class="btn btn-light btn-sm">{{key+1}}</button>
            </li>
          </ul>
        </div>

            <!-- start whatch episode -->
            <!-- Modal -->
            <div class="modal fade" id="whatch-episode" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">إختر السيرفر</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="container">
                        <div v-for="video in episodeWithServer.videos" :key="index">
                        <a style="cursor: pointer;" @click="goToPlayer(video.link)" >{{video.server}}</a>
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
            <!--  End whatch episode -->   

            <!-- start series comment -->
            <!-- Modal -->
            <div class="modal fade" id="series-comments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">التعليقات</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body comments">
                    <div class="comm-info">

                      <div class="users-comments" v-for="(comments ,index) in seriesComments.comments">
                        <div class="row">
                          <div class="col-md-1 col-sm-1">
                            <div class="img-user">
                              <img :src="comments.user_image" alt="">
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-12">
                            <div class="info">
                              <h6>{{comments.user_name}}</h6>
                              <p class="comment">{{comments.comment}}</p>
                            </div>
                            <div class="active">
                              <span><a href="http://">1 ش</a></span>
                              <span>
                                <span>
                                  <a href="http://" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                    aria-expanded="false">أعجبنى</a>

                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="" href="#">
                                        <img src="#" alt="" srcset="">
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
            <!--  End series commets -->        
      </section> 

        <section v-if="casterslist != 0" id="top" class="section-padding casterslist">
            <div class="">

                <div class="section-header">
                    <div class="left">
                        <h2>الشخصيات</h2>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">

                <slide v-for="(latestSeri, index) in episode.casterslist" :key="index">
                    <div class="carousel__item" style="width: 100%;">
                        <div class="row">
                            <a @click.prevent="goToPage(latestSeri.id ,'season')">
                            <div class="col-md-3 col-sm-6 serie-image" style="height: 100%;">
                                <img v-lazy="latestSeri.profile_path" alt="" style="border-radius: 100px; border: 4px solid #B41D1E; height: 180px;">
                                <h6 style="text-align: center;">
                                    {{latestSeri.name.toUpperCase().slice(0, 10)}}
                                    <span v-if="latestSeri.name.length > 10">...</span>
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

        <section id="top" class="section-padding casterslist">
            <div class="">

                <div class="section-header">
                    <div class="left">
                        <h2>اَخرى</h2>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(related, index) in relateds" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click="goToPage(related.id ,'anime')">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="related.poster_path" alt="">
                            </div>  
                            <h6>
                              {{related.name.toUpperCase().slice(0, 15)}}
                                    <span v-if="related.name.length > 15">...</span>
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

    </div>
  </div>

<div v-show="isLoading">
    <loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="" name="circular"></loader>   
</div>  
</template>

  <script>

import Footer from '../components/Footer.vue';

import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import StarRating from 'vue-star-rating';


export default{
    components:{
        Footer, 
        StarRating,
        Bootstrap5Pagination,  
        Carousel, Slide, Pagination, Navigation,
    },

    data(){
        return{
            episode:[],
            episodes:{},
            seariesId:null,
            seriesComments:[],
            episodeComments:[],
            episodeWithServer:[],
            searchEpisodeNmber:'',
            favorite:[],
            season_id:null,
            relateds:[],
            story:null,
            chars:null,
            animation:null,
            music:null,
            isLoading:false,
            btnFavColor: "white-color",
            btnRateColor: "btn-secondary",
            btnColor:"white-color",
            dropbtn:"white-color",

            accordionButtonNasty: "before",
            accordionButtonBloody: "before",
            accordionButtonScary:"before",
            accordionButtonDrugs:"before", 
            casterslist:0,

            nasty:null,           
            drugs:null,
            bloody:null,
            scary:null,

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
        this.getSeasonEpisode();
        this.getRelatedsEpisode();
        this.getCommentsSeries();
        this.getEpisode();
    },

    mounted(){
      this.getSeasonEpisode();
    },

    computed:{
      findEpisodeName(){
          return this.episodes.data
          // return this.episodes.data.filter((episo) =>{
          //    return episo.episode_number.match(this.searchEpisodeNmber)
          // })
      },

      getLoggedIn(){
          return this.$store.getters.get_loggedIn
      }, 

      getToken(){
          return this.$store.getters.get_token
      },  

      get_pageId(){
        return this.$store.getters.get_pageId
      }, 
    },

    methods:{

        toggleColorFav(){
          if(this.btnFavColor === "white-color") {
            this.btnFavColor = "red-color";
          } 
          // else {
          //  this.btnFavColor = "white-color";
          // }    
        } , 

        toggleColor() {
          if(this.btnRateColor === "btn-secondary") {
            this.btnRateColor = "btn-success";
          } 
          // else {
          //  this.btnRateColor = "btn-secondary";
          // }
        },        

        getSeasonEpisode(){
          this.isLoading = true
          let id = this.get_pageId;

            this.axios.post('https://animeeplus.online/api/animes/show/'+id+'/code'
            ).then(res=>{

                this.episode = res.data;
                this.casterslist = res.data.casterslist.length

                let seasonId = res.data.seasons[0].id;

                 this.getEpisode(seasonId)

                this.nasty = this.episode.nasty.count
                this.drugs = this.episode.drugs.count
                this.bloody = this.episode.bloody.count
                this.scary = this.episode.scary.count

                
                if(this.nasty >=1){
                  this.accordionButtonNasty = "after"

                }
                if(this.bloody >=1){
                  this.accordionButtonBloody ="after"

                }
                 if(this.scary >=1){
                  this.accordionButtonScary ="after"

                }
                 if(this.drugs >=1){
                  this.accordionButtonDrugs ="after"
                }

                

                this.isLoading = false
            }).catch(err=>{
              this.isLoading = false
                console.log(err);
            })
        },

        getRelatedsEpisode(){
          let id = this.get_pageId;

            this.axios.get('https://animeeplus.online/api/animes/relateds/'+id+'/code'
            ).then(res=>{

                this.relateds = res.data.relateds;

            }).catch(err=>{
                console.log(err);
            })
        },  

        getEpisode (id ,page){

            this.axios.get('https://animeeplus.online/api/animes/seasons/'+id+'/code?page='+page
            ).then(res=>{
                this.episodes = res.data;

            }).catch(err=>{
                console.log(err);
            })
        } ,   
    
        getSeasonsWithEpisode(id,page){

           let seasonId = null
           if (event) {
              seasonId = event.target.value
           }     
            this.axios.get('https://animeeplus.online/api/series/seasons/'+seasonId+'/code?page='+page
            ).then(res=>{

                this.episodes = res.data;

            }).catch(err=>{
                console.log(err);
            })
        },

        getCommentsSeries(){

            this.axios.get('https://animeeplus.online/api/media/animes/detail/comments/'+this.seariesId+'/code'
            ).then(res=>{

                this.seriesComments = res.data;

            }).catch(err=>{
                console.log(err);
            })
        },

        getEpisodeComment(id){
          this.commentsEpisode.episode_id = id
// console.log(id );

            this.axios.get('https://animeeplus.online/api/media/episodesanimes/comments/'+id+'/code'
            ).then(res=>{

                this.episodeComments = res.data.comments;                
            }).catch(err=>{
                console.log(err);
            })
        },

        goToPage(id ,type){

          this.$store.dispatch("goToPage",{id: id});
          this.getSeasonEpisode();
          this.getRelatedsEpisode();
          this.getCommentsSeries();

            this.$router.push('anime')
        },         

        getEpisodeWithServer(id){
          this.axios.get('https://animeeplus.online/api/series/episodeshow/'+id+'/code'
          ).then(res=>{

              this.episodeWithServer = res.data.episode;

          }).catch(err=>{
              console.log(err.message);
          })          
        },

        addComentsEpisode(){
          let episodeId = this.commentsEpisode.episode_id;
          const headers ={
                  'Authorization': 'Bearer '+ this.getToken,
                }          

            this.axios.post('https://animeeplus.online/api/media/episodeAnime/addcomment',{
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

        addtofavAction(id,title,watch_type){

            this.$store.dispatch('addtofavAction',{
                id: id,
                watch_type: watch_type
            }).then((res)=>{

                if (res.data != '') {

                  if(this.dropbtn == "white-color"){
                    this.dropbtn = "red-color"
                  }                  
                    
                    this.$notify({
                       
                      title: "تم إضافة "+title+" الي قائمتي 🎉",
                      type: "success",
                    });                    
                }
            }).catch((err)=>{
                console.log(err)
            })
        },

        addToFav(id,title){

            const headers ={
              'Authorization': 'Bearer '+ this.getToken,
            } 

            this.axios.post('https://animeeplus.online/api/serie/addtofav/'+id,{
              id :id
            },{headers}
            ).then(res=>{ 
                this.toggleColorFav()
                this.favorite = res.data; 
                if (res.status = 200) {
                  this.$notify({
                     
                    title: "تم إضافة "+title+" الي المفضلة 🎉",
                    type: "success",
                  }); 
                }           

            }).catch(err=>{
                console.log(err);
            })
        },

        addClassify(id , type){

          const headers ={
                  'Authorization': 'Bearer '+ this.getToken,
                }          

            this.axios.post('https://animeeplus.online/api/serie/addClassify/'+id+'/'+type,{
              type : type,
            },
                {headers}
            ).then(res=>{

              if (res.data.classify) {

                if(type == "nasty"){
                  this.accordionButtonNasty = "after"

                }else if(type == "bloody"){
                  this.accordionButtonBloody ="after"

                }else if(type == "scary"){
                  this.accordionButtonScary ="after"

                }else if(type == "drugs"){
                  this.accordionButtonDrugs ="after"
                }                  
                  this.$notify({
                     
                    title: "تمت الإضافه 🎉",
                    type: "success",
                  });  

                  this.getSeasonEpisode();
              }            

            }).catch(err=>{
                console.log(err);
            })                
        } ,  

        // Set ratings 
      setStory(rating){
          this.story = rating;
      },  

      setChars(rating){
        this.chars = rating;
      },

      setAnimation(rating){
        this.animation = rating;
      },

      setMusic(rating){
          this.music = rating;
      },

      addEvaluation(){
        if (this.story != null || this.chars != null || this.animation != null || this.music != null) {

           let id = this.get_pageId;
            const headers ={
                    'Authorization': 'Bearer '+ this.getToken,
                  }  

              const types ={
                'story': this.story,
                'chars': this.chars,
                'music': this.music,
                'animation': this.animation
              }       

                   const type = ('music' ,'story','animation' ,'chars');

              this.axios.post('https://animeeplus.online/api/anime/addEvaluation/'+id+'/'+type,
                 {typs :types},
                  {headers}
              ).then(res=>{
                console.log(res.data)
                if (!res.data.error) {

                  this.toggleColor()

                  if (this.btnColor == "white-color") {
                    this.btnColor = "red-color"
                  }

                    this.$notify({
                       
                      title: "تم إضافة تقييمك بنجاح 🎉",
                      type: "success",
                    });  

                    this.getSeasonEpisode();
                }            

              }).catch(err=>{
                  console.log(err);
              }) 

        }

      },

        message(msg){
            this.$notify({
               
              title: msg,
              type: "warn",
            });
        },

        goToPlayer(link){
          this.$store.dispatch("goToPlayer",{link: link,type:'anim'});
          this.$router.push(window.open('play','_blank')) 
        },                           

      }

}
</script>

<style>
.dropbtn {
  color: white;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


.dropdown:hover .dropdown-content {
  display: block;
  transition: 1s;
}


.dropdown-content ul li:hover{

  color: #333 !important;
}

.dropdown-content ul li a{
  color:black;
}

.videos .pagination ul{
  display:flex;
}

.videos .pagination ul li{
  margin: 3px;
}

.videos .image-episode{
  position:relative;
  height:100%;
}

.videos .image-episode:hover{
  cursor:pointer;
}

.videos .image-episode .btn-whatch{
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;  
  z-index: 3;
}

.videos .btn-whatch:hover{
  box-shadow: none !important;
  border-color: none;
}

.videos .image-episode .btn-whatch i{
    color: var(--white);
    position: absolute;
    font-size: 32px;
    transform: translate(50%,50%);
    top: 25%;
}

.videos #whatch-episode .modal-body a{
  color: #fff;
}

.videos #whatch-episode .modal-body a:hover{
  color: var(--red);
}

#rating-modal .modal-content{
background: #333;  
}

#rating-modal .modal-footer{
  justify-content: right;
}

#rating-modal .modal-body{
color: var(--white);
background-color: var(--bg-section);
text-align: right;
}

#rating-modal .modal-body h5,
.vue-star-rating{
  margin-bottom: 6px;
}

.content .accordion-button{
  font-size:20px;
}

.red-color{
  color:#CA1919;
}

.white-color{
  color:#fff;
}

carousel{
    overflow: hidden !important;
}
</style>
