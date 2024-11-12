import { SafeAreaView, Text, View } from "react-native";
import { ROOT_STYLE } from "./(tabs)";
import { Link } from "expo-router";
import BootStrapButton from "@/components/buttons/BootStrapButton";

const ButtonsScreen = () => {
  const buttons = [<BootStrapButton />];

  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="border border-white p-4 flex-1">
        <View className="flex-row justify-between items-center border-b-2 border-white py-4">
          <Text className="font-black text-white text-4xl">Buttons</Text>
          <Link
            className="border-2 border-white px-4 py-2 rounded-md"
            href="/(tabs)/components"
          >
            <Text className="font-semibold text-white text-xl">Go Back</Text>
          </Link>
        </View>
        {buttons.map((button) => (
          <View className="flex-row justify-center items-center border border-white p-4 mt-2">
            {button}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ButtonsScreen;
