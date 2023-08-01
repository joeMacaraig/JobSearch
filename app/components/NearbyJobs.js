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
import NearbyJobCard from "./cards/NearbyJobCard";
import useFetch from "../../hooks/useFetch";

const NearbyJobs = () => {
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  return (
    <View>
      {/* Header */}
      <View className="my-4 mx-4 pb-2 mb-2 flex-row justify-between items-center">
        <Text className="text-lg font-semibold">Nearby Jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              handleNavigate={() => 
                navigation.navigate("Details", {id: job?.job_id})}
              key={`nearby-job-${job?.job_id}`}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
