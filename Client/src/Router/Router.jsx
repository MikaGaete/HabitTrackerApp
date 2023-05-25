import {Provider} from "react-redux";
import {store} from "../Store/Store.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing, Profile} from "@pages/PagesAux.jsx";
import {HabitCreation} from "@pages/HabitCreation.jsx";
import {HabitCreationForm} from "@pages/HabitCreationForm.jsx";
import {HabitPage} from "@pages/HabitPage.jsx";
import React from "react";

export const Router = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path={'/'} element={<Landing/>}/>
                    <Route path={'/habit/new'} element={<HabitCreation/>}/>
                    <Route path={'/habit/new/:category/:name/:icon/:color'} element={<HabitCreationForm/>}/>
                    <Route path={'/habit/:id'} element={<HabitPage/>}/>
                    <Route path={'/users/profile'} element={<Profile/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}