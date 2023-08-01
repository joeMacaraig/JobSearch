import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
//icons
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

//components

const jobTypes = ["Full-time", "Part-time", "Contractor", "Internship"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);
  return (
    <View className="">
      <View className="pb-4 mx-4 px-2">
        <Text className="font-light text-gray-500">Welcome to JobSearch</Text>
        <Text className="font-bold text-xl">Find Your Dream Job Today!</Text>
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-2">
        <View className="flex-row flex-1 space-x-2 bg-slate-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder="What jobs are you looking for?" />
        </View>
        <AdjustmentsVerticalIcon color="#9333ea" />
      </View>
      <View>
        <FlatList
          className="mx-4 px-2 pb-2 "
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="px-4 py-2 border border-gray-500 mr-2 rounded-full full"
              onPress={() => {}}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
