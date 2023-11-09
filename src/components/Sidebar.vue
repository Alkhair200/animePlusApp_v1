<template>
    <div>
        <!-- start sidebar -->
        <section class="sidebar side-width">
            <div class="side-content">

                <div class="toggle-icon">
                    <i class="fa fa-navicon"></i>
                </div>

                <div class="user">
                    <div v-if="getLoggedIn" class="user-info">
                        <a href="profile.html">
                            <img class="" :src="getUser.avatar" alt="">
                        </a>
                        <a href="profile.html" style="all: unset; cursor: pointer;">
                            <h6 class="name">{{getUser.name}}</h6>
                        </a>
                        <p class="email">{{getUser.email}}</p>
                        <p class="sign-out">
                            <button @click.prevent="logout">
                                <i class="fa fa-sign-out"></i>
                            </button>
                            
                        </p>
                    </div>

                    <router-link v-if="!getLoggedIn" to="/login" class="btn">تسجيل الدخول</router-link>

                    <router-link v-if="getLoggedIn" to="/update-profile" class="btn">تعديل الملف الشخصي</router-link>
                    <!-- <a v-if="getLoggedIn" href="https://animeeplus.net/subscriptions/" class="btn subsc-btn">إشتراك الاَن</a> -->

                    <div class="social-media">
                        <span>
                            <a :href="getParams.telegram_url" target="_blank">
                                <i class="fa fa-telegram"></i>
                            </a>                            
                        </span>
                        <span>
                            <a :href="getParams.instagram_url" target="_blank">
                                <i class="fa fa-instagram"></i>
                            </a>                              
                        </span>
                        <span>
                            <a :href="getParams.twitter_url" target="_blank">
                                <i class="fa fa-twitter"></i>
                            </a>                            
                        </span>
                        <span>
                            <a :href="getParams.facebook_url" target="_blank">
                                <i class="fa fa-facebook"></i>
                            </a>
                            

                            <!--  -->
                        </span>
                    </div>
                </div>
                <div class="list-view">
                    <ul>

                        <li>
                            <i class="fa fa-th-large"></i>
                            <router-link to="library">
                                المكتبة
                            </router-link>
                        </li>

                        <li>
                            <i class="fa fa-clock-o"></i>
                            <router-link to="episode-release-dates">
                                مواعيد إصدار الحلقات
                            </router-link>
                        </li>

                        <li>
                            <i class="fa fa-fire"></i>
                            <router-link to="latest">
                                اخر الحلقات
                            </router-link>
                        </li>

                        <li>
                            <i class="fa fa-fire"></i>
                            <router-link to="latest-episodes-animes">
                                اخر حلقات الكرتون
                            </router-link>
                        </li>

                        <li>
                            <i class="fa fa-heart"></i>
                            <router-link to="fav">
                                قائمتي
                            </router-link>
                        </li>

                        <li>
                            <i class="fa fa-crown"></i>
                            <router-link to="vip">
                                الأعضاء المميزون
                            </router-link>
                        </li>

                        <li>
                            <i class="fa fa fa-info-circle"></i>
                            <a data-bs-toggle="modal" href="#suggestions" role="button">
                                الإقتراحات
                            </a>
                        </li>                        
                        

                    </ul>
                </div>
            </div>
            <div class="mt-3"></div>  
        </section>
        <!-- End sidebar -->
    </div>

            <!-- start Suggestions -->
            <!-- Modal -->
            <div class="modal fade" id="suggestions" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content" style="background: rgba(51, 51, 51, 0.54) none repeat scroll 0% 0%">
                  <div class="modal-header">
                    <h1 style="color:#fff" class="modal-title fs-5" id="exampleModalLabel">تقديم إقتراح او طلب إضافة أنمي</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row warning">
                      <div class="container">
                        <p class="color1">
                          1- تأكد من كتابة إسم الطلب عن طريق جوجل أو موقع IMDB
                        </p>
                        <p class="color1">
                            2- إستخدام بحث التطبيق باللغة الإنجليزية جيداً للتأكد من عدم وجوده.
                        </p>
                        <p class="color1">
                            3- يتم العمل على الطلب في حالة توافر جودة جدية مع ترجمة مناسبة.
                        </p>
                        <p class="color1">
                            4- تكرار الطلب أكثر من مرة يؤدي لحظر حسابك.
                        </p>    
                        <p class="color2">
                            5- سوء إستخدام ميزة الإقتراحات يعرض حسابك للأيقاف و الحذف.
                        </p>                                             
                      </div>
                    </div>

                    
                    <div class="row">
                      <div class="col-md-12">
                        <input class="form-input input-send" type="text" v-model="suggestion.body" name="example" placeholder="أكتب شيئاً" />
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <button style="width:100%;border-radius: 5px;" type="button" 
                          @click.prevent="sendSuggestion"
                           class="btn btn-danger send-suggestion">إرسال</button>
                        </div>
                      </div>

                    </div>
                      

                  </div>
                  <!-- <div class="modal-footer"> -->
                    <!-- <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">إغلاق</button> -->
                    <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                  <!-- </div> -->
                </div>
              </div>
            </div>
            <!--  End Suggestions -->    

<div v-show="isLoading">
    <loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="" name="circular"></loader>   
</div>    
</template>

<script>
    export default{

        data(){
            return{
                isLoading:false,
                suggestion:{
                    body:null,
                },
            }
        },

        computed:{
            getUser(){
                return this.$store.getters.get_user;
            },
            getToken(){
                return this.$store.getters.get_token;
            },
            getLoggedIn(){
                return this.$store.getters.get_loggedIn
            },     
            getParams(){
                return this.$store.getters.get_params
            },                   
        },

        methods:{

            sendSuggestion(){
            this.isLoading = true
            this.axios.post('https://animeeplus.online/api/suggest/code',{
                title: "إقتراح",
                message: this.suggestion.body,
            }
            ).then(res=>{
                
                this.isLoading = false

                if (res.data.message == "created successfully") {
                    this.$notify({
                       
                      title: "تم تقديم إقتراحك بنجاح 🎉",
                      type: "success",
                    });                    
                }
                 

            }).catch(err=>{
                this.isLoading = false
                if (err.message == "Network Error") {
                    window.alert(
                      "لا يوجد إتصال</n>تحقق من الاتصال بالانترنت ثم اعد المحاوله")
                }
            })
                

            },
        }
    }
</script>

<style>
    .color1{
    color:#7067de;        
    }
    .color2{
        color:#f03;
    }

    .input-send{
margin-bottom: 15px;
padding: 5px 10px; 

width: 100%;
margin-bottom: 15px; 
border-radius: 5px;      
    }

    ::placeholder{
        color:#333;
    }
</style>