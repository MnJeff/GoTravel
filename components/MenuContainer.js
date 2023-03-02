import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";

const MenuContainer = ({ title, imageSrc, type, setType, name }) => {
  function handlePress() {
    setType(title.toLowerCase());
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="items-center justify-center space-y-2"
    >
      <View
        className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-lg font-semibold">{name}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
