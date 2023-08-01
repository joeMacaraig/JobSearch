import React, { useLayoutEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//icons
import { ArrowLeftIcon, ShareIcon } from "react-native-heroicons/outline";

//components
import useFetch from "../../hooks/useFetch";

const Stack = createNativeStackNavigator();

const JobDetails = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const { data, error, isLoading, refetchData } = useFetch("job-details", {
    job_id: id,
  });
  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle:'',
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftIcon size={25} dimension="60%" color="#9333ea" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
          <ShareIcon dimension="60%" color="#9333ea" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <SafeAreaView className="bg-slate-200 flex-1 items-center justify-center">
      <ScrollView>
      {isLoading ? (
          <ActivityIndicator size="large" colors="gray" />
        ) : error ? (
          <Text>Something went wrong... 😔</Text>
        ) : data.length === 0 ? (<Text>No Job Details 🥲</Text>)
        : (
        <View className="p-4">
            <Text>Hello</Text>
            {/* Job Description */}
            <Company
            logo= {data[0]?.employer_logo}/>
            title= {data[0]?.job_title}
            name= {data[0]?.employer_name}
            location= {data[0]?.job_country}
            {/* Job Tabs */}
            <JobTabs/>
        </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetails;
