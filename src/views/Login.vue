<template>
    <div>
        <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="front/img/images.jpg" alt="IMG">
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						تسجيل دخول 
					</span>

					<p id="warning-msg" v-show="message">{{message}}</p>

					<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" v-model="user.email" placeholder="إيميل">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" v-model="user.password" placeholder="كلمة المرور">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

<!-- 					<div class="wrap-input100 validate-input" data-validate="username is required">
						<input class="input100" type="text" v-model="user.username" placeholder="إسم الستخدم">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div> -->


					<div class="container-login100-form-btn">
						<button @click.prevent="Login" class="login100-form-btn">
							تسجيل الدخول
						</button>
					</div>
					<br>

<!-- 					<div class="text-center p-t-12">
						<button class="login100-form-btn" style="background:#fff; color:#333">
							<i class="fa fa-google"></i>
							&nbsp;
							المتابعة بواسطه جوجل 
						</button>
					</div>	 -->

					<div class="text-center p-t-136">
						<router-link class="txt2" to="register">
							 التسجيل للحصول علي حساب
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</router-link>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							نسيت
						</span>
						<router-link class="txt2" to="/reset">
							 كلمة المرور ؟
						</router-link>
					</div>					
				</form>
			</div>
		</div>
	</div>

<!-- <loader  v-show="isLoading" object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="false" name="circular"></loader>	 -->
    </div>
</template>

<script>
	export default{
		data(){
			return{
				user:{
					email:null,
					password:null,
				},

				isLoading:false,
				message:null,
			}
		},

		computed:{
			getUser(){
				return this.$store.getters.get_user;
			}
		},

		methods:{
			Login(){
				this.isLoading = true;
				this.$store.dispatch("performLoginAction",{
					email: this.user.email,
					password: this.user.password,
				}).then((res)=>{

					if (res != '') {
						const headers = {
						    'Authorization': 'Bearer '+ this.getToken,
						};  						
						this.$store.dispatch("performGetUserAction",{headers});
						this.$router.push("/");

					}else{
						this.isLoading = false;
						
					}

				}).catch((err) =>{
					if (err.response.data.message) {
						this.message = err.response.data.message
					}
				})
            }
			
		
	    }
    }
</script>

<style>
	#warning-msg{
color: #f03;
box-shadow: 0px 0px 6px  #f03;
margin: 10px 0;
text-align: center;		
border-radius:5px;
	}
</style>