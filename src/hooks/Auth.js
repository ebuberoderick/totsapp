import AsyncStorage from '@react-native-async-storage/async-storage';
import { addData } from '../Store/reducers/UsersReducer';

export function SignInAuth(data, dispatch) {
  dispatch(addData(data?.data));
  AsyncStorage.setItem("APPTOKEN", data?.data?.bearer_token)
}


export function SignOut(dispatch) {
  dispatch(addData({}))
  AsyncStorage.removeItem("APPTOKEN")
}


export function Session(user) {
  const session = {
    status: '',
    user
  }
  
  if (Object?.keys(user).length !== 0) {
    session.status = verifyJWT(user?.value?.bearer_token)
  } else {
    session.status = 'unauthenticated'
  }
  return session
}

export function verifyJWT(jwtToken) {
  if (jwtToken) {
    return 'authenticated'
  } else {
    return 'unauthenticated'
  }
}






