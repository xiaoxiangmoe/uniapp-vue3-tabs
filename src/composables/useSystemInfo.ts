import { shallowRef } from 'vue';
import { createInjectionState } from './createInjectionState';

function useSystemInfoHook() {
    const systemInfo = shallowRef<UniApp.GetSystemInfoResult>();
    const updateSystemInfo = () => {
        uni.getSystemInfo({
            success: (x) => {
                systemInfo.value = x;
            },
        });
    };
    updateSystemInfo();
    return { systemInfo, updateSystemInfo };
}

export const [useSystemInfo, useProvideSystemInfo] = createInjectionState(useSystemInfoHook);
