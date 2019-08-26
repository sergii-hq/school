import React from "react";
import Registration from "./Registration";
import {connect} from "react-redux";
import {setEmailText, setPasswordText, setRepeatPasswordText} from "../store/registration/actions";

class RegistrationContainer extends React.Component {
    render() {
        return (
            <Registration email={this.props.email} password={this.props.password} repeatPassword={this.props.repeatPassword}
                          setEmailText={this.props.setEmailText} setPasswordText={this.props.setPasswordText}
                          setRepeatPasswordText={this.props.setRepeatPasswordText}/>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword
    }
};

const mapActionsToProps = {
    setEmailText: setEmailText,
    setPasswordText: setPasswordText,
    setRepeatPasswordText: setRepeatPasswordText
};

export default connect(mapStatesToProps, mapActionsToProps)(RegistrationContainer);
