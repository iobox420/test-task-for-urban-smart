const CHECK_AUTH_DATA = "CHECK-AUTH-DATA";
const GET_PROFILE_DATA = "GET-PROFILE-DATA";

let initialStateLogin = {
  email: "",
  password: "",
  isAuth: false,
  profile: {
    email: "",
    password: "",
  },
};

export const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case CHECK_AUTH_DATA:
      if (
        action.data.email === "developer21" &&
        action.data.password === "123456"
      ) {
        return {
          ...state,
          email: action.data.email,
          password: action.data.password,
          isAuth: true,
        };
      } else {
        return {
          ...state,
          email: action.data.email,
          password: action.data.password,
          isAuth: false,
        };
      }
    case GET_PROFILE_DATA:
      if (state.isAuth === true) {
        return {
          ...state,
          profile: {
            email: state.email,
            password: state.password,
          },
        };
      }
      if (state.isAuth === false) {
        return {
          ...state,
          profile: {
            email: "Пройдите авторизацию",
            password: "",
          },
        };
      }
    default:
      return state;
  }
};

export const checkAuthDataActionCreator = (authData) => ({
  type: CHECK_AUTH_DATA,
  data: authData,
});

export const getProfileActionCreator = () => ({
  type: GET_PROFILE_DATA,
});
