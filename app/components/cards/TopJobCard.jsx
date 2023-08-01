import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../utils";
const TopJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity className="h-46 w-64 mr-4 mb-4 rounded-lg p-4 bg-white shadow-sm">
      <TouchableOpacity className="w-16 h-16">
        <Image
          className="h-[70%] w-[70%]"
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
        />
      </TouchableOpacity>
      <Text className="text-gray-400 pb-4" numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View>
        <Text className="text-lg font-bold pb-2" numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text className="text-xs text-gray-500">{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopJobCard;
