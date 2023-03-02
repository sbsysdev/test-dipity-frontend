/* react */
import { forwardRef, memo } from 'react';
/* props */
import { IconProps } from './Icon.props';
/* utils */
import { classNames } from '@shared/utils';
/* styles */
import iconStyles from './Icon.module.scss';

const Icon = forwardRef<SVGSVGElement, IconProps>(({ className, path, ...rest }, ref) => {
    return (
        <svg
            className={classNames(iconStyles.Icon, className)}
            viewBox="0 0 24 24"
            ref={ref}
            {...rest}>
            {typeof path === 'string' && <path fill="currentColor" d={path} />}

            {Array.isArray(path) && (
                <g>
                    {path.map((line, index) => (
                        <path key={`Icon_${index}`} fill="currentColor" d={line} />
                    ))}
                </g>
            )}
        </svg>
    );
});

export default memo(Icon);
