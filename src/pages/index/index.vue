<script setup lang="ts">
import { ref } from 'vue';
import ExhaustiveChecking from '../../components/ExhaustiveChecking.vue';
import { TabItemData } from '../../components/tabs/AppTabItem.vue';
import AppTabs from '../../components/tabs/AppTabs.vue';
import HomeVirtualPage from './virtual-pages/HomeVirtualPage.vue';
import ProfileVirtualPage from './virtual-pages/ProfileVirtualPage.vue';

const tabList = [
    {
        key: 'home',
        tabText: '首页',
    },
    {
        key: 'profile',
        tabText: '我的'
    },
] as const satisfies ReadonlyArray<TabItemData>;
type TabKey = typeof tabList[number]['key'];

const activeTabKey = ref<TabKey>('home');
</script>
<template>
    <view class="page">
        <view class="virtual-page-box">
            <HomeVirtualPage v-if="activeTabKey === 'home'" />
            <ProfileVirtualPage v-else-if="activeTabKey === 'profile'" />
            <ExhaustiveChecking v-else :data="activeTabKey" />
        </view>
        <AppTabs v-model:active-tab-key="activeTabKey" :tab-list="tabList" />
    </view>
</template>
<style scoped lang="scss">
.page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.virtual-page-box {
    flex-grow: 1;
}
</style>
