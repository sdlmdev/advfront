import {useTranslation} from 'react-i18next';

import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ThemeButton} from 'shared/ui/Button/ui/Button';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.DEFAULT}
      onClick={toggleLanguage}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
