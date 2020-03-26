/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useRef, useEffect } from 'react';
import classnames from 'classnames';
import Heading from 'elements/heading';
import styles from './sidebar.module.scss';

interface AppBarProps {
  setToggleSidebar: (value: boolean) => void;
  toggleSidebar: boolean;
  className: string;
}

const Sidebar: React.FC<AppBarProps> = ({
  toggleSidebar,
  setToggleSidebar,
  className = '',
}) => {
  const node = useRef<HTMLElement | null>(null);
  const classes = classnames(styles.sidebar, className);

  useEffect(() => {
    /**
     * If click outside the sidebar close the sidebar
     * Only for mobile
     */
    const handleClick = (e: MouseEvent) => {
      if (node.current!.contains(e.target as Node)) {
        return;
      }

      // breakpoint_tablet_landscape = 992px
      if (window.innerWidth < 992) {
        setToggleSidebar(!toggleSidebar);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [setToggleSidebar, toggleSidebar]);

  return (
    <aside ref={node} className={classes}>
      <Heading Tag="h1" type="logo" className={styles.sidebar__heading}>
        My Simple Dasboard
      </Heading>
      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__list}>
          <li className={styles['sidebar__list-item']}>
            <a href="/" className={styles.sidebar__link}>
              Home
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
