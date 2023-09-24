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
						أعد ضبط كلمة المرور 
					</span>				

					<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" v-model="user.email" placeholder="إيميل">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
						<span v-if="errors.email">{{errors.email[0]}}</span>
					</div>

					<div class="container-login100-form-btn">
						<button @click.prevent="reset" class="login100-form-btn">
							إرسال رمز إعادة التعيين
						</button>
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
					email:null,
				},
				errors:[],
			}
		},

		methods:{
			reset(){
				this.isLoading = true        

            this.axios.post('https://animeeplus.online/api/password/email',{email: this.user.email}).then(res=>{

            	    this.isLoading = false 

            	    console.log(res)

	            if (res.data.message == 'passwords.sent') {

	              this.$router.push("/reset-password") 

	            }else if(res.errors){
					this.errors = res.errors;						
				}           

	            }).catch(err=>{
	            	this.isLoading = false    
	                console.log(err);
	            }) 				
			}
		}
	}
</script>