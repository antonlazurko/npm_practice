import shortid from 'shortid';
const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};
const fetchUsersById = () => {
  console.log('fetchUsersById');
};
const updateUsersById = () => {
  console.log('updateUsersById');
};
const x = 5;
export default { fetchAllUsers, fetchUsersById, updateUsersById, x };
export const addUser = name => {
  const user = { id: shortid.generate(), name };
  console.log(user);
};
