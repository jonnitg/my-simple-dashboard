import React, { ReactNode, useState } from 'react';

import classnames from 'classnames';
import AppBar from 'elements/app-bar';
import Sidebar from 'elements/sidebar';
import styles from './dashboard.module.scss';

type Props = {
  pageTitle: string;
  children: ReactNode;
};

const Dashboard = ({ pageTitle, children }: Props) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const classes = classnames(styles.dashboard, {
    [styles['dashboard--with-sidebar']]: toggleSidebar,
  });

  return (
    <>
      <div className={classes}>
        <AppBar
          title={pageTitle}
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          className={styles['dashboard__app-bar']}
        />
        <div className={styles.dashboard__main}>
          <div className={styles.dashboard__container}>{children}</div>
        </div>
      </div>
      {toggleSidebar && (
        <>
          <Sidebar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            className={toggleSidebar && styles.dashboard__sidebar}
          />
          <div className={styles['dashboard__sidebar-mask']} />
        </>
      )}
    </>
  );
};

export default Dashboard;
