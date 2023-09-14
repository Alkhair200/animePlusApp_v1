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

      <ul class="list-style d-flex justify-content-center align-episodes-center  p-0">
        <li class="px-1 list-text-1">
          <i class="fa fa-star"></i> {{episode.vote_average}}
        </li>
        <span class="pb-3" style=" font-size: 30px; color: #B41D1E;"> . </span>
        <li class="px-1 list-text-2">
          {{episode.first_air_date}}
        </li>
        <span class="pb-3" style="font-size: 30px; color: #B41D1E;"> . </span>
        <li class=" px-1 list-text-3">
          <div v-if="episode.seasons">عدد الموسم: {{episode.seasons.length}}</div>
        </li>
        <span class="pb-3" style="font-size: 30px; color: #B41D1E;"> . </span>
        <li class="px-1 list-text-4">
          مستمر
        </li>
      </ul>
    </div>
  </section>

  <div class="container">
    <div class="row">
      <section>
        <div class="main-comment">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="comment">
                <button v-if="getLoggedIn" type="button" data-bs-toggle="modal" href="#series-comments" role="button"
                  class="btn btn">التعليقات</button>

                <button v-if="!getLoggedIn" type="button" @click.prevent="message('يجب عليك تسجيل الخول اولاً')" role="button"
                  class="btn btn">التعليقات</button>                  
              </div>
            </div>
            <div class="col-md-12 col-sm-12">
              <div class="add">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <div class="dropdown">
                      <button class="dropbtn">
                        <i class="fa fa-star-o"></i>
                        <br>    
                        أضف تقييمك
                      </button>
                      <div class="dropdown-content">
                        <a href="#">
                          <span> <i class="fa fa-plus"></i> </span>
                          اشاهدها حالياً
                          <span class="icon-left"> <i class="fa fa-plus"></i> </span>      
                        </a>
                      </div>
                    </div>

              <!--       <main class="dropdown-menu star" id="star">
                      <button onclick="handleDropdownstarClicked(event)">
                        <span class="material-symbols-outlined">
                          <i class="fa fa-star-o"></i>
                          <br>
                          أضف تقييمك
                      </button>
                      <section class="dropdown__menu-labels dropdown-star">
                        <button>
                          <span> <i class="fa fa-plus"></i> </span>
                          اشاهدها حالياً
                          <span class="icon-left"> <i class="fa fa-plus"></i> </span>
                        </button>
                        </button>

                      </section>
                    </main> -->
                  </div>
                  <div class="col-md-6  col-sm-6">
                    <i class="fa fa-star"></i>
                    <br>
                    <div v-if="episode.story">{{episode.story.aveg}}/10
                      <br>
                      ({{episode.story.count}} &nbsp;صوت)
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
<!-- 
                  <li>
                    <i class="fa fa-share-alt"></i>
                    <br>
                    مشاركة
                  </li> -->

                  <li>
                    <div v-if="getLoggedIn" class="dropdown">
                      <button class="dropbtn">
                        <i class="fa fa-bars" aria-hidden="true"></i>
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
                    <a @click.prevent="addToFav(episode.id,episode.name)" href="#">
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
        <p class="slug">
          <span style="margin-left:10px" v-for="(list ,index) in episode.genreslist" :key="index">{{list}}</span>
        </p>
      </section> 
      
      <section class="content">
        <h4>تصنيف المحتوى</h4>

        <div class="accordion" id="accordionExample">
          <div class="accordion-episode">
            <h2 class="accordion-header" id="headingOne">
              <button id="accordion" class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                style="margin-right: auto">
                الفاظ نابيه
                &nbsp;
                <span class="descrip" v-if="episode != ''">شديد [{{episode.nasty.count}}]</span>
                <span class="descrip" v-else>لا يوجد</span>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">

                <div class="row">
                  <div class="col-md-12">
                    <div class="head">
                      <span class="head-text" v-if="episode != ''">عدد المصوتين ({{episode.nasty.count}})</span>
                      <p class="head-text" v-else>لا يوجد</p>

                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="body">
                      <p>الفاظ نابيه</p>
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
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                عنف و دمويه
                &nbsp;
                <span class="descrip" v-if="episode != ''">شديد [{{episode.bloody.count}}]</span>
                <span class="descrip" v-else>لا يوجد</span>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="head">
                      <span class="head-text" v-if="episode != ''">عدد المصوتين ({{episode.bloody.count}})</span>
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
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                مشاهد مخيفه او صادمه
                &nbsp;
                <span class="descrip" v-if="episode != ''">متوسط [{{episode.scary.count}}]</span>
                <span class="descrip" v-else>لا يوجد</span>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="head">
                      <span class="head-text" v-if="episode != ''">عدد المصوتين ({{episode.scary.count}})</span>
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
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                مخدرات و كحول و تدخين
                &nbsp;
                <span class="descrip" v-if="episode != ''">متوسط [{{episode.drugs.count}}]</span>
                <span class="descrip" v-else>لا يوجد</span>
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="head">
                      <span class="head-text" v-if="episode != ''">عدد المصوتين ({{episode.drugs.count}})</span>
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
  >{{season.name}}</option>
</select>

          </div>
          &nbsp;
          &nbsp;

          <div class="col-md-5 col-sm-5 nav-searchs">
            <input v-model="searchEpisodeNmber" class="form-control video-search bordred" type="search" placeholder="إبحث برقم الحلقه....">
          </div>

        </div>
        <br>
        <div class="row" v-for="(episode, index) in findEpisodeName" :key="index">
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
                  <a href="#" class="btn downloads" target="_blank">
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
            <div class="modal fade" :id="'comments-'+index" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

        <section id="top" class="section-padding casterslist">
            <div class="">

                <div class="section-header">
                    <div class="left">
                        <h2>الشخصيات</h2>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(latestSeri, index) in episode.casterslist" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a>
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="latestSeri.profile_path" alt="">
                            </div>  
                            <h6>{{latestSeri.name}}</h6>  
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
                        <h2>اَخري</h2>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
                <slide v-for="(related, index) in relateds" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click="goToPage(related.id)">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="related.poster_path" alt="">
                            </div>  
                            <h6>{{related.name}}</h6>  
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
         

    <section class="others">
     <!-- <h4>اخري</h4> -->

  </section>    

    </div>
  </div>
</template>

  <script>

import Footer from '../components/Footer.vue';

import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


export default{
    components:{
        Footer, 
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

    created(){
        this.getSeasonEpisode();
        this.getRelatedsEpisode();
        this.getCommentsSeries();
    },

    mounted(){
      this.getSeasonsWithEpisode();
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

        getSeasonEpisode(){
          let id = this.get_pageId;

            this.axios.post('https://animeeplus.online/api/series/show/'+id+'/code'
            ).then(res=>{

                this.episode = res.data;

            }).catch(err=>{
                console.log(err);
            })
        },

        getRelatedsEpisode(){
          let id = this.get_pageId;

            this.axios.get('https://animeeplus.online/api/series/relateds/'+id+'/code'
            ).then(res=>{

                this.relateds = res.data.relateds;
              console.log(res.data);

            }).catch(err=>{
                console.log(err);
            })
        },        
    
        getSeasonsWithEpisode(page){
           
           if (event.target.value != '') {
            let seasonId = event.target.value
              this.season_id = seasonId;
           }

            this.axios.get('https://animeeplus.online/api/series/seasons/'+this.season_id+'/code?page='+page
            ).then(res=>{

                this.episodes = res.data;

            }).catch(err=>{
                console.log(err);
            })
        },

        getCommentsSeries(){

            this.axios.get('https://animeeplus.online/api/media/series/detail/comments/'+this.seariesId+'/code'
            ).then(res=>{

                this.seriesComments = res.data;
                console.log( res.data);

            }).catch(err=>{
                console.log(err);
            })
        },

        getEpisodeComment(id){
            this.axios.get('https://animeeplus.online/api/media/episodes/comments/'+id+'/code'
            ).then(res=>{

                this.episodeComments = res.data.comments;                

            }).catch(err=>{
                console.log(err);
            })
        },

        goToPage(id){

          this.$store.dispatch("goToPage",{id: id});
          this.getSeasonEpisode();
          this.getRelatedsEpisode();
          this.getCommentsSeries();

            this.$router.push('season')
        },         

        getEpisodeWithServer(id){
          this.axios.get('https://animeeplus.online/api/series/episodeshow/'+id+'/code'
          ).then(res=>{

              this.episodeWithServer = res.data.episode;

          }).catch(err=>{
              console.log(err.message);
          })          
        },

        addtofavAction(id,title,watch_type){

            this.$store.dispatch('addtofavAction',{
                id: id,
                watch_type: watch_type
            }).then((res)=>{
                        console.log(res);

                if (res.data != '') {
                    
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

              console.log(res);

              if (res.data != '') {
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
/* Style The Dropdown Button */
.dropbtn {
  color: white;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
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

.dropdown .dropdown-content ul{
padding: 0;
color:#fff;
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
</style>
