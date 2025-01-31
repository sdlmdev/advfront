import {useTranslation} from 'react-i18next';

import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui';
import {ThemeButton} from 'shared/ui/Button/ui/Button';

import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({className}: ErrorPageProps) => {
  const {t} = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.ErrorPage, {}, [className])}>
      <p>{t('error')}</p>
      <Button
        theme={ThemeButton.DEFAULT}
        onClick={reloadPage}
        className={classNames(styles.reloadBtn)}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
