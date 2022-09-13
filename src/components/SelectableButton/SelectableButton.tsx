import React, { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';
import clsx from 'clsx';

import './SelectableButton.scss';

export type ButtonVariant = 'violet' | 'green' | 'blue' | 'yellow';

export const buttonVariants: ButtonVariant[] = ['violet', 'green', 'blue', 'yellow']

interface EGSelectableButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonVariant;
    selected?: boolean;
    disabled?: boolean;
}

const EGSelectableButton: React.FC<PropsWithChildren<EGSelectableButtonProps>> = ({
    variant = 'violet',
    selected = false,
    disabled = false,
    children,
    ...props
}) => {

    return (
        <button
            {...props}
            className={clsx(
                'selectable-btn',
                variant,
                {
                    'active': selected,
                    'disabled': disabled,
                },
                props.className
            )}
        >
            {children}
        </button>
    )
}

export default EGSelectableButton;
