<template>
    <div>
        <footer>
        <div class="sm-list-container">
            <ul class="sm-list">
                <li>
                    <a :href="getParams.telegram_url" target="_blank">
                        <i class="fa fa-telegram"></i>
                    </a>    
                </li>
                <li>
                    <a :href="getParams.instagram_url" target="_blank">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>

                <li>
                    <a :href="getParams.twitter_url" target="_blank">
                        <i class="fa fa-twitter"></i>
                    </a>                     
                </li>
                <li>
                    <a :href="getParams.facebook_url" target="_blank">
                        <i class="fa fa-facebook"></i>
                    </a>  
                </li>
                <li>
                    
                </li>
            </ul>
        </div>
        <p><a class="app-link" :href="getParams.app_url_android" target="_blank">تحميل التطبيق</a></p>
    </footer>

    </div>
</template>

<script>
    export default{
        created(){console.log(this.getParams)},
        computed:{
            getParams(){
                return this.$store.getters.get_params

            },            
        }
    }
</script>

<style>

footer .sm-list{
    padding-left:0;
}
    .app-link{
        color:var(--white);
        margin-left: 17px;
    }

    .app-link:hover{
        color:var(--red);
    }

</style>