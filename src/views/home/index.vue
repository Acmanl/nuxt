<script setup lang="ts">
import { getRoomList } from '../../api/index'
import { ref } from 'vue'
const value1 = ref('')
const getRoomLists = () => {
  getRoomList()
}
getRoomLists()
</script>

<template>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
  首页
</template>

<style>
</style>
