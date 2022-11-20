<script setup lang="ts">
import { onMounted } from 'vue';
defineProps<{
    data: never;
}>();
onMounted(() => {
    console.error('this component should not render');
});
</script>
<template>
    <view> </view>
</template>

<style scoped lang="scss"></style>
