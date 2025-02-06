import {useTranslation} from 'react-i18next';

import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  isShortLanguage?: boolean;
}

export const LangSwitcher = ({
  className,
  isShortLanguage = false,
}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.DEFAULT}
      onClick={toggleLanguage}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {isShortLanguage ? t('Короткий язык') : t('Язык')}
    </Button>
  );
};
