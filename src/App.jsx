import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import { RouterProvider, createBrowserRouter } from "react-router";
import Account from "./pages/Account";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/account", element: <Account /> },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
