import { SafeAreaView, View } from "react-native";
import { ROOT_STYLE } from "..";
import { Ionicons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Href, Link } from "expo-router";
import ScreenHeading from "@/components/typography/ScreenHeading";
import CardHeading from "@/components/typography/CardHeading";

const ComponentsScreen = () => {
  const screens: { title: string; href: Href<string | object> }[] = [
    { title: "Buttons", href: "/buttons" },
    { title: "Typography", href: "/typography" },
  ];

  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="border border-white p-4 flex-1">
        <View className="border-b-2 border-white py-4">
          <ScreenHeading>Components</ScreenHeading>
        </View>
        {screens.map(({ title, href }, index) => (
          <Link key={index} href={href} className="border border-white mt-2">
            <View className="flex-row justify-between items-center w-full p-4">
              <CardHeading>{title}</CardHeading>
              <Ionicons
                name="chevron-forward"
                className=""
                size={24}
                color={colors.gray[400]}
              />
            </View>
          </Link>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ComponentsScreen;
