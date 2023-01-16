import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

type SettingContextProps = {
  isEnableNotification: boolean;
  toggleEnableNotification: () => void;
  isEnableSound: boolean;
  toggleEnableSound: () => void;
};

type SettingProviderProps = {
  children?: JSX.Element;
};

const settingContext = createContext<SettingContextProps>({
  isEnableNotification: true,
  toggleEnableNotification: () => {},
  isEnableSound: true,
  toggleEnableSound: () => {},
});

const SettingProvider: React.FC<SettingProviderProps> = ({ children }) => {
  const { isOpen: isEnableNotification, onToggle: toggleEnableNotification } =
    useDisclosure({ defaultIsOpen: true });
  const { isOpen: isEnableSound, onToggle: toggleEnableSound } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <settingContext.Provider
      value={{
        isEnableNotification,
        toggleEnableNotification,
        isEnableSound,
        toggleEnableSound,
      }}
    >
      {children}
    </settingContext.Provider>
  );
};

const useSettingContext = () => useContext(settingContext);

export { SettingProvider, useSettingContext };
