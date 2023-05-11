import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HabitCreation, HabitCreationForm, HabitPage, Landing} from "@pages/PagesAux.jsx";
import {Provider} from "react-redux";
import {store} from "./Store/Store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={'/'} element={<Landing/>}/>
                <Route path={'/habit/new'} element={<HabitCreation/>}/>
                <Route path={'/habit/new/:category/:name/:icon/:color'} element={<HabitCreationForm/>}/>
                <Route path={'/habit/:id'} element={<HabitPage/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>
)