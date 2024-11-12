import { SafeAreaView, Text, View } from "react-native";
import { ROOT_STYLE } from "..";
import { Ionicons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

const ComponentsScreen = () => {
  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="border border-white p-4 flex-1">
        <View className="border-b-2 border-white py-4">
          <Text className="font-black text-white text-4xl">Components</Text>
        </View>
        <Link href="/buttons" className="border border-white mt-2">
          <View className="flex-row justify-between items-center w-full p-4">
            <Text className="font-semibold text-white text-2xl">Buttons</Text>
            <Ionicons
              name="chevron-forward"
              className=""
              size={24}
              color={colors.gray[400]}
            />
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default ComponentsScreen;
