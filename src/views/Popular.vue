<template>
  <section class="slider">

    <div class="shadow"></div>
    <div class="image-slide" v-bind:style="{backgroundImage: 'url(' +popular.profile_path+ ')'}">
      <!-- <img src=""> -->
    </div>
    <div class="text-image">
      <img :src="popular.profile_path">

        <div class="miniposter">
            <h4>
            	{{popular.name}} 
            	<br>
            	<span class="views"><i class="fa fa-eye"></i> {{popular.views}} ألف </span>
            	<br>
            	<br>
            </h4>
            <div class="row home-btn">
                <div class="col-md-12 col-sm-12">

                	<h6 style="color: rgb(182, 178, 178);margin-bottom: 10px;">{{popular.birthday}}</h6>
                	<h5>

                		سيرة الشخصية
                	</h5>
                	<br>
			      <p class="biography">
			      	{{popular.biography}}
			      </p>
                </div>                           
            </div>
        </div>      

    </div>
  </section>

  <div class="container">
    <div class="row">

        <section id="top" class="section-padding casterslist">
            <div class="">

                <div class="section-header">
                    <div class="left">
                        <h2>ذات صلة ()</h2>
                    </div>
                </div>
            <carousel v-bind="settingsLatestSeri" :breakpoints="breakpointsLatestSeri">
       <!--          <slide v-for="(related, index) in relateds" :key="index">
                    <div class="carousel__item">
                        <div class="row">
                            <a @click="goToPage(related.id)">
                            <div class="col-md-3 col-sm-6 serie-image">
                                <img v-lazy="related.poster_path" alt="">
                            </div>  
                            <h6>
                              {{related.title.toUpperCase().slice(0, 10)}}
                                    <span v-if="related.title.length > 10">...</span>
                            </h6>  
                            </a>                           
                        </div>
                    </div>
                </slide> -->

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

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import  {Timeago}  from 'vue2-timeago'


export default{
    components:{
        Carousel, Slide, Pagination, Navigation,
        Timeago,
    },

    data(){
        return{
            popular:[],   
            relateds:[],         
        }
    },

    created(){
        this.getPopular();
        this.getRelateds();
    },

    computed:{

      getLoggedIn(){
          return this.$store.getters.get_loggedIn
      }, 

      get_pageId(){
        return this.$store.getters.get_pageId
      }, 
    },

    methods:{

    getTimeInHoursAndMins(timeInsSeconds) {
          const hours = Math.floor(timeInsSeconds / 3600);
          const minutes = Math.floor((timeInsSeconds % 3600) / 60);
          return `${hours} ساعة ${minutes} دقيقة`;
    }, 

 

        getPopular(){
           this.isLoading = true
          let id = this.get_pageId;

            this.axios.get('https://animeeplus.online/api/cast/detail/'+id+'/code'
            ).then(res=>{
              
                this.popular = res.data;

                 this.isLoading = false
            }).catch(err=>{
               this.isLoading = false
                console.log(err);
            })
        },

        getRelateds(){
           this.isLoading = true
          let id = this.get_pageId;

            this.axios.get('https://animeeplus.online/api/filmographie/detail/'+id+'/code'
            ).then(res=>{
              
                this.relateds = res.data;
                console.log(this.relateds);

                 this.isLoading = false
            }).catch(err=>{
               this.isLoading = false
                console.log(err);
            })
        },        

        goToPage(id){
          this.isLoading = true
          this.$store.dispatch("goToPage",{id: id});

            this.$router.push('popular')
            this.isLoading = false
        },           

      }

}
</script>

<style>
.biography{
	width:50%;
	margin:auto;
	font-size: 16px;
	text-align: justify;
}
</style>
