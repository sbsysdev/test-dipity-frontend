import { ReactNode } from 'react';

export type Slot<T> = ReactNode | ReactNode[] | ((params?: T) => ReactNode);
