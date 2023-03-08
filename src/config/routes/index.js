import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useAppSelector } from '../../store/hooks';
/* Pages */
import { ProtectedRoutes } from "./protectedRoutes";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import Activation from "../../pages/activation/activation";
/* Global components */
import Protected from '../../components/layout/protected';
import MainPrivate from "../../components/layout/main/mainPrivate";
import MainPublic from "../../components/layout/main/mainPublic";

/* Element pages */
function LoginPage() {return <MainPublic><Login/></MainPublic>};
function RegisterPage() {return <MainPublic><Register/></MainPublic>};
function ActivationPage() {return <MainPublic><Activation/></MainPublic>};
function ProtectedPages() {return <Protected><MainPrivate><ProtectedRoutes/></MainPrivate></Protected>};

const App = () => {
  const {userData} = useAppSelector((state) => state.users);
    return (
      <Router>
          <Routes>
            <Route exact path="/activation/:id/:code" element={<ActivationPage />}/>
            <Route exact path="/register" element={<RegisterPage />}/>
            <Route exact path="/login" element={<LoginPage />}/>
            {userData.id && <Route exact path="/*" element={<ProtectedPages />}/>}
          </Routes>
      </Router>
    );
  }
  
  export default App;