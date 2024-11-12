import { Pressable, SafeAreaView, Text, View } from "react-native";
import { ROOT_STYLE } from "./(tabs)";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

const ButtonsScreen = () => {
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
        <View className="flex-row justify-center items-center border border-white p-4 mt-2">
          <Pressable className="bg-blue-500 px-6 py-3 rounded-md">
            <Text className="font-semibold text-white text-2xl">Button</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonsScreen;
