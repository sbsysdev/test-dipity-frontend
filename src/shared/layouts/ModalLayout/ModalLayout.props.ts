/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* types */
import { Alignment, Slot } from '@shared/types';

export interface ModalLayoutProps
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'children' | 'ref'
    > {
    children: Slot<undefined>;
    isVisible?: boolean;
    hasIndentation?: boolean;

    onClickOverlay?: () => void;

    nodeId?: string;

    colAlignment?: Alignment;
    rowAlignment?: Alignment;
}
