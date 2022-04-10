import React from "react";
import RoutesApp from "./routes";
import { Provider } from "react-redux";

import Header from "./components/Header";

import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <RoutesApp />
        </Provider>
    );
}

export default App;
