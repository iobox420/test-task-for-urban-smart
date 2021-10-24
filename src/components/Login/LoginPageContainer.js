import {connect} from 'react-redux'

import Login from "./Login"
import {checkAuthDataActionCreator} from "../../redux/loginReducer"

let mapStateToProps = (state) => {
    return {
        state: state,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        login: (authData) => {
            dispatch(checkAuthDataActionCreator(authData))
        },
    }
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginPageContainer
