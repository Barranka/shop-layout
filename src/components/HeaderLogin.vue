<template>
  <div>
	  <!-- Group 177 -->
    <div class="log-in">

      <!-- Before Auth -->
      <div class="log-in__items  group"  v-if="!isAuth"  @click="isShowFormAuth=true, show=true">
        <div class="log-in__item">
          <img src="@/assets/img/enter1.svg" alt="enter1">
          <img src="@/assets/img/enter2.svg" alt="enter2">
        </div>
        <p class="text log-in__item">Войти</p>
      </div>

      <!-- After Auth -->
      <div class="log-in__items  group" v-else>
        <el-dropdown  @command="handleCommand">
          <img src="@/assets/img/mini/admin.svg" alt="enter1">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">Личные данные</el-dropdown-item>
            <el-dropdown-item icon="el-icon-location-outline">Адреса доставки</el-dropdown-item>
            <el-dropdown-item icon="el-icon-tickets">Предыдущие заказы</el-dropdown-item>
            <el-dropdown-item icon="el-icon-d-arrow-left" command="exit" divided>Выход</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <formAuth v-if="isShowFormAuth" :show="show" @show="show=false"/>
  </div>

</template>

<script>
import formAuth from '@/components/FormAuth.vue'
export default {
  components: {formAuth},
  data () {
    return {
      isShowFormAuth: false,
      show: false
    }
  },
  computed: {
    isAuth() {
      return this.$route.name === 'admin'
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'exit') this.$router.push('/')
    }
  }
}
</script>

<style>

</style>