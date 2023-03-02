import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";

const ItemScreen = ({ route, navigation }) => {
  const [icon, seticon] = useState("bookmark-outline");
  const data = route?.params.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 gb-white relative">
      <StatusBar style="black" />
      <ScrollView className="h-full flex-1 px-4 py-6">
        <View className="relative bg-white">
          <Image
            className="w-full h-[280px] object-cover rounded-lg"
            source={{
              uri: data?.photo?.images?.large?.url
                ? data.photo.images.large.url
                : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
            }}
          />
          <View className="absolute flex-row inset-x-0 top-3 justify-between px-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-12 h-8 shadow-sm shadow-gray-700 rounded-md items-center justify-center bg-white"
            >
              <Ionicons name="arrow-back" size={20} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              delayLongPress={null}
              onPress={() =>
                seticon(
                  icon === "bookmark-outline" ? "bookmark" : "bookmark-outline"
                )
              }
              className="w-12 h-8 shadow-sm shadow-gray-700  rounded-md items-center justify-center bg-[#06B2BE]"
            >
              <Ionicons name={icon} size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View>
              <Text className="shadow-sm  shadow-black text-[20px] font-bold text-gray-100">
                {data?.price?.replace(/\$/g, "")}VND
              </Text>
            </View>
            <View className="px-2 py-1 rounded-md bg-teal-100">
              <Text>{data?.is_closed ? "Mở Cửa" : "Đã Đóng Cửa"}</Text>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <Ionicons name="location" size={24} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>
        <View className="flex-row mt-4 items-center justify-around">
          {data?.rating ? (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <Ionicons name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.rating}</Text>
                <Text className="text-[#515151]">Đánh Giá</Text>
              </View>
            </View>
          ) : (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <Ionicons name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151]">Chưa có đánh giá</Text>
              </View>
            </View>
          )}
          {data?.price_level ? (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <Ionicons name="pricetag" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.price_level}</Text>
                <Text className="text-[#515151]">Mức giá</Text>
              </View>
            </View>
          ) : (
            <>
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <Ionicons name="pricetag" size={24} color="#D58574" />
                </View>
                <View>
                  <Text className="text-[#515151]">Chưa có mức giá</Text>
                </View>
              </View>
            </>
          )}
        </View>
        {data?.description && (
          <Text className=" mt-4 tracking-wide text-[14px] font-semibold text-[#97A6af]">
            Description: {data?.description}
          </Text>
        )}
        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className=" px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View className="space-y-2 mt-4 bg-gray-300 rounded-2xl px-4 py-2">
          {data?.phone && (
            <View className="items-center flex-row space-x-6">
              <Ionicons name="call" size={20} color="#428288" />
              <Text className="text-sm">{data?.phone}</Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center mb-2 flex-row space-x-6">
              <Ionicons name="navigate" size={20} color="#428288" />
              <Text className="text-sm">{data?.address}</Text>
            </View>
          )}
          <View className="mt-5 py-4 px-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
            <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
              ĐẶT NGAY
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
