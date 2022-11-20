<script setup lang="ts">
import AppTabItem, { type TabItemData } from './AppTabItem.vue';

defineProps<{
    tabList: ReadonlyArray<TabItemData>;
    activeTabKey: string;
}>();
const emit = defineEmits<{
    (event: 'update:activeTabKey', activeTabKey: string): void;
}>();
</script>
<template>
    <view class="tab-items-box">
        <AppTabItem
            v-for="itemData in tabList"
            :item-data="itemData"
            :active="itemData.key === activeTabKey"
            @click="emit('update:activeTabKey', itemData.key)"
        />
    </view>
</template>

<style scoped lang="scss">
.tab-items-box {
    display: flex;
}
</style>
