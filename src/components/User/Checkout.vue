<template>
  <v-container>
    <v-layout row>
      <v-flex sx-12 sm6 offset-sm-3>
        <h1 class="text-secondary mb-3">Orders</h1>
        <v-list
      subheader
      two-line
      flat
    >
    

      <v-list-item-group
      
      >
        <v-list-item
        v-for="(order, i) in orders"
        :key="i"
        >
          <template>
            <v-list-item-action >
              <v-checkbox
                input-value="order.done"
                color="black"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{order.name}}</v-list-item-title>
              <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-tile-action>
              <v-btn class="dark"
              :to="'/product' + order.produtId"
              >Open</v-btn>
            </v-list-tile-action>
          </template>
        </v-list-item>


      </v-list-item-group>
    </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
       orders: [
        {
          id: 'test',
          name: 'clientName',
          phone: '333-33-33',
          produtId: '1',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone(order) {
     order.done = true
    }
  }
}
</script>