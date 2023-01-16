import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import Friend from "../types/friend";

type DirectContextProps = {
  currentFriend?: Friend;
  setCurrentFriend?: Dispatch<SetStateAction<Friend | undefined>>;
};

type DirectProviderProps = {
  children: JSX.Element;
};

const directContext = createContext<DirectContextProps>({});

const DirectProvider: React.FC<DirectProviderProps> = ({ children }) => {
  const [currentFriend, setCurrentFriend] = useState<Friend | undefined>();
  return (
    <directContext.Provider
      value={{
        currentFriend,
        setCurrentFriend,
      }}
    >
        {children}
    </directContext.Provider>
  );
};

const useDirectContext = () => useContext(directContext);

export { DirectProvider, useDirectContext };
