import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage2 } from "../assets";
import * as Animatable from "react-native-animatable";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" flex-1 bg-white relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="color-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[29px] font-bold">
          TẬN HƯỞNG CHUYẾN ĐI
        </Text>
        <Text className="text-[#00BCC9] text-[25px] font-bold">
          THÊM NIỀM VUI
        </Text>
        <Text className="text-[#3C6072] text-base">
          Không cần nhiều lý do để bắt đầu 1 chuyến đi mới. Mọi thứ có khi chỉ
          bắt đầu từ một bộ phim, một bài hát, một bức ảnh…
        </Text>
      </View>

      {/* Circle  */}
      <View className="w-[360px] h-[360px] bg-[#00BCC9]  rounded-full absolute bottom-36 -right-36 mt-3"></View>
      <View className="w-[360px] h-[360px] bg-[#E99265]  rounded-full  absolute -bottom-28 -left-36"></View>
      {/* image container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="bounceIn"
          easing="ease-in-out"
          iterationCount={1}
          className="  w-full h-full mt-20 object-cover "
          source={HeroImage2}
        />

        <View className="items-center justify-center absolute bottom-10 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Discover");
            }}
          >
            <Animatable.View
              animation="pulse"
              easing="ease-in-out"
              iterationCount="infinite"
              className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
            >
              <Text className="text-gray-50 text-[30px] font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
