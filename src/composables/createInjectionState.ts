import { inject, InjectionKey, provide } from 'vue';

export function createInjectionState<Arguments extends Array<any>, Return>(
    composable: (...args: Arguments) => Return
): readonly [useProvidingState: (...args: Arguments) => Return, useInjectedState: () => Return] {
    const key: string | InjectionKey<Return> = Symbol('InjectionState');
    const useProvidingState = (...args: Arguments) => {
        const state = composable(...args);
        provide(key, state);
        return state;
    };
    const useInjectedState = () => inject(key)!;
    return [useProvidingState, useInjectedState];
}
