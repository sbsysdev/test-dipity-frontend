/* react */
import { forwardRef, memo } from 'react';
/* props */
import { FieldProps } from './Field.props';
/* utils */
import { classNames, content } from '@shared/utils';
/* styles */
import fieldStyles from './Field.module.scss';

const Field = forwardRef<HTMLParagraphElement, FieldProps>(
    (
        {
            className,
            hasError = false,
            titleContent,
            beforeContent,
            inputContent,
            afterContent,
            hintContent,
            ...rest
        },
        ref
    ) => {
        return (
            <p
                className={classNames(fieldStyles.Field, className)}
                data-has-error={hasError}
                ref={ref}
                {...rest}>
                {content(titleContent, { slot: 'title' })}

                <span slot="content">
                    {content(beforeContent, { slot: 'before' })}

                    {content(inputContent, { slot: 'input' })}

                    {content(afterContent, { slot: 'after' })}
                </span>

                {content(hintContent, { slot: 'hint' })}
            </p>
        );
    }
);

export default memo(Field);
