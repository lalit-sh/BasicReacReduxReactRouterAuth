import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import "./Scss/App.scss";
import Layout from "./Layout";
import { store, persistor } from "./Redux/store";
import RequireAuth from "./Middleware/RequireAuth";
import AvoidAuth from "./Middleware/AvoidAuth";

import Home from "./Views/Home";
import About from "./Views/About";
import Login from "./Views/Login";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={"...loading"} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            
                            <Route  
                                path="/"
                                element={
                                    <RequireAuth>
                                        <Home />
                                    </RequireAuth>
                                } 
                            />
                            
                            <Route 
                                path="/about"
                                element={
                                    <RequireAuth>
                                        <About />
                                    </RequireAuth>
                                }
                            />

                            <Route
                                path="/login"
                                element={
                                    <AvoidAuth>
                                        <Login />
                                    </AvoidAuth>
                                }
                            />

                        </Route>
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
