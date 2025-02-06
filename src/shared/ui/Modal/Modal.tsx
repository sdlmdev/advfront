import {useTheme} from 'app/providers/ThemeProvider';
import {
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';
import {Portal} from 'shared/ui/Portal';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: (isOpen?: boolean) => void;
}

export const Modal = ({
  className,
  children,
  isOpen = false,
  onClose,
}: ModalProps) => {
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const handleClose = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      if (onClose) {
        e.stopPropagation();
        onClose();
      }
    },
    [onClose],
  );

  const onContentClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const {theme} = useTheme();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  return (
    <Portal>
      <div
        className={classNames(styles.Modal, mods, [className, theme])}
        onClick={handleClose}
      >
        <div className={styles.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
