import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button';
import {Modal} from 'shared/ui/Modal';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuthModalOpen = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Button onClick={handleAuthModalOpen} theme={ButtonTheme.DEFAULT}>
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal onClose={handleAuthModalOpen} isOpen={isAuthModalOpen}>
        Авторизация
      </Modal>
    </header>
  );
};
