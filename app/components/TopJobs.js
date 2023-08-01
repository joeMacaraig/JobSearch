import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//components
import TopJobCard from "./cards/TopJobCard";
import useFetch from "../../hooks/useFetch";

const TopJobs = () => {
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  return (
    <View>
      {/* Header */}
      <View className="px-4 pb-2 mb-2 flex-row justify-between items-center">
        <Text className="text-lg font-semibold">Top Jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-500">Show all</Text>
        </TouchableOpacity>
      </View>

      {/* Top Jobs */}
      <View className="mx-4">
        {isLoading ? (
          <ActivityIndicator size="large" colors="gray" />
        ) : error ? (
          <Text>Something went wrong... 😔</Text>
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => <TopJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
          />
        )}
      </View>
    </View>
  );
};

export default TopJobs;
