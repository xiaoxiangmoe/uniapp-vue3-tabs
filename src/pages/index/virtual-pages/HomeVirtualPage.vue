<script setup lang="ts">
import { useSystemInfo } from '../../../composables/useSystemInfo';

const { systemInfo } = useSystemInfo();
</script>
<template>
    <h1>HomePage</h1>
    <h2>systemInfo</h2>
    <view>{{ systemInfo }}</view>
</template>

<style scoped lang="scss"></style>
