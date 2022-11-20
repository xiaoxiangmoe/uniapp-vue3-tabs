<script setup lang="ts">
export interface TabItemData {
    readonly key: string;
    readonly tabText: string;
}
export interface AppTabItemProps {
    itemData: TabItemData;
    active: boolean;
}
defineProps<AppTabItemProps>();
</script>
<template>
    <view :class="{ item: true, active }">
        {{ itemData.tabText }}
    </view>
</template>

<style scoped lang="scss">
.item {
    flex-grow: 1;
    text-align: center;
    &.active {
        background-color: cyan;
    }
}
</style>
