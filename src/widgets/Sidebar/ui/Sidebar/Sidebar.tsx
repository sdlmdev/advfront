import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(
        styles.Sidebar,
        {[styles.collapsed]: collapsed},
        [className]
      )}
    >
      <Button theme={ThemeButton.CLEAR} onClick={onToggle}>{collapsed ? t('Развернуть') : t('Свернуть')}</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
