import { RouterProvider, HashRouter } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  );
}

export default App;
