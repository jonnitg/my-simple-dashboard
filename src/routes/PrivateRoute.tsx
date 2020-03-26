import * as React from 'react';
import { connect } from 'react-redux';
import {
  Redirect,
  Route,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';
import { State } from '_redux/reducers';

type Props = {
  component: React.ComponentType;
  globalState: State;
} & RouteProps;

const PrivateRoute = ({
  component: Component,
  globalState,
  ...rest
}: Props) => {
  const { login } = globalState;
  const innerRender = (props: RouteComponentProps) =>
    login.success && login.accessToken !== '' ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    );

  return <Route {...rest} render={innerRender} />;
};

const mapStateToProps = (globalState: State) => ({ globalState });

export default connect(mapStateToProps)(PrivateRoute);
