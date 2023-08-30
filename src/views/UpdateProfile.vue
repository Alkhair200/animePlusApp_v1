<template>
    <div>
    <!-- <div class="overlay"></div> -->
    <div class="container-lg container-fluid bootstrap snippets bootdeys">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-lg-8">
                <form class="form-horizontal">
                    <div class="panel panel-default " style="margin-bottom: 120px;">
                        <div class="panel-body text-center position-relative" style="height: 250px;">
                            <label class="w-100 h-100 " for="background-input">
                                <img :src="getAuthUser.background"
                                    class="w-100 h-100 profile-background" alt="User background">
                            </label>
                            <input class="d-none" id="background-input" type="file" />
                            <label for="avatar-input">
                                <img :src="getAuthUser.avatar"
                                    class="rounded-circle profile-avatar" alt="User avatar">
                            </label>
                            <input class="d-none" id="avatar-input" type="file" />
                        </div>
                    </div>

<div class="mb-3 input-info">
<div class="row">
    <div class="col-md-6 col-sm-12 padding-left">
      <label class="form-label">الإسم</label>
      <input type="text" class="form-control input-sm"  placeholder="الإسم"> 
    </div>
<div class="col-md-6 padding-left">
  <label class="form-label">العنوان</label>
  <input type="text" class="form-control input-sm"  placeholder="العنوان">  
</div> 

<div class="col-md-6 col-sm-12 padding-left">
  <label class="form-label">تاريخ الميلاد</label>
  <input type="text" class="form-control input-sm"  placeholder="تاريخ الميلاد">  
</div>

  <div class="col-md-6 col-sm-12 padding-left">
  <label class="form-label">حساب فيس بوك</label>
  <input type="text" class="form-control input-sm"  placeholder="حساب فيس بوك">  
</div>  

  <div class="col-md-6 col-sm-12 padding-left">
  <label class="form-label">حساب تيوتر</label>
  <input type="text" class="form-control input-sm"  placeholder="حساب تيوتر">  
</div> 

  <div class="col-md-6 col-sm-12 padding-left">
  <label class="form-label">حساب إنستغرام</label>
  <input type="text" class="form-control input-sm"  placeholder="حساب إنستغرام">  
</div> 

<div class="col-md-12 col-sm-12 padding-left">
  <label class="form-label">كلمة المرور</label>
  <input type="password" class="form-control input-sm"  placeholder="كلةه المرور">  
  </div>   

<div class="col-md-12 col-sm-12 padding-left">
  <label class="form-label">السيره الزاتية</label>
  <input type="text" class="form-control input-sm"  placeholder="السيره الزاتية">
  </div> 

</div> 

</div>       

<div class="form-group row send">
    <div class="text-center">
        <button @click.prevent="updateProfile" class="btn btn-primary">تحــديــث</button>
    </div>
</div>          
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default{
        data(){

            return{
                user:{
                    name: null,
                    name: null,
                    name: null,
                    name: null,
                    name: null,
                }
            }

        },

        computed:{
            getAuthUser(){
                return this.$store.getters.get_user;
            },
            getToken(){
                return this.$store.getters.get_token;
            },            
        },

        methods:{
            updateProfile(){
                const headers = {
                    'Authorization': 'Bearer '+ this.getToken,
                };                
                this.axios.post('https://animeeplus.online/api/users/addprofile',{headers}).then((res) =>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })
            },
        }
    }
</script>