{/* <template>
  <v-container>
    <v-layout row>
      <v-flex col-xs-12 col-sm-6 offset-sm-3>
        <h1 class="text--secondary mb3">Create New Product</h1>
         <v-form ref="form"
                  v-model="valid"
                  lazy-validation>

                  <v-text-field 
                    label="Title"
                    name="title"
                    type="text"
                    v-model="title"
                    required
                    :rules="[v => v || 'Title is required']">
                    </v-text-field>
                    
                 
                  <v-text-field
                    label="Vender Product"
                    name="vender"
                    type="text"
                    v-model="vendor"
                  />


                   <v-text-field
                    label="Color Product"
                    name="color"
                    type="text"
                    v-model="color"
                  />

                  <v-text-field
                    label="Material Product"
                    name="material"
                    type="text"
                    v-model="material"
                  />
                 
                  <v-text-field
                    label="Price of Product"
                    name="price"
                    type="text"
                    v-model="price"
                    required
                    :rules="[v => v || 'Price is required']"
                  />

                  <v-text-field
                    label="Description of Product"
                    name="description"
                    type="text"
                    v-model="description"
                    multiline
                  />

              
   
    <v-layout row class="mb-3">
      <v-flex col-xs-12 col-sm-2 offset-sm-8>
      <v-btn dark>Upload</v-btn>
      </v-flex>
    </v-layout>

      <v-layout row>
      <v-flex col-xs-12 col-sm-6>
      <img src="https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg" alt="promo" height="200px">
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex col-xs-12 col-sm-6 >
      <v-switch color="success" v-model="switch1" label="Add to promo?"></v-switch>
      </v-flex>
    </v-layout>

    
    <v-spacer></v-spacer>  
    <v-btn class="success col-xs-12 col-sm-2 offset-sm-8" @click="createProduct" :disable="!valid">Create Product</v-btn>
    </v-form>
   </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      vendor: '',
      color: '',
      material: '',
      price: 0,
      description: '',
      switch1: false, 
      valid: false,
    }
  }, 
  methods: {
    createProduct() {
      if (this.$refs.form.validate()) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          switch1: this.switch1,
          }
          console.log(product)
      }
    }
  }
}
</script> */

<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create New Product</h1>
        <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
          <v-text-field  
            name="title" 
            label="Title" 
            type="text"
            required
            :rules="[v => !!v || 'Title is require']"
            v-model="title"
          ></v-text-field>
          <v-text-field 
            name="vendor" 
            label="Vendor Product" 
            type="text"
            v-model="vendor"
          ></v-text-field>
          <v-text-field 
            name="color" 
            label="Color Product" 
            type="text"
            v-model="color"
          ></v-text-field>
          <v-text-field 
            name="material" 
            label="Material Product" 
            type="text"
            v-model="material"
          ></v-text-field>
          <v-text-field 
            name="price" 
            label="Price Product" 
            type="text"
            :rules="[v => !!v || 'Price is require']"
            required
            v-model="price"
          ></v-text-field>
          <v-text-field 
            name="description" 
            label="Description Product" 
            type="text"
            multi-line
            v-model="description"
          ></v-text-field>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning" @click="upload">
              Upload
           
            </v-btn>
            <input 
              ref="fileInput" 
              type="file" 
              style="display: none;" 
              accept="image/*"
              @change="onFileChange"
            >
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img :src="imageSrc" height="200px" v-if="imageSrc">
          </v-flex>
        </v-layout>
         <v-layout row>
          <v-flex xs12>
            <v-switch
              color="primary"
              label="Add to Promo?"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn 
              :loading="loading"
              :disabled="!valid || !image || loading"
              class="success"
              @click="createProduct"
            >Create Product</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      vendor: '',
      color: '',
      material: '',
      price: 0,
      description: '',
      promo: false,
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createProduct () {
      if (this.$refs.form.validate() && this.image) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo,
          image: this.image
        }

        this.$store.dispatch('createProduct', product)
        .then(() => {
          this.$router.push('/list')
        })
        .catch(() => {})
      }
    },
    upload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>