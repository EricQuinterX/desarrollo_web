export const selectUser = (user) => {
  console.log("Clickeaste el usuario: ", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  };
};