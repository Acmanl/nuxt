<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
</script>

<template>{{t(`message.main`)}}</template>

<style lang="scss">
@import '@/style/home/index.scss'
</style>
