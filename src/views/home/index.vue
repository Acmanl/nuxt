<script setup lang="ts">
import { getRoomLists, facthRoomList } from '@/api/index'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import indexDB from '@/utils/indexDB'
const { t } = useI18n()
const value1 = ref('')

// 数据库相关操作
const db = new indexDB('db')
// db.openStore('room', 'id', ['name', 'age'])
// AddAndUpdate

function add() {
  // db.updateItme('room', {
  //   id: 1,
  //   name: '32132132432',
  //   age: 18
  // })
}
function deletes(key: number | string) {
  // db.deleteItme('room', key)
}
function getList() {
  // db.getList('room')
}
function getItem(key: number | string) {
  // db.getItem('room', key)
}
const getRoomList = () => {
  getRoomLists().then(res => {
    console.log(res)
  })
  facthRoomList()
}
getRoomList()
</script>

<template>
  <el-button type="success" @click="add">增改</el-button>
  <el-button type="info" @click="deletes(2)">删除</el-button>
  <el-button type="warning" @click="getList()">查询</el-button>
  <el-button @click="getItem(1)">条件查询</el-button>
  <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
  {{ t(`message.home`) }}
</template>

<style>
</style>
