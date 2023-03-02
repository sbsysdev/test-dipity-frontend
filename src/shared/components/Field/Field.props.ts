/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* types */
import { Slot } from '@shared/types';

export interface ContentProps {
    slot: string;
}

export interface FieldProps
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
        'ref' | 'children'
    > {
    hasError?: boolean;
    titleContent?: Slot<ContentProps>;
    beforeContent?: Slot<ContentProps>;
    inputContent?: Slot<ContentProps>;
    afterContent?: Slot<ContentProps>;
    hintContent?: Slot<ContentProps>;
}
