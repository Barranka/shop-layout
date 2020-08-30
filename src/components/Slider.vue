<template>
  <div class="slider-wrapper">
	<div class="slider-header">
      <h1 class="slider-title">Предложения недели</h1>
    </div>

    <div class="slider">
      <carousel
        :perPage="3"
        :paginationEnabled="false"
			    :navigationEnabled="true">
        <slide class="card" v-for="card in cards" :key="card.title">
          <div class="slider-item">
            <img :src="card.img" :alt="card.img">
            <div class="slider-item__body">
              <div class="slider-item__descr">
                <h1 class="slider-item__title">{{card.title}}</h1>
                <div class="slider-item__icons">
                  <img class="slider-item__img" src="@/assets/img/mini/deliv.svg" alt="deliv">
                  <img class="slider-item__img" src="@/assets/img/mini/times.svg" alt="times">
                  <img class="slider-item__img" src="@/assets/img/mini/money.svg" alt="money">
                </div>
              </div>
              <div class="slider-item__mark">
                <img src="@/assets/img/mini/mark.svg" alt="mark">
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: { Carousel, Slide},
  data() {
    return {
      cards: [
        {
          img: './img/slide1.svg',
          title: 'Название ресторана1',
        },
        {
          img: './img/slide2.svg',
          title: 'Название ресторана2',
        },
        {
          img: './img/slide3.svg',
          title: 'Название ресторана3',
        },
        {
          img: './img/slide1.svg',
          title: 'Название ресторана4',
        }
      ]
    }
  }

};
</script>

<style>

</style>