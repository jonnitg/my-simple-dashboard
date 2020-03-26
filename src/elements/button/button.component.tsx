import * as React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

interface ButtonProps {
  /**
   * Set type of the button
   * @default button
   */
  type?: 'button' | 'submit';
  /**
   * Set this to change button kind
   * @default default
   */
  kind?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white'
    | 'gray';
  /**
   * Set if is outlined
   * @default true
   */
  isOutline?: boolean;

  /**
   * Set if has any styles
   * @default false
   */
  isTransparent?: boolean;
  /**
   * Set custom class
   * @default ""
   */
  className?: string;
  /**
   * Set a onChange function for the Button
   */
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  /**
   * Set a ref for the Button
   */
  ref?: React.RefObject<HTMLButtonElement>;
  props?: ButtonProps;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  kind = 'default',
  className = '',
  ref,
  onClick,
  isOutline = false,
  isTransparent = false,
  children,
  style = {},
  ...props
}) => {
  const classes = classnames(
    styles.button,
    {
      [styles[`button--is-${kind}`]]: !isOutline && !isTransparent,
      [styles[`button--is-outline-${kind}`]]: isOutline && !isTransparent,
      [styles['button--is-transparent']]: isTransparent,
    },
    className
  );
  const newProps = {
    ref,
    onClick,
    className: classes,
    ...props,
  };

  if (type === 'submit') {
    return (
      <button type="submit" {...newProps} style={style}>
        {children}
      </button>
    );
  }

  return (
    <button type="button" {...newProps} style={style}>
      {children}
    </button>
  );
};

export default Button;
