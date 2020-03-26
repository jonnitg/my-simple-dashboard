import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUserAction } from '_redux/actions/authenticationActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronLeft,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import Button from 'elements/button';
import Heading from 'elements/heading';
import styles from './app-bar.module.scss';

interface AppBarProps {
  title: string;
  setToggleSidebar: (value: boolean) => void;
  toggleSidebar: boolean;
  className: string;
  onLogout: () => void;
}

const AppBar: React.FC<AppBarProps> = ({
  title,
  setToggleSidebar,
  toggleSidebar,
  className = '',
  onLogout,
}) => {
  const history = useHistory();
  const handleLogout = () => {
    onLogout();
    history.push('/login');
  };

  const classes = classnames(styles['app-bar'], className, {
    [styles['app-bar--with-active-sidebar']]: toggleSidebar,
  });
  return (
    <header className={classes}>
      <Button
        className={styles['app-bar__menu']}
        isTransparent
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <FontAwesomeIcon
          icon={toggleSidebar ? faChevronLeft : faBars}
          color="white"
          size="lg"
        />
      </Button>

      <Heading Tag="h1" type="title">
        {title}
      </Heading>
      <div className={styles['app-bar__configuration']}>
        <Button
          className={styles['app-bar__configuration__button']}
          isTransparent
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faSignOutAlt} color="white" size="lg" />
        </Button>
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogout: () => dispatch(logoutUserAction()),
});

export default connect(null, mapDispatchToProps)(AppBar);
