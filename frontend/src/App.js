import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Data from "./component/Data";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoute from './component/PrivateRoute';
import theme from './component/Theme'

import Detail from "./component/Detail";
import Home from "./component/Home";
import Login from "./component/Login";
import publicLayout from "./layout/publicLayout";
import authLayout from "./layout/authLayout";
import ProtectedRoute from "./component/ProtectedRoute";
import GridDesign from "./component/GridDesign";
import Upwork from "./component/Upwork";
import { ThemeProvider } from "@material-ui/core";
import UpworkLogin from "./component/UpworkLogin";
import UpworkSingUp from "./component/UpworkSingUp";
import LoginPass from "./component/LoginPass";
import LoginHeader from "./component/LoginHeader";
import Dashboard from "./component/Dashboard";
import { date } from "faker";
import JobDetail from "./component/JobDetail";
import JobModal from "./component/JobModal";

const pages= [
  {
    exect:true,
    Route:ProtectedRoute,
    path:"/login",
    component:Login,
    layout:publicLayout
  },
  // {
  //   exect:true,
  //   Route:PrivateRoute,
  //   path:"/",
  //   component:Home,
  //   layout:authLayout
  // },
  // {
  //   exect:true,
  //   Route:PrivateRoute,
  //   path:"/data",
  //   component:Data,
  //   layout:authLayout
  // },
  {
    exect:true,
    Route:PrivateRoute,
    path:"/news/:post_id/:slug",
    component:Detail,
    layout:authLayout
  },
  // {
  //   exect:true,
  //   Route:Route,
  //   path:"/grid",
  //   component:GridDesign,
  //   layout:publicLayout,
  // },
  {
    exect:true,
    Route:ProtectedRoute,
    path:"/",
    component:Upwork,
    layout:publicLayout,
  },
  {
    exect:true,
    Route:ProtectedRoute,
    path:"/ulogin",
    component:UpworkLogin,
    layout:LoginHeader,
  },
  {
    exect:true,
    Route:ProtectedRoute,
    path:"/using",
    component:UpworkSingUp,
    layout:LoginHeader,
  },
  {
    exect:true,
    Route:Route,
    path:"/login/password",
    component:LoginPass,
    layout:publicLayout,
  },
  {
    exect:true,
    Route:PrivateRoute,
    path:"/dashboard",
    component:Dashboard,
    layout:LoginHeader,
  },
  {
    exect:true,
    Route:PrivateRoute,
    path:"/dashboard/detail/~:post_id/:slug",
    component:JobModal,
    layout:LoginHeader,
  },
  {
    exect:true,
    Route:PrivateRoute,
    path:"/job/detail/~:post_id/:slug",
    component:JobDetail,
    layout:LoginHeader,
  }
]

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
              <Switch>
                {pages.map((i,index)=>(
                  <i.Route
                    key={index}
                    exact={i.exect}
                    path={i.path}
                    component={
                      props=>
                      <i.layout history={props.history}>
                        <i.component {...props}/>
                      </i.layout>
                      }
                  />
                ))}
                <Route  render={()=><p>NotFound</p>}/>
              </Switch>
          </Router>
        </PersistGate>
      </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
