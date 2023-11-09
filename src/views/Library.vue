<template>
    <div>
        <main style="min-height: 79vh; margin-top: 100px;">
        <section class="fav container">

            <ul class="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button v-on:click="getTypesEpisodes('series')" class="nav-link active" id="pills-series-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-series" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">مسلسلات</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button v-on:click="getTypesEpisodes('animes')" class="nav-link" id="pills-animes-tab" data-bs-toggle="pill" data-bs-target="#pills-animes"
                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">كرتون</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button v-on:click="getTypesEpisodes('movies')" class="nav-link" id="pills-movies-tab" data-bs-toggle="pill" data-bs-target="#pills-movies"
                        type="button" role="tab" aria-controls="pills-contact" aria-selected="false">افلام</button>
                </li>
            </ul>












            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-series" role="tabpanel"
                    aria-labelledby="pills-series-tab" tabindex="0">
         
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-series-fav" role="tabpanel"
                            aria-labelledby="nav-series-fav-tab" tabindex="0">
                            <div class="row" style="padding: 10px; justify-content: center;">

                                <div class="col-md-5">
                                    <div>
                                    <Select2
                                        v-model="myValue" :options="options2" 
                                        :settings="{ 
                                        settingOption: value, 
                                        placeholder: '-- كل التصنيفات --',
                                        dir:'rtl'}" 
                                        @change="getCategories($event)" @select="getCategories($event)"/>                                        
                                    </div>

                                  
                                </div>
                                &nbsp;

                                <div class="col-md-5">
                                    <div>                                    
                                    <Select2 v-model="myValue" 
                                    :options="options" :settings="{ 
                                        settingOption: value, 
                                        placeholder: '-- تصنيف --',
                                        dir:'rtl'}"  />
                                    </div>
                                </div>                                
                            </div>
                            <div class="row">
                                <div v-for="(item,index) in showSeries" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <a @click.prevent="goToPage(item.id,'season')">
                                    <div class="card-img">
                                        <span v-show="item.subtitle" class="subtitle">{{item.subtitle}}</span>
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    </a>
                                    <div class="card-body  px-1">
                                        <h6 class="card-text text-center">{{item.name.slice(0,15)}}</h6>
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
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-animes-fav" role="tabpanel"
                            aria-labelledby="nav-animes-fav-tab" tabindex="0">
                           
                            <div class="row" style="padding: 20px 10px;">

                                <div class="col-md-6" style="margin-bottom: 10px; padding:0 5px">
                                    <Select2 v-model="myValue" :options="options2" 
                                     style="width: 100%;"
                                        :settings="{ 
                                        settingOption: value, 
                                        placeholder: '-- كل التصنيفات --',
                                        dir:'rtl'}" @change="getCategories($event)" @select="getCategories($event)"/>
                                  
                                </div>

                                <div class="col-md-6" style="padding:0 5px">
                                                                        
                                    <Select2 v-model="myValue"
                                        
                                    :options="options" :settings="{ 
                                        settingOption: value, 
                                        placeholder: '-- تصنيف --',
                                        dir:'rtl'}"  />
                                </div>                                
                            </div>
                            <div class="row">
                                <div v-for="(item,index) in showAnimes" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <a @click.prevent="goToPage(item.id,'animes')">
                                    <div class="card-img">
                                        <span v-show="item.subtitle" class="subtitle">{{item.subtitle}}</span>
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    </a>
                                    <div class="card-body  px-1">
                                        <h6 v-if="item.name" class="card-text text-center">{{item.name.slice(0,15)}}</h6>
                                        <h6 v-if="item.title" class="card-text text-center">{{item.title.slice(0,15)}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            <div class="tab-pane fade" id="pills-movies" role="tabpanel" aria-labelledby="pills-movies-tab"
                    tabindex="0">


                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-series-fav" role="tabpanel"
                            aria-labelledby="nav-series-fav-tab" tabindex="0">
                            <div class="row" style="padding: 20px 10px;">

                                <div class="col-md-6" style="margin-bottom: 10px; padding:0 5px">
                                    <Select2 v-model="myValue" :options="options2" 
                                        :settings="{ 
                                        settingOption: value, 
                                        placeholder: '-- كل التصنيفات --',
                                        dir:'rtl'}" @change="getCategories($event)" @select="getCategories($event)"/>
                                  
                                </div>

                                <div class="col-md-6" style="padding:0 5px">
                                                                        
                                    <Select2 v-model="myValue" 
                                    :options="options" :settings="{ 
                                        settingOption: value, 
                                        placeholder: '-- تصنيف --',
                                        dir:'rtl'}"  />
                                </div>                                
                            </div>
                            <div class="row">
                                <div v-for="(item,index) in showMovies" :key="index" class="card col-md-2 col-sm-3 col-6">
                                    <a @click.prevent="goToPage(item.id,'movies')">
                                    <div class="card-img">
                                        <span v-show="item.subtitle" class="subtitle">{{item.subtitle}}</span>
                                        <img :src="item.poster_path" class="card-img-top" alt="...">
                                    </div>
                                    </a>
                                    <div class="card-body  px-1">
                                        <h6 v-if="item.name" class="card-text text-center">{{item.name.slice(0,15)}}</h6>

                                        <h6 v-if="item.title" class="card-text text-center">{{item.title.slice(0,15)}}</h6>
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
       <loader object="#940F10" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="false" name="dots"></loader>    
    </div>    
</template>

<script>
import Select2 from 'vue3-select2-component';
    export default{
        components: {Select2},
        data(){
            return{
                seariesWatchByType:{},
                moviesWatchByType:{},
                showSeries:{},
                showAnimes:{},
                showMovies:{},
                showMovieFavorite:{},
                isLoading:false,
                typeEpisodes:"series",
                page:1,
                arrayData: [],
                arrayData2: [],
                arrayData3: [],

                options2:[
                    'أخر الإضافات',
                    'حسب التقييم',
                    'حسب السنة',
                    'حسب المشاهدات',
                    ],             

                options:[
                    'مغامرة','فانتازيا','دراما','رعب','حركة','كوميديا',
                    'تاريخ','غربي','إثارة','جريمة','وثائقي','خيال علمي',
                    'غموض','رومانسية','عائلي','موسيقى','حرب','حركة و مغامرة','أطفال'
                    ],

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

        mounted(){
            this.scroll();
        },  


        created(){
            this.getshowSeries();
            this.getshowAnimes()
            this.getshowMovies()
            this.getShowMovieFavorite();
        },

        methods:{ 

            getTypesEpisodes(type){

                if (type == "series") {
                    this.typeEpisodes = 'series'

                }else if(type == "animes"){
                    this.typeEpisodes = 'animes'
                }else if(type == "movies"){
                    this.typeEpisodes = 'movies'
                }
                
            },

            scroll () {
              window.onscroll = () => {
                let bottomOfWindow = window.scrollY

                if (bottomOfWindow >= 303) {
                    // this.isLoading = true


                    this.axios.get('https://animeeplus.online/api/genres/'+this.typeEpisodes+'/all/code?page='+this.page
                    ).then(res=>{
                        let total = res.data.last_page
                         
                        if (this.page < total) {

                            if (this.typeEpisodes == 'series') {

                                res.data.data.forEach((val,key)=>{
                                    this.arrayData.push(val)
                                });

                                this.showSeries = this.arrayData;
                            }else if(this.typeEpisodes == 'animes'){

                                res.data.data.forEach((val,key)=>{
                                    this.arrayData2.push(val)
                                });                                
                                this.showAnimes = this.arrayData2;

                            }else if(this.typeEpisodes == 'movies'){
                                res.data.data.forEach((val,key)=>{
                                    this.arrayData3.push(val)
                                });                                
                                this.showMovies = this.arrayData3;                                
                            }
                            setTimeout(()=>{
                                this.page ++
                            },5000)

                        }

                        // this.isLoading = false

                    }).catch(err=>{
                        console.log(err);
                    })
                 
                }
              }
            },

            getshowSeries(){
                this.isLoading = true
                  
                this.axios.get('https://animeeplus.online/api/genres/series/all/code').
                then((res)=>{
                    res.data.data.forEach((val,key)=>{
                        this.arrayData.push(val)
                    });

                    this.showSeries = this.arrayData;   

                    this.isLoading = false            
                    
                }).catch((err)=>{
                    this.isLoading = false
                    console.log(err)
                }) 

            },

            getshowAnimes(){
                this.isLoading = true
                  
                this.axios.get('https://animeeplus.online/api/genres/animes/all/code').
                then((res)=>{
                    res.data.data.forEach((val,key)=>{
                        this.arrayData2.push(val)
                    });

                    this.showAnimes = this.arrayData2;   

                    this.isLoading = false            
                    
                }).catch((err)=>{
                    this.isLoading = false
                    console.log(err)
                }) 

            },            


            getshowMovies(){
                this.isLoading = true
                  
                this.axios.get('https://animeeplus.online/api/genres/movies/all/code').
                then((res)=>{
                    res.data.data.forEach((val,key)=>{
                        this.arrayData3.push(val)
                    });

                    this.showMovies = this.arrayData3;   

                    this.isLoading = false            
                    
                }).catch((err)=>{
                    this.isLoading = false
                    console.log(err)
                }) 

            },
// 


            getEpisodeByType(type){
                this.isLoading = true
                this.axios.get('https://animeeplus.online/api/'+this.typeEpisodes+'/'+type+'/code'
                ).then(res=>{

                    if (this.typeEpisodes == 'series') {
                        this.arrayData = []
                        res.data.data.forEach((val,key)=>{
                            this.arrayData.push(val)
                        });

                        this.showSeries = this.arrayData;

                    }else if(this.typeEpisodes == 'animes'){
                        this.arrayData2 = []
                        res.data.data.forEach((val,key)=>{
                            this.arrayData2.push(val)
                        });                                
                        this.showAnimes = this.arrayData2;
                        
                    }else if(this.typeEpisodes == 'movies'){
                        this.arrayData3 =[]
                        res.data.data.forEach((val,key)=>{
                            this.arrayData3.push(val)
                        });                                
                        this.showMovies = this.arrayData3;                                
                    }

                    this.isLoading = false

                }).catch(err=>{
                    console.log(err);
                })
            },  


            goToPage(id ,type){
                if (type == "season") {
                    this.$store.dispatch("goToPage",{id: id});

                    this.$router.push('season') 

                }else if(type == "latestMovie"){
                    this.$store.dispatch("goToPage",{id: id});

                    this.$router.push('latest-movie')  

                }else if(type == "anime"){
                    this.$store.dispatch("goToPage",{id: id});

                    this.$router.push('anime')      
                                
                }else if(type == "popular"){
                    this.$store.dispatch("goToPage",{id: id});

                    this.$router.push('popular')  
                }
            },






            
            SerieGetFav(watchType){

                this.isLoading = true
            const headers ={
              'Authorization': 'Bearer '+ this.getToken,
            }                  
                this.axios.post('https://animeeplus.online/api/serie/showByType',{
                    watch_type: watchType
                },{headers}).then((res)=>{

                    this.seariesWatchByType = res.data      
                    this.isLoading = false           
                    
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


            getCategories(event){

                let value = event.id;

                if (value == "أخر الإضافات") {
                    this.getEpisodeByType("latestadded")

                }else if(value == "حسب التقييم"){
                    this.getEpisodeByType("byrating")

                }else if(value == "حسب السنة"){
                    this.getEpisodeByType("byyear")

                }else if(value == "حسب المشاهدات"){
                    this.getEpisodeByType("byviews")
                }
            },       


            // getCatOption(event){
            //     let value = event.target.value;
            //     console.log(value);
            //     this.isLoading = true
            //     this.axios.get('https://animeeplus.online/api/servers/data/code'
            //     ).then(res=>{

            //         // this.showSeries = res.data;
            //          console.log(res.data);
            //         this.isLoading = false

            //     }).catch(err=>{
            //         console.log(err);
            //     })
            // },
          
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
<style>

#pagination-library{
  overflow: scroll;
}
#pagination-library ul{
  display:flex;
}

.select2-container{
    width:100%;
}

#pagination-library ul li{
  margin: 3px;
}    

.subtitle{
position: absolute;
background: #593e80;
padding: 0 10px;
border-radius: 5px 0 0 5px;
top: 4%;
font-size: 12px;
z-index: 1;
}

</style>