<template lang="pug">
v-card#settings(class="pa-8")
  v-container
    v-row
      v-col(cols="12")
        h1.text-center 設定
    v-row
      v-col(cols="4")
        v-sheet(class="pa-2 ma-2") 名稱
      v-spacer
      v-col(cols="4")
        v-sheet(class="pa-2 ma-2") 試聽
      v-spacer
      v-col(cols="4")
        v-sheet(class="pa-2 ma-2") 選擇
      v-spacer
    tbody
      //- tr(v-for="alarm in settings.alarms" :key="alarm.id")
      v-spacer
      tr(v-for="alarm in alarms" :key="alarm.id")
        td#alarm_name {{ alarm.name }}
        v-spacer
          audio#audio(:src="alarm.file" controls)
          v-spacer
        td
        v-spacer
          v-radio-group(v-model="selectedAlarms")(class="pa-2 ma-2")
            v-radio(:value="alarm.id")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarms } = storeToRefs(settings)
</script>
