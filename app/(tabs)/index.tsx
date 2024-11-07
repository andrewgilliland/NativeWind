import { View, Text, ViewStyle, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ROOT_STYLE: ViewStyle = { flex: 1 };

export default function HomeScreen() {
  const features = [
    {
      title: "Profile Management",
      description:
        "Easily update and manage your personal information, settings, and preferences",
      icon: "account-circle-outline",
    },
    {
      title: "Secure Messaging",
      description: "Chat securely with friends and family in real-time.",
      icon: "message-processing",
    },
    {
      title: "Activity Tracking",
      description:
        "Monitor your daily activities and track your progress over time.",
      icon: "chart-timeline-variant",
    },
  ] as const;

  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="mx-auto max-w-sm flex-1 justify-between px-8 py-4">
        <View className="pt-8">
          <Text className="font-black text-white text-4xl">
            Welcome to your
          </Text>
          <Text className="ios:text-left ios:font-black text-blue-500 text-4xl">
            Application
          </Text>
        </View>

        <View>
          {features.map(({ title, description }, index) => (
            <View
              key={index}
              className="flex-row items-center gap-4 ios:pt-8 pt-4"
            >
              <View className="bg-blue-500 rounded p-3"></View>

              <View className="flex-1">
                <Text className="font-semibold text-white text-lg">
                  {title}
                </Text>
                <Text className="text-gray-400">{description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View className="gap-4">
          <View className="bg-blue-500 w-4 h-4 rounded p-3"></View>
          <Text className="text-white text-xs">
            By pressing continue, you agree to our Terms of Service and that you
            have read our Privacy Policy
          </Text>
          <Pressable className="bg-blue-500 rounded-md active:opacity-75 active:scale-95 transition py-3">
            <Text className="text-white text-center text-lg">Continue</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
