import React from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import LandingPage from "../Pages/LandingPage/LandingPage";
import Event from "../Pages/Event/Event";
import CreateEvent from "../Pages/CreateEvent/CreateEvent";


export const RouteComponent = () => {
    return (
        <BrowserRouter>
        
        <Routes>
            {/* <Switch> */}
                <Route exact path='/' element={<LandingPage />} />
                <Route path='/event' element={<Event />} />
                <Route path='/create' element={<CreateEvent />}/>
            {/* </Switch> */}
        </Routes>
        </BrowserRouter>
    )
}