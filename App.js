import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import MainScreen from './MainScreen.js';
import LoginScreen from "./LoginScreen.js";
import RegistrationScreen from "./RegistrationScreen.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" component={MainScreen} exact={true} />
                <LayoutRoute path="/login" component={LoginScreen} exact={true} />
                <LayoutRoute path="/register" component={RegistrationScreen} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;