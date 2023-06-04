import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div>

      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
