import { Pressable, Text } from "react-native";

/* The button that reminds you of the days of ole. */
const BootStrapButton = () => {
  return (
    <Pressable className="bg-blue-500 px-6 py-3 rounded-md active:scale-95 transition-transform">
      <Text className="font-semibold text-white text-2xl">Button</Text>
    </Pressable>
  );
};

export default BootStrapButton;
