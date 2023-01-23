import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../utils/atom";

const PublicRouter = () => {
  const authStateValue = useRecoilValue(authState);
  return (
    <div id="main-layout">
      {!authStateValue ? <Outlet /> : <Navigate to={"/direct-message"} />}
    </div>
  );
};

export default PublicRouter;
