import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Data from "./component/Data";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoute from './component/PrivateRoute';

import Detail from "./component/Detail";
import Home from "./component/Home";
import Login from "./component/Login";
import publicLayout from "./layout/publicLayout";
import authLayout from "./layout/authLayout";
import ProtectedRoute from "./component/ProtectedRoute";
import GridDesign from "./component/GridDesign";

const pages= [
  {
    exect:true,
    Route:ProtectedRoute,
    path:"/login",
    component:Login,
    layout:publicLayout
  },
  {
    exect:true,
    Route:PrivateRoute,
    path:"/",
    component:Home,
    layout:authLayout
  },
  {
    exect:true,
    Route:PrivateRoute,
    path:"/data",
    component:Data,
    layout:authLayout
  },
  {
    exect:true,
    Route:PrivateRoute,
    path:"/news/:post_id/:slug",
    component:Detail,
    layout:authLayout
  },
  {
    exect:true,
    Route:Route,
    path:"/grid",
    component:GridDesign,
    layout:publicLayout,
  }
]

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
              <Switch>
                {pages.map((i,index)=>(
                  <i.Route
                    key={index}
                    exact={i.exect}
                    path={i.path}
                    // render={props=>(
                    //   <i.layout history={props.history}>
                    //     <i.component {...props}/>
                    //   </i.layout>
                    // )}
                    component={
                      props=>
                      <i.layout history={props.history}>
                        <i.component {...props}/>
                      </i.layout>
                      }
                  />
                ))}

                <Route  render={()=><p>NotFound</p>}/>

                {/* 
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/data" render={() => <Data />} />
                <PrivateRoute exact path="/news/:post_id/:vox" component={Detail} /> 
                */}

              </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
