<template lang="pug">
v-app
  v-navigation-drawer(expand-on-hover rail permanent width="180")
    v-list-item#tomato(:prepend-avatar="tomato" title="POMODORO")
    v-divider
    v-list(density="compact" nav)
    v-list-item(color="red lighten-2" two-line prepend-icon="mdi-home" title="TIMER" value="TIMER" to="/")
    v-list-item(color="red lighten-2" prepend-icon="mdi-format-list-bulleted" title="TO DO LIST" value="LIST" to="/list")
    v-list-item(color="red lighten-2" prepend-icon="mdi-cog" title="SETTINGS" value="SETTINGS" to="/settings")
    v-list-item(color="red lighten-2" :prepend-icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" title="NOTIFY" @click="toggleNotify")
    //- v-spacer
    //-   v-btn(icon="mdi-home" variant="text" to="/" color="grey darken-3" title="home")
    //-   v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list" color="grey darken-3")
    //-   v-btn(icon="mdi-cog" variant="text" to="/settings" color="grey darken-3")
    //-   v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" color="grey darken-3" @click="toggleNotify")
  v-main
    v-container
      router-view(v-slot="{ Component }")
        //- 換頁保留元件不被銷毀
        //- 設定 include 指定要保留的元件
        keep-alive(include="HomeView")
          //- 動態元件，將元件以 is 傳入
          component(:is="Component")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings
const tomato = new URL('@/assets/tomato.png', import.meta.url).href
</script>
