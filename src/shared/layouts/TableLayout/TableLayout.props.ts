/* react */
import { DetailedHTMLProps, TableHTMLAttributes } from 'react';
/* types */
import { Slot } from '@shared/types';

export interface TableColumn {
    span?: number;
    children: Slot<undefined>;
}

export interface TableRow {
    span?: number;
    columns?: TableColumn[];
}

export interface TableLayoutProps
    extends Omit<
        DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>,
        'children' | 'ref'
    > {
    header?: TableRow;
    body?: TableRow[];
}
