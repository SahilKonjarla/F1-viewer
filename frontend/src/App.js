import './App.css';
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import MainBar from "./components/mainbar/MainBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
    const Layout = () => {
        return (
            <div className="wrapper">
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <div style={{ flex: 6 }}>
                        <Outlet />
                    </div>
                    <RightBar />
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
                    element: <MainBar />,
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
