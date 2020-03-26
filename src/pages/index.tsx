import React from 'react';
import { connect } from 'react-redux';
import { State as ReducersState } from '_redux/reducers';

import Dashboard from 'components/dashboard';

type Props = {
  globalState: ReducersState;
};
const Home = ({ globalState }: Props) => {
  console.log({ token: globalState.login.accessToken });
  return (
    <Dashboard pageTitle="My Simple Dashboard">
      <p>Welcome to the dashboard</p>
    </Dashboard>
  );
};

const mapStateToProps = (state: ReducersState) => ({ globalState: state });

export default connect(mapStateToProps)(Home);
