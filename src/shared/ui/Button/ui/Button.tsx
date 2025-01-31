import {ButtonHTMLAttributes, FC} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ThemeButton {
  DEFAULT = 'default',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.DEFAULT,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...props}
    >
      {children}
    </button>
  );
};
