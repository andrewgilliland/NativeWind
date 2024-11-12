import { FC } from "react";
import { Text } from "react-native";

type ScreenHeadingProps = {
  children: React.ReactNode;
};

const ScreenHeading: FC<ScreenHeadingProps> = ({ children }) => {
  return <Text className="font-black text-white text-4xl">{children}</Text>;
};

export default ScreenHeading;
