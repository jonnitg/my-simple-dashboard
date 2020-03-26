import * as React from 'react';
import classnames from 'classnames';
import styles from './heading.module.scss';

interface HeadingProps {
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'strong';
  type?: 'title' | 'subtitle' | 'navigation' | 'logo';
  /**
   * Set custom class
   * @default ""
   */
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  Tag = 'strong',
  type = '',
  className = '',
  children,
}) => {
  const classes = classnames(styles.heading, className, {
    [styles[`heading--is-${Tag}`]]: Tag && type === '',
    [styles[`heading--is-${type}`]]: type !== '',
  });

  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
