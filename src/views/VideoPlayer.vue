<template>
	<div>
		<section class="all-latest-episodes">
			<div class="player-v">
			<!-- <plyr> -->
		        <div class="">
		            <iframe :src="serverLink" allowfullscreen allowtransparency allow="autoplay"></iframe>
		        </div>
			<!-- </plyr> -->
			</div>
			<div class="video-list">
                <dropdown-menu>
                  <template #trigger>
                    <button class="btn btn-light">
                        إختر السيرفر
                    </button>                  
                  </template>                

                  <template #body>
                  	<ul class="server-list" style="margin-top: 10px !important;">
                  		<li v-for="(item ,index) in episodeServer"  :key="index"
                  		@click="setVideoLink(item.link)">
                  			{{item.server}}
                  		</li>
                  	</ul>
                  </template>
                </dropdown-menu>  
			</div>
		</section>
	</div>

<div v-show="isLoading">
    <loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="" name="circular"></loader>   
</div>

</template>

<script>

	export default{

		data(){
			return{
				episodeServer:{},	
				videoLink:null,			
				serverLink:null,	
				isLoading:false,		
			}
		},

		created(){
            this.getEpisodeWithServer();
            this.serverLink =  this.getVideoLink
		},

        computed:{   

            getVideoLink(){
                return this.$store.getters.get_playLink;

            },  

            getPlayId(){
            	return this.$store.getters.get_playId;
            },                                
        },      

		methods:{

        getEpisodeWithServer(){
        	this.isLoading = true
        	let id = this.getPlayId;
            this.axios.get('https://animeeplus.online/api/series/episodeshow/'+id+'/code'
            ).then(res=>{

                this.episodeServer = res.data.episode.videos;
                this.isLoading = false
            }).catch(err=>{
                console.log(err.message);
            })
            
        },

        setVideoLink(link){
        	this.isLoading = true
        	this.serverLink = link
        	this.isLoading = false
        },
    }
	}
</script>

<style>

.video-list{

}

.video-list .server-list li{
	cursor:pointer;
}

.video-list .server-list li:hover{
	color:#fff;
	font-size: 18px;
	transition:0.5s;
}

.player-v{
margin-top: 50px;	
}
	.video-player{
		width:80%;
	}

	.plyr__video-embed{
		position:relative;
	}
	iframe{
		width:100%;
	}
</style>