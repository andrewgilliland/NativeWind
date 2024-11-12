import { SafeAreaView, Text, View } from "react-native";
import { ROOT_STYLE } from "./(tabs)";
import { Link } from "expo-router";

import ScreenHeading from "@/components/typography/ScreenHeading";
import CardHeading from "@/components/typography/CardHeading";

const TypographyScreen = () => {
  const typographyComponents = [
    <ScreenHeading>Screen Heading</ScreenHeading>,
    <CardHeading>Card Heading</CardHeading>,
  ];

  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="border border-white p-4 flex-1">
        <View className="flex-row justify-between items-center border-b-2 border-white py-4">
          <ScreenHeading>Typography</ScreenHeading>
          <Link
            className="border-2 border-white px-4 py-2 rounded-md"
            href="/(tabs)/components"
          >
            <Text className="font-semibold text-white text-xl">Go Back</Text>
          </Link>
        </View>
        {typographyComponents.map((component) => (
          <View className="flex-row justify-center items-center border border-white p-4 mt-2">
            {component}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TypographyScreen;
