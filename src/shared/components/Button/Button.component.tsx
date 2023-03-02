/* react */
import { memo } from 'react';
/* types */
import { ButtonComponent } from './Button.type';
/* styles */
import ButtonStyles from './Button.module.scss';

function Button({ className, children, ...rest }: ButtonComponent) {
    return (
        <button className={`${ButtonStyles.Button} ${className}`} {...rest}>
            {children}
        </button>
    );
}

export default memo(Button);
