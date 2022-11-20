<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useProvideSystemInfo } from './composables/useSystemInfo';
onLaunch(() => {
    console.log('App Launch');
});
onShow(() => {
    console.log('App Show');
});
onHide(() => {
    console.log('App Hide');
});
useProvideSystemInfo();
</script>
<style lang="scss"></style>
