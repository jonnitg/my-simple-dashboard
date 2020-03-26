import * as React from 'react';
import classnames from 'classnames';
import styles from './card.module.scss';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className = '', children }: CardProps) => {
  const classes = classnames(styles.card, className);
  return (
    <div className={classes}>
      <div className={styles.card__wrapper}>
        <div className={styles.card__container}>{children}</div>
      </div>
    </div>
  );
};

export default Card;
