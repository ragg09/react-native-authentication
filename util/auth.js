import axios from 'axios';
import { FIREBASE_API_KEY } from '@env';

export const createUser = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );
};
