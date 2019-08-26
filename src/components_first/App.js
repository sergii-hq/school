import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionChangeFirstName, actionChangeSecondName} from "../store_first/actions";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={this.props.firstName}
                        onChange={event => {
                            this.props.changeFirstName(event.target.value)
                        }}/>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Second Name"
                        value={this.props.secondName}
                        onChange={event => {
                            this.props.changeSecondName(event.target.value)
                        }}/>
                </div>
                <div>{this.props.firstName + ' ' + this.props.secondName}</div>
            </div>
        );
    }
}

const putStatesToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    }
};

const putActionsToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(actionChangeFirstName, dispatch),
        changeSecondName: bindActionCreators(actionChangeSecondName, dispatch)
    }
};

export default connect(putStatesToProps, putActionsToProps)(App);
