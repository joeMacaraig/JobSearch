import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../utils";
const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity className="flex-row mb-2 p-2 items-center bg-white shadow-sm" onPress={handleNavigate}>
      <TouchableOpacity className="w-16 h-16 justify-center">
        <Image
          className="h-[70%] w-[70%]"
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
        />
      </TouchableOpacity>

      <View className="flex-1 space-y-1">
        <Text className="text-lg font-bold" numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text className="text-gray-400 capitalize">
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
