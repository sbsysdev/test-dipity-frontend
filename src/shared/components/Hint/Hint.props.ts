/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HintProps
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
        'ref' | 'children'
    > {
    hint?: string;
    error?: string;
    hasDots?: boolean;
}
