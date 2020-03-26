import * as React from 'react';
import classnames from 'classnames';
import styles from './form.module.scss';

type FormItemProps = {
  children: React.ReactNode;
  className?: string;
};

const FormItem = ({ children, className = '' }: FormItemProps) => {
  const classes = classnames(styles.form__item, className);
  return <div className={classes}>{children}</div>;
};

export default FormItem;
