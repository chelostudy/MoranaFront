import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./store/store";
import Navbar from "./components/UI/Navbar/Navbar";

const State = {
    store: Store,
}

export const store = new Store();

export const Context = createContext({
    store,
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        store
    }}>
        <App />
    </Context.Provider>
);








