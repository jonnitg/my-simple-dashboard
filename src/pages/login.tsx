import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loginUserAction } from '_redux/actions/authenticationActions';

import { Form, FormItem, getFieldsValue } from 'components/form';
import Card from 'elements/card';
import Button from 'elements/button';
import Input from 'elements/input';
import { State as ReducersState } from '_redux/reducers';
import styles from './styles/loginPage.module.scss';

type Props = {
  loginResponse: ReducersState;
  onLogin: (data: { email: string; password: string }) => void;
};

const Login = ({ loginResponse, onLogin }: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      email,
      password,
    } = getFieldsValue((formRef as unknown) as HTMLFormElement, [
      'email',
      'password',
    ]);
    onLogin({ email, password });
  };

  if (loginResponse.login.success) {
    Cookies.set('token', loginResponse.login.accessToken, { expires: 7 });
    return <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <div className={styles.login__container}>
      <Card className={styles.login__card}>
        <Form
          formRef={formRef}
          onSubmit={handleSubmit}
          className={styles.login__form}
        >
          <FormItem className={styles.login__form__item}>
            <Input label="Email" id="email" required />
          </FormItem>
          <FormItem className={styles.login__form__item}>
            <Input id="password" label="Password" type="password" required />
          </FormItem>
          <FormItem className={styles.login__form__item}>
            <Button type="submit" kind="primary" style={{ marginLeft: 'auto' }}>
              Login
            </Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: ReducersState) => ({
  loginResponse: state,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogin: (data: { email: string; password: string }) =>
    dispatch(loginUserAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
