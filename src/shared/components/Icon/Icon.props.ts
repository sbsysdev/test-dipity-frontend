import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IconProps
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement>,
        'ref' | 'children'
    > {
    path?: string | string[];
}
