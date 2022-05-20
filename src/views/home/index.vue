<script setup lang="ts">
import { getRoomList } from '../../api/index'
const getRoomLists = () => {
  getRoomList()
}
getRoomLists()
</script>

<template>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  首页
</template>

<style>
</style>
