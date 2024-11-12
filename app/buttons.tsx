import { SafeAreaView, Text, View } from "react-native";
import { ROOT_STYLE } from "./(tabs)";
import { Link } from "expo-router";
import BootStrapButton from "@/components/buttons/BootStrapButton";
import ScreenHeading from "@/components/typography/ScreenHeading";
import OutlineButton from "@/components/buttons/OutlineButton";

const ButtonsScreen = () => {
  const buttons = [
    <BootStrapButton title="Button" />,
    <OutlineButton title="Outline Button" />,
  ];

  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="border border-white p-4 flex-1">
        <View className="flex-row justify-between items-center border-b-2 border-white py-4">
          <ScreenHeading>Buttons</ScreenHeading>
          <Link
            className="border-2 border-white px-4 py-2 rounded-md"
            href="/(tabs)/components"
          >
            <Text className="font-semibold text-white text-xl">Go Back</Text>
          </Link>
        </View>
        {buttons.map((button, index) => (
          <View
            key={index}
            className="flex-row justify-center items-center border border-white p-4 mt-2"
          >
            {button}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ButtonsScreen;
