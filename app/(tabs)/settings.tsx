import { SafeAreaView, View } from "react-native";
import { ROOT_STYLE } from ".";
import ScreenHeading from "@/components/typography/ScreenHeading";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="border border-white p-4 flex-1">
        <View className="border-b-2 border-white py-4">
          <ScreenHeading>Settings</ScreenHeading>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
