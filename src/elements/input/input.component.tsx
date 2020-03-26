import * as React from 'react';
import classnames from 'classnames';
import styles from './input.module.scss';

interface InputProps {
  /**
   * Set ID to the input
   */
  id: string;
  /**
   * Set type of the input
   * @default text
   */
  type?: string;
  /**
   * Set label above the input
   */
  label?: string;
  /**
   * Set label below the input
   */
  helper?: string;
  /**
   * Set this to change input kind
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
   * Set custom class
   * @default ""
   */
  className?: string;
  /**
   * Set a default value for the input
   */
  defaultValue?: string;
  /**
   * Set a value for the input
   */
  value?: string | number | string[];

  required?: boolean;
  /**
   * Set a onChange function for the Input
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Set a ref for the Input
   */
  inputRef?: React.RefObject<HTMLInputElement>;

  props?: InputProps;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  helper,
  type = 'text',
  kind = 'default',
  className = '',
  defaultValue,
  inputRef,
  onChange,
  value,
  required = true,
  ...props
}) => {
  const classes = classnames(
    styles.input,
    styles[`input--is-${kind}`],
    className
  );

  return (
    <div className={styles.input__group}>
      <label htmlFor={id}>
        <input
          ref={inputRef}
          onChange={onChange}
          className={classes}
          id={id}
          type={type}
          defaultValue={defaultValue}
          value={value}
          required={required}
          {...props}
        />
        <span className={styles.input__label}>{label}</span>
        <span className={styles.input__helper}>{helper}</span>
      </label>
    </div>
  );
};

export default Input;
