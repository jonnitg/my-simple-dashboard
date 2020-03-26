import * as endpoints from '_api/endpoints';
import { LoginUser } from '../types/login';

export const loginUserService = async (request: LoginUser) => {
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.user),
  };

  const response = await fetch(endpoints.AUTH_LOGIN_ENDPOINT, parameters);
  return response.json();
};
