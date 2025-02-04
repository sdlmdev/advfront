import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import {routePath} from 'shared/config/routeConfig/routeConfig';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink} from 'shared/ui';
import {AppLinkTheme} from 'shared/ui/AppLink/ui/AppLink';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/ui/Button';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const {t} = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [
        className,
      ])}
    >
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.INVERTED_SECONDARY} to={routePath.main}>
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED_SECONDARY} to={routePath.about}>
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <Button
        className={styles.collapseBtn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? t('>') : t('<')}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShortLanguage={collapsed} />
      </div>
    </div>
  );
};
