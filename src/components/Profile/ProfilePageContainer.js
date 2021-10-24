import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileActionCreator } from "../../redux/loginReducer";

let mapStateToProps = (state) => {
  return {
    profile: state.login.profile,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => {
      dispatch(getProfileActionCreator());
    },
  };
};

const ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfilePageContainer;
