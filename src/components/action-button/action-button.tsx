import React, { useCallback, MouseEvent, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { ActionButtonType } from '../../enums';

import styles from './action-button.module.scss';

export interface ActionButtonProps {
  text: string;
  type: ActionButtonType;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  onClick?: () => void;
  className?: string;
  icon?: any;
  disabled?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  type,
  onClick,
  className,
  buttonProps = {},
  disabled,
  icon,
}) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (buttonProps.type !== 'submit') {
        e.preventDefault();
      }
      if (onClick) {
        onClick();
      }
    },
    [onClick],
  );

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(styles.button, styles[type], className)}
      onClick={handleClick}
    >
      {text}
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};
