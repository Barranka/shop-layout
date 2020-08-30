<template>
  <div class="body-content">

    <!-- Header -->
    <el-header>
      <div class="wrapper">
        <div class="header">
          <!-- logo -->
          <div class="logo">
            <img src="@/assets/img/logo.svg" alt="logo">
          </div>

          <!-- Address -->
          <div class="header-content">
            <div class="address">
              <div class="search-address">
                <img v-if="isShowText" src="@/assets/img/adress.svg" alt="adress">
              </div>
              <div class="enter-address">
                <p class="enter-address__text" type="text" v-if="isShowText" @click="isShowInput=true, isShowText=false">{{savedValue}}</p>
                <template>
                  <el-select
                    class="enter-address__input"
                    v-if="isShowInput"
                    v-model="value"
                    filterable
                    :placeholder="value"
                    @change="saveValue(value)">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left;"><img src="@/assets/img/adress.svg" style="color: #585858; width: 20px;" alt="adress"></span>
                      <span style="float: left; color: #979797; font-weight: 600; margin-left:10px; font-size: 16px">{{ item.value }}</span>
                    </el-option>
                  </el-select>
                </template>
              </div>
            </div>

            <div class="action-groups">

              <!-- Group 131 -->
              <div class="search">
                <div class="search__items  group">
                  <img src="@/assets/img/search.svg" alt="search">
                  <p class="text log-in__item">Поиск</p>
                </div>
              </div>

              <!-- Group 177 -->
              <headerLogin />

              <!-- Group Basket -->
              <div class="basket">
                <img src="@/assets/img/basket.svg" alt="basket">
              </div>

            </div>
          </div>
        </div>
      </div>
    </el-header>


    <!-- NavBar -->
    <nav class="nav">
      <div class="wrapper">
        <el-menu
          class="el-menu"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item index="1" class="el-menu-item__bar el-menu-item__bar_active" >Все</el-menu-item>
          <el-menu-item index="2" class="el-menu-item__bar" >Суши</el-menu-item>
          <el-menu-item index="3" class="el-menu-item__bar" >Пицца</el-menu-item>
          <el-menu-item index="4" class="el-menu-item__bar" >Бургеры</el-menu-item>
          <el-menu-item index="5" class="el-menu-item__bar" >Фастфуд</el-menu-item>
          <el-menu-item index="6" class="el-menu-item__bar" >Шашлыки</el-menu-item>
          <el-menu-item index="7" class="el-menu-item__bar" >Азиатская</el-menu-item>
          <el-menu-item index="8" class="el-menu-item__bar" >Десерты</el-menu-item>
          <el-menu-item index="9" class="el-menu-item__bar" >Здоровая еда</el-menu-item>
          <el-submenu index="2"  class="el-submenu">
            <template slot="title">Ещё</template>
            <el-menu-item index="2-1">Десерты</el-menu-item>
            <el-menu-item index="2-2">Напитки</el-menu-item>
            <el-menu-item index="2-3">Соусы</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </nav>

    <!-- Main content -->
    <el-main>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </el-main>

    <!-- Footer -->
    <el-footer>
      <div class="wrapper">
        <div class="footer">
          <div class="logo2">
            <img src="@/assets/img/footer/logo2.svg" alt="logo">
          </div>
          <div class="menu">
            <el-menu
              class="menu-footer"
              mode="horizontal">
              <el-menu-item class="menu-footer-item__footer">Ресторанам</el-menu-item>
              <el-menu-item class="menu-footer-item__footer">Курьерам</el-menu-item>
              <el-menu-item class="menu-footer-item__footer">Компаниям</el-menu-item>
              <el-menu-item class="menu-footer-item__footer">Об акциях</el-menu-item>
              <el-menu-item class="menu-footer-item__footer">Контакты</el-menu-item>
            </el-menu>
          </div>

          <div class="links">
            <div class="social-links">
              <img class="social-links__item" src="@/assets/img/footer/inst.svg" alt="inst">
              <img class="social-links__item" src="@/assets/img/footer/vk.svg" alt="vk">
              <img class="social-links__item" src="@/assets/img/footer/face.svg" alt="face">
            </div>

            <div class="mobile-links">
              <img class="mobile-links__item" src="@/assets/img/footer/app.svg" alt="app">
              <img class="mobile-links__item" src="@/assets/img/footer/google.svg" alt="google">
            </div>
          </div>
        </div>

      </div>
    </el-footer>

  </div>
</template>

<script>
import headerLogin from '@/components/HeaderLogin.vue'

export default {
  components: {headerLogin},
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isShowInput: false,
      isShowText: true,
      isShowFormAuth: false,
      show: false,
       options: [{
          value: 'ул. Петровско-Разумовская 17',
          label: 'ул. Петровско-Разумовская 17'
        }, {
          value: 'ул. Сибирский проезд 10, к.2',
          label: 'ул. Сибирский проезд 10, к.2'
        }, {
          value: 'ул. Перервинский бульвар 27, к.1',
          label: 'ул. Перервинский бульвар 27, к.1'
        }],
        value: '',
        savedValue: 'ул. Петровско-Разумовская 17'
    }
  },
  created() {
    return this.value = this.savedValue
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    saveValue(val) {
      this.isShowInput = false
      this.isShowText = true
      this.savedValue = val
    }
  }
};
</script>
