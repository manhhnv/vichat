import { Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import ProtectedRouter from "./ProtectedRouter";
import NotFoundPage from "../pages/NotFound";
import HomePage from "../pages/Home";
import DirectMessagePage from "../pages/DirectMessage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route index key={"home"} path={""} element={<HomePage />} />
      </Route>
      <Route path="/" element={<ProtectedRouter />}>
        <Route
          index
          key={"direct-message"}
          path={"direct-message"}
          element={<DirectMessagePage />}
        />
      </Route>
      <Route index key={"404"} path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
