<template>
	<el-dialog title="Вход в личный кабинет" :visible.sync="show" :before-close="handleClose" width="435px">
		<el-form :model="form" label-position="top" status-icon :rules="rules" ref="form" label-width="120px" class="el-form">
			<label class="label">Введите номер телефона</label>
  			<el-form-item prop="phone">
  			  <el-input type="text" v-model="form.phone" v-mask="'+7(###)-###-##-##'" autocomplete="off">></el-input>
  			</el-form-item>
  			<el-form-item prop="check">
  			  <el-input placeholder="Введите код из СМС-сообщения" type="text" v-model="form.check" autocomplete="off"></el-input>
  			</el-form-item>
			<div class="checkbox-item">
				<el-checkbox name="type" v-model="form.checkbox" color="#9CCB3B" label="">Указывая номер телефона, я принимаю</el-checkbox>
				<p style="font-size:14px; color: #979797; margin:0 0 20px 23px; font-weight: 200;">условия <span class="text-green">пользовательского соглашения</span></p>
  			</div>
			<el-form-item>
  				<el-button class="btnForm" type="primary" @click="submitForm('form')">Войти</el-button>
  			</el-form-item>

			<p class="link-item">В первый раз? <strong>Зарегистрироваться</strong></p>

		</el-form>
	</el-dialog>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
    	return {
    	  form: {
    	    phone: '',
    	    check: ''
    	  },
    	  rules: {
    	    phone: [
			  { required: true, message: 'Пожалуйста введите ваш номер телефона',  trigger: 'change'}
    	    ],
    	    check: [
    	      { required: true, message: 'Пожалуйста введите пароль из СМС-сообщения', trigger: 'change' }
			],
			checkbox: [
            	{ required: true, message: 'Пожалуйста выберите, что высоглашаетесь с условиями', trigger: 'blur' }
          	]
		  }
    	}
	},
	methods: {
		submitForm(form) {
			this.$refs[form].validate((valid) => {
    	    	if (valid) {
					this.$router.push('/admin')
					this.$emit('show')
    	    	  	this.resetForm()
    	    	}
    	  	})
    	},
    	resetForm() {
    	  this.form.phone = ''
    	  this.form.check = ''
    	  this.$nextTick( () => this.$refs.form.clearValidate() )
		},
		handleClose(done) {
        	this.$emit('show')
        	this.$nextTick( () => this.resetForm())
      	}
	}
}
</script>
