<template>
<div>
  <v-container fluid>
    <v-carousel continuous cycle interval="4000" height="600" dark>
    <v-carousel-item
      v-for="(product, i) in promoProducts"
      :key="i"
      :src="product.imageSrc"
      reverse-transition="fade-transition"
      transition="fade-transition" 
    ></v-carousel-item>
  </v-carousel>
  </v-container>
 <v-container grid-list-lg>
<v-layout row>

  <v-flex v-for="(product, i) in products"
      :key="i" row wrap>
  
   <v-card
    class="mx-auto"
    max-width="550"
    min-width="300"
    height="600"
    style="margin-bottom: 30px;"
  xs12 sm6 md4
  >
  <router-link
  :aria-label="product.title"
  :to="'/product' + product.id"
  >
    <v-img
      class="white--text align-end"
      height="350px"
      :src="product.imageSrc"
    > </v-img>
      <v-card-title primary-title>{{product.title}}</v-card-title>
   

    <v-card-subtitle class="pb-0">
      <p>{{product.description.substring(0, 60)}}</p>
       <p>{{product.price}}</p>
      </v-card-subtitle>
  </router-link>
    <v-card-text class="text--primary">
     

      <div>
        <span>{{product.vendor}}</span>
          <span>{{product.color}}</span>
          <span>{{product.material}}</span>  
          </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="black"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="black"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

  </v-flex>
  </v-layout>
 </v-container>
</div>
</template>

<script>
export default {
  computed: {
    promoProducts () {
      return this.$store.getters.promoProducts
    },
    products () {
      return this.$store.getters.products
    }
}
}
</script>