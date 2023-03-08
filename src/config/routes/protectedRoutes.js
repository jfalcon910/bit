import React from "react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useAppSelector } from '../../store/hooks';
import {adminPages} from "../../pages/admin/data";
/* Pages */
import Panel from "../../pages/panel/panel";
import Player from "../../pages/player/player";

/* Pages Admin*/
import PanelAdmin from "../../pages/admin/panel/panelAdmin";
import CategoryAdmin from '../../pages/admin/category/category';
/* Global components */

export const ProtectedRoutes = (props) => {
    const {userData} = useAppSelector((state) => state.users);
    const {isAdmin} = userData;
    return(
        <>
        {
            isAdmin ?
            <Routes>
                <Route exact path="/" element={ <Navigate to="/panel" replace />}/>
                <Route exact path="/panel" element={<PanelAdmin />}/>
                <Route exact path={`/${adminPages[0].path}`} element={<CategoryAdmin />}/>
            </Routes>
            :
            <Routes>
                <Route exact path="/" element={ <Navigate to="/panel" replace />}/>
                <Route exact path="/panel" element={<Panel />}/>
                <Route exact path="/panel/:id" element={<Player />}/>
            </Routes>
        }
        </>
    )
}