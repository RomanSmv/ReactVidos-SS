import React, {FC} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initializeAppTC} from "./redux/App-reduce";
import store, {RootStateType} from "./redux/redux-store";
import Preloader from "./common/preloader/Preloader";

type PropsType = any


class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {

        if (!this.props.initializeAppTC) {
            return <Preloader/>
        }


        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>

                <div className={'app-wrapper-content'}>

                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>
                    }
                    />
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>
                    }
                    />
                    <Route path='/users' render={() =>
                        <UsersContainer/>
                    }
                    />

                    <Route path='/login' render={() =>
                        <LoginPage/>
                    }
                    />

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App);

const SamuraiJSApp: FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp