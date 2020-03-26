import * as React from 'react';
import classnames from 'classnames';
import styles from './form.module.scss';

type FormProps = {
  formRef?: React.RefObject<HTMLFormElement>;
  onSubmit(event: React.ChangeEvent<HTMLFormElement>): void;
  children: React.ReactNode;
  className?: string;
};

const Form = ({ className = '', formRef, onSubmit, children }: FormProps) => {
  const classes = classnames(styles.form, className);
  return (
    <form className={classes} ref={formRef} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
