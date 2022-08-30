import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

import './Button.scss';

const EGButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
    children,
    ...props
}) => {

    return (
        <button
            {...props}
            className={clsx(
                'eg-btn',
                props.className,
            )}
        >
            {children}
        </button>
    )
}

export default EGButton;