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
                            <i class="fa fa-clock-o"></i>
                            <router-link to="episode-release-dates">
                                مواعيد إصدار الحلقات
                            </router-link>
                        </li>

                        <li>
                            <i class="fa fa-fire"></i>
                            <router-link to="latest-episode">
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

<!--                         <li>
                            <i class="fa fa-exclamation-circle"></i>
                            <a href="index.html">
                                الإقتراحات
                            </a>
                        </li>

                        <li>
                            <i class="fa fa-share-alt"></i>
                            <a href="index.html">
                                شارك الموقع
                            </a>
                        </li> -->

                    </ul>
                </div>
            </div>
            <div class="mt-3"></div>  
        </section>
        <!-- End sidebar -->
    </div>
</template>

<script>
    export default{

        data(){
            return{

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

            logout(){
                this.$store.dispatch('performLogoutAction').then((res)=>{

                    if (res.status == 204) {
                        this.$notify({
                          title: "تم تسجيل الخروج بنجاح 🎉",
                          text: res.data.msg,
                          // type: "success",
                        }); 
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            },
        }
    }
</script>