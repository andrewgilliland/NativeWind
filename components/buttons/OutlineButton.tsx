import { FC } from "react";
import { Pressable, Text } from "react-native";

type OutlineButtonProps = {
  /* The text to display on the button. */
  title: string;
};

/* The button that reminds you of the days of ole. */
const OutlineButton: FC<OutlineButtonProps> = ({ title }) => {
  return (
    <Pressable className="border-2 border-white px-6 py-3 rounded-md active:scale-95 transition-transform">
      <Text className="font-semibold text-white text-2xl">{title}</Text>
    </Pressable>
  );
};

export default OutlineButton;
