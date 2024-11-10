import React from 'react';
import SCSS from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'Primary' | 'Secondary' | 'Link'; // Restricting to 3 possible variants
    content: string;
    key?: string;
}

const Button: React.FC<ButtonProps> = ({variant = 'Primary', content, key, children, ...props}) => {
    return (
        <button id={key} className={`${SCSS.Container} ${SCSS[`Container_${variant}`]}`} {...props}>
            <span>{content}</span>
            {children && <div>{children}</div>}
        </button>
    );
};

export default Button;
