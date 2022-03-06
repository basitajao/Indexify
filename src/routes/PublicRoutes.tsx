import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserState } from "../reducers";

interface Props {
  children: any;
}

export const PublicRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useSelector<RootState, UserState>(
    (state) => state.userAuth
  );
  return isAuthenticated === false ? children : "";
};
