import { FC } from "react";
import { Pressable, Text } from "react-native";

type BootStrapButtonProps = {
  /* The text to display on the button. */
  title: string;
};

/* The button that reminds you of the days of ole. */
const BootStrapButton: FC<BootStrapButtonProps> = ({ title }) => {
  return (
    <Pressable className="bg-blue-500 px-6 py-3 rounded-md active:scale-95 transition-transform">
      <Text className="font-semibold text-white text-2xl">{title}</Text>
    </Pressable>
  );
};

export default BootStrapButton;
