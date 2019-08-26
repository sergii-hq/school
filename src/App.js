import React from "react";
import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";
import {createStore} from 'redux';
import rootReducer from "./store/reducers";
import {Provider} from 'react-redux'

const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="wrapper">
                    <h1>Complex State</h1>
                    <div className="forms">
                        <AuthContainer/>
                        <RegistrationContainer/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
