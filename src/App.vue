<script setup lang="ts">
import { useRouter } from 'vue-router'
import {ref} from 'vue'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import En from 'element-plus/lib/locale/lang/en'
import {Language} from 'element-plus/lib/locale' // 语言包类型
const router = useRouter()
const {locale: localeI18n} = useI18n()
const locale = ref<Language>(zhCn)
const changeLang = (langType: Language) => {
  locale.value = langType
  localeI18n.value = langType.name
}
</script>

<template>
 <el-config-provider :locale="locale">
  <button @click="changeLang(zhCn)">中文</button>
  <button @click="changeLang(En)">英文</button>
  <button @click="() => router.push({ path: '/home' })">home</button>
  <button @click="() => router.push({ path: '/main' })">main</button>
  <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  button {
    font-size: red;
  }
}
</style>
