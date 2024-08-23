import './App.css';
import React from "react";
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import InfoTable from "./components/info-table/info-table";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import MainBar from "./components/mainbar/MainBar";

function App() {

    const Layout = () => {
        return (
            <div className={"wrapper"}>
                <div style={{display: "flex"}}>
                    <LeftBar/>
                    <div style={{flex: 6}}>
                        <Outlet/>
                    </div>
                    <RightBar/>
                </div>
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <MainBar/>,
                }
            ]
        }
    ]);

  return (
      <div>
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
