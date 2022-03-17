import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});


export const fetchUser = (userId) => dispatch => (
  UserAPIUtil.getUser(userId)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
);


export const fetchUsers = () => dispatch => (
  UserAPIUtil.getAllUsers()
    .then(users => dispatch(receiveUsers(users)))
    .catch(err => console.log(err))
);
<<<<<<< HEAD
=======

export const updateUser = user => dispatch => {
  return(
    UserAPIUtil.updateUser(user)
      .then(user => dispatch(receiveUser(user)))
      .catch(err => console.log(err))
  )
}
>>>>>>> b2ccaca0757dadfdaec73c3d393b4a15dd4a6450
