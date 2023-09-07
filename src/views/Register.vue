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

					<div class="wrap-input100 validate-input">
						<input class="input100" type="text" v-model="user.name" placeholder="إسم المستخدم">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
						<span v-if="errors.name">{{errors.name[0]}}</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" v-model="user.email" placeholder="إيميل">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
						<span v-if="errors.email">{{errors.email[0]}}</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" v-model="user.password" placeholder="كلمة المرور">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
						<span v-if="errors.password">{{errors.password[0]}}</span>
					</div>

					<div class="container-login100-form-btn">
						<button @click.prevent="register" class="login100-form-btn">
							تسجيل
						</button>
					</div>

					<div class="text-center p-t-136">
						<router-link class="txt2" to="login">
							هل لديك حساب ؟
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div v-show="isLoading">
<loader object="#ffb600" color1="#ffffff" color2="#ca1919" size="5" speed="2" bg="#000000" objectbg="#999793" opacity="80" disableScrolling="false" name="circular"></loader>	
	</div>
    </div>


</template>

<script>
	export default{
		data(){
			return{
				isLoading: false,

				user:{
					name:null,
					email:null,
					password:null,
				},
				errors:[],
			}
		},

		methods:{
			register(){
				this.isLoading = true
				this.$store.dispatch('performRegisterAction',{
					name: this.user.name,
					email: this.user.email,
					password: this.user.password,
				}).then((res)=>{

					if (res.data.access_token) {
			            this.$notify({
			              title: "عمليه ناجه 🎉",
			              text: res.data.msg,
			              // type: "success",
			            });		            
 						
						this.$store.dispatch("performGetUserAction",{
							token: res.data.access_token
						});	

						this.isLoading = false

						this.$router.push("/")						

					}else if(res.errors){
					this.errors = res.errors;
					// console.log(res)						
					}

				}).catch((err)=>{

					console.log(err)
					
				})
			}
		}
	}
</script>