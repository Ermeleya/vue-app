<template>
<div>
  <v-navigation-drawer app temporary v-model="sideNav">

     <v-list>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="link" color="primary">
          <v-list-item v-for="(link, i) in links" :key="i" :to="link.url">
              <v-list-item-icon>
                <v-icon v-text="link.icon" ></v-icon>
              </v-list-item-icon>
             
              <v-list-item-title v-text="link.title">
              </v-list-item-title>
               
          </v-list-item>
        </v-list-item-group>
      </v-list>

  </v-navigation-drawer>

   <v-toolbar dark dense flat>
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-md-and-up">  
          <v-icon>{{menu}}</v-icon>
      </v-app-bar-nav-icon>
       <router-link :to="'/'" class="linker"> 
      <v-toolbar-title><span class="linker">OnlineStore</span></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-btn text v-for="(link, i) in links"
          :key="i"
         :to="link.url" class="d-none d-md-flex">
          <v-icon left>{{ link.icon }}</v-icon> 
      {{link.title}}
      </v-btn>
    
    </v-toolbar>
  <v-content app></v-content>
  <router-view></router-view>
</div> 
</template>

<script>
import { mdiAccountOutline } from '@mdi/js';
import { mdiMenu } from '@mdi/js';
import { mdiCardAccountDetailsOutline } from '@mdi/js';
import { mdiCartOutline } from '@mdi/js';
import { mdiPlus } from '@mdi/js';
import { mdiFormatListBulleted } from '@mdi/js';
export default {
 data: () => ({
      svgPath: mdiAccountOutline,
      menu: mdiMenu,
      sideNav: false,
      links: [
        {title: 'Login', icon: mdiAccountOutline, url: '/login'},
        {title: 'Register', icon: mdiCardAccountDetailsOutline, url: '/register'},
        {title: 'Cart', icon: mdiCartOutline, url: '/checkout'},
        {title: 'New Product', icon: mdiPlus, url: '/new'},
        {title: 'My Products', icon: mdiFormatListBulleted, url: '/list'}
      ]
    }),
  
}
</script>

<style>
.linker {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
</style>