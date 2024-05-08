import React from 'react';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Client/Home';
const Layout = () => {
    return (
        <>

            <Router>
                <div className="app">
                    <div className="main">
                        <Routes>
                            <Route path="/" element={<App />} >
                                <Route index element={<Home />} />
                            </Route>
                        </Routes>
                    </div>

                </div>
            </Router >

        </>
    )
}

export default Layout;