<template>
    <div>
        <main style="min-height: 79vh; margin-top: 100px;">
        <section class="fav container">

            <ul class="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-series-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-series" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">مسلسلات</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-animes-tab" data-bs-toggle="pill" data-bs-target="#pills-animes"
                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">كرتون</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-movies-tab" data-bs-toggle="pill" data-bs-target="#pills-movies"
                        type="button" role="tab" aria-controls="pills-contact" aria-selected="false">افلام</button>
                </li>
            </ul>












            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-series" role="tabpanel"
                    aria-labelledby="pills-series-tab" tabindex="0">
                    <nav class="mb-5">
                        <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-series-fav-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-series-fav" type="button" role="tab" aria-controls="nav-home"
                                @click.prevent="getShowSeriFavorite"
                                aria-selected="true">المفضله</button>

                            <button class="nav-link" id="nav-series-now-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-series-now" type="button" role="tab" aria-controls="nav-profile"
                                @click.prevent="SerieGetFav('now')"
                                aria-selected="false">اشاهدها حالياً</button>

                            <button class="nav-link" id="nav-series-want-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-series-want" type="button" role="tab" aria-controls="nav-contact"
                                @click.prevent="SerieGetFav('want')"
                                aria-selected="false">ارغب بمشاهدتها</button>

                            <button class="nav-link" id="nav-series-done-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-series-done" type="button" role="tab" aria-controls="nav-contact"
                                @click.prevent="SerieGetFav('done')"
                                aria-selected="false">تمت مشاهدتها</button>

                            <button class="nav-link" id="nav-series-later-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-series-later" type="button" role="tab" aria-controls="nav-contact"
                                @click.prevent="SerieGetFav('later')"
                                aria-selected="false">أكمله لاحقاً</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-series-fav" role="tabpanel"
                            aria-labelledby="nav-series-fav-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item,index) in showSeriFavorite" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>








                        <div class="tab-pane fade" id="nav-series-now" role="tabpanel"
                            aria-labelledby="nav-series-bow-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item ,index) in seariesWatchByType" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-series-want" role="tabpanel"
                            aria-labelledby="nav-series-want-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item ,index) in seariesWatchByType" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-series-done" role="tabpanel"
                            aria-labelledby="nav-series-done-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item ,index) in seariesWatchByType" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-series-later" role="tabpanel"
                            aria-labelledby="nav-series-later-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item ,index) in seariesWatchByType" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-animes" role="tabpanel" aria-labelledby="pills-animes-tab"
                    tabindex="0">
                    <nav class="mb-5">
                        <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-animes-fav-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-animes-fav" type="button" role="tab" aria-controls="nav-home"
                                aria-selected="true">المفضله</button>
                            <button class="nav-link" id="nav-animes-now-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-animes-now" type="button" role="tab" aria-controls="nav-profile"
                                aria-selected="false">اشاهدها حالياً</button>
                            <button class="nav-link" id="nav-animes-want-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-animes-want" type="button" role="tab" aria-controls="nav-contact"
                                aria-selected="false">ارغب بمشاهدتها</button>
                            <button class="nav-link" id="nav-animes-done-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-animes-done" type="button" role="tab" aria-controls="nav-contact"
                                aria-selected="false">تمت مشاهدتها</button>
                            <button class="nav-link" id="nav-animes-later-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-animes-later" type="button" role="tab" aria-controls="nav-contact"
                                aria-selected="false">أكمله لاحقاً</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-animes-fav" role="tabpanel"
                            aria-labelledby="nav-animes-fav-tab" tabindex="0">
                            <div class="row">
                                <div class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img src="front/img/image_3.avif" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">Some quick name</h6>
                                    </div>
                                </div>
                                <div class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img src="front/img/image_4.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">Some quick name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-animes-now" role="tabpanel"
                            aria-labelledby="nav-animes-bow-tab" tabindex="0">
                            <div class="row">
                                <div class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img src="front/img/image_1.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">Some quick name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-animes-want" role="tabpanel"
                            aria-labelledby="nav-animes-want-tab" tabindex="0">
                            <div class="row">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-animes-done" role="tabpanel"
                            aria-labelledby="nav-animes-done-tab" tabindex="0">
                            <div class="row">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-animes-later" role="tabpanel"
                            aria-labelledby="nav-animes-later-tab" tabindex="0">
                            <div class="row">
                            </div>
                        </div>
                    </div>
                </div>









                <div class="tab-pane fade" id="pills-movies" role="tabpanel" aria-labelledby="pills-movies-tab"
                    tabindex="0">
                    <nav class="mb-5">
                        <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-movies-fav-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-movies-fav" type="button" role="tab" aria-controls="nav-home"
                                @click.prevent="getShowMovieFavorite"
                                aria-selected="true">المفضله</button>

                            <button class="nav-link" id="nav-movies-now-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-movies-now" type="button" role="tab" aria-controls="nav-profile"
                                @click.prevent="MovieGetFav('now')"
                                aria-selected="false">اشاهدها حالياً</button>

                            <button class="nav-link" id="nav-movies-want-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-movies-want" type="button" role="tab" aria-controls="nav-contact"
                                @click.prevent="MovieGetFav('want')"
                                aria-selected="false">ارغب بمشاهدتها</button>

                            <button class="nav-link" id="nav-movies-done-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-movies-done" type="button" role="tab" aria-controls="nav-contact"
                                @click.prevent="MovieGetFav('done')"
                                aria-selected="false">تمت مشاهدتها</button>

                            <button class="nav-link" id="nav-movies-later-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-movies-later" type="button" role="tab" aria-controls="nav-contact"
                                @click.prevent="MovieGetFav('later')"
                                aria-selected="false">أكمله لاحقاً</button>
                        </div>
                    </nav>

                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-series-fav" role="tabpanel"
                            aria-labelledby="nav-series-fav-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item,index) in showMovieFavorite" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="nav-movies-now" role="tabpanel"
                            aria-labelledby="nav-series-bow-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item ,index) in moviesWatchByType" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="nav-movies-want" role="tabpanel"
                            aria-labelledby="nav-series-want-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item ,index) in moviesWatchByType" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-movies-done" role="tabpanel"
                            aria-labelledby="nav-series-done-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item ,index) in moviesWatchByType" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-movies-later" role="tabpanel"
                            aria-labelledby="nav-series-later-tab" tabindex="0">
                            <div class="row">
                                <div v-for="(item ,index) in moviesWatchByType" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <div class="card-img">
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name}}</h6>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>                    
                </div>






            </div>
        </section>
    </main>

    <footer>
        <div class="sm-list-container">
            <ul class="sm-list">
                <li>
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </div>
        <p><i class="fas fa-heart"></i> Made by Mu with</p>
    </footer>
    </div>

    <div v-show="isLoading">
       <loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="false" name="circular"></loader>    
    </div>    
</template>

<script>
    export default{
        data(){
            return{
                seariesWatchByType:{},
                moviesWatchByType:{},
                showSeriFavorite:{},
                showMovieFavorite:{},
                isLoading:false,
            }
        },

        computed:{
            getToken(){
                return this.$store.getters.get_token
            },
            
            getUser(){
                return this.$store.getters.get_user
            },            
        },

        created(){
            this.getShowSeriFavorite();
            this.getShowMovieFavorite();
        },

        methods:{ 
            
            SerieGetFav(watchType){

                this.isLoading = true
            const headers ={
              'Authorization': 'Bearer '+ this.getToken,
            }                  
                this.axios.post('https://animeeplus.online/api/serie/showByType',{
                    watch_type: watchType
                },{headers}).then((res)=>{
                    this.isLoading = false
                    this.seariesWatchByType = res.data                 
                    
                }).catch((err)=>{
                    this.isLoading = false
                    console.log(err)
                })    

                this.isLoading = false            
            },

            MovieGetFav(watchType){
                this.isLoading = true
            const headers ={
              'Authorization': 'Bearer '+ this.getToken,
            }                  
                this.axios.post('https://animeeplus.online/api/movie/showByType',{
                    watch_type: watchType
                },{headers}).then((res)=>{
                    this.isLoading = false
                    this.moviesWatchByType = res.data                 
                }).catch((err)=>{
                    this.isLoading = false
                    console.log(err)
                })  

                this.isLoading = false              
            },


            getShowSeriFavorite(){
                this.isLoading = true
            const headers ={
              'Authorization': 'Bearer '+ this.getToken,
            }                  
                this.axios.post('https://animeeplus.online/api/serie/showFavo',{
                    id: this.getUser.id
                },{headers}).then((res)=>{
                    this.isLoading = false
                    this.showSeriFavorite = res.data                 
                    
                }).catch((err)=>{
                    this.isLoading = false
                    console.log(err)
                }) 

                  this.isLoading = false               
            },

            getShowMovieFavorite(){
                this.isLoading = true
            const headers ={
              'Authorization': 'Bearer '+ this.getToken,
            }                  
                this.axios.post('https://animeeplus.online/api/movie/showFavo',{
                    id: this.getUser.id
                },{headers}).then((res)=>{
                    this.isLoading = false
                    this.showMovieFavorite = res.data                 
                    
                }).catch((err)=>{
                     this.isLoading = false
                    console.log(err)
                })

                this.isLoading = false                
            }               

                      
        }
    }
</script>