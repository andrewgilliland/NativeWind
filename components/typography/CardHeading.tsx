import { FC } from "react";
import { Text } from "react-native";

type CardHeadingProps = {
  children: React.ReactNode;
};

const CardHeading: FC<CardHeadingProps> = ({ children }) => (
  <Text className="font-semibold text-white text-2xl">{children}</Text>
);
export default CardHeading;
