<template>
  <v-container>
    <v-layout row>
      <v-flex col-xs-12 col-sm-6 offset-sm-3>
        <h1 class="text--secondary mb3">My products</h1>
        <v-card 
        class="elevation-10 mb-2"
        v-for="(product, i) in products"
        :key="i"
        >
          <v-layout>
            <v-flex xs4>
              <v-img
              :src="product.imageSrc"
              height="250px">
                
              </v-img>
            </v-flex>
              <v-card-text>
                <h2>{{product.title}}</h2>
                <p>{{product.description}}</p>
                <v-card-actions></v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark
                :to="'/product' + product.id">
                  Open</v-btn>
              </v-card-text>
            <v-flex xs8>

            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
data () {
  return {
   products: [
            {
            id: '1',
            title: 'Lenovo Legion Y520',
            vendor: 'Lenovo',
            color: 'black',
            material: 'metal/plastic',
            description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
            price: 760,
            promo: false,
            imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg',
            },
            {
              id: '2',
              title: 'Asus FX503VD',
              vendor: 'Asus',
              color: 'white',
              material: 'plastic',
              description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
              price: 984,
              promo: true,
              imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg',
            },
            {
              id: '3',
              title: 'ASUS TUF Gaming FX504GD',
              vendor: 'Asus',
              color: 'black',
              material: 'metal/plastic',
              description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
              price: 1220,
              promo: true,
              imageSrc: 'https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg',
            },
            
          ]
  }
}
}
</script>