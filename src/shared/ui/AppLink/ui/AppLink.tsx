import {FC} from 'react';
import {Link, LinkProps} from 'react-router-dom';

import {classNames} from 'shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED_SECONDARY = 'invertedSecondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...props
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(styles.AppLink, {theme}, [
        className,
        styles[theme],
      ])}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
