/* types */
import { Slot } from '@shared/types';

export function content<T>(component: Slot<T>, params?: T) {
    return typeof component === 'function' ? component(params) : component;
}
