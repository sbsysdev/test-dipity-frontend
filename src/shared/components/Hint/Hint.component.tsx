/* react */
import { forwardRef, memo } from 'react';
/* props */
import { HintProps } from './Hint.props';
/* utils */
import { classNames } from '@shared/utils';
/* styles */
import hintStyles from './Hint.module.scss';

const Hint = forwardRef<HTMLSpanElement, HintProps>(
    ({ className, hint, error, hasDots, ...rest }, ref) => {
        return (
            <span
                className={classNames(hintStyles.Hint, hasDots && hintStyles.Dots, className)}
                data-has-error={typeof error === 'string'}
                data-is-empty={hint === undefined && error === undefined}
                ref={ref}
                {...rest}>
                {error ?? hint ?? 'Reserved'}
            </span>
        );
    }
);

export default memo(Hint);
