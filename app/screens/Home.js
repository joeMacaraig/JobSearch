import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

//icons
import { ListBulletIcon, UserCircleIcon } from "react-native-heroicons/outline";

//components
import Welcome from "../components/Welcome";
import TopJobs from "../components/TopJobs";
import NearbyJobs from "../components/NearbyJobs";
const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row pb-3 items-center justify-between mx-4 px-2 space-x-2">
        <ListBulletIcon color="gray" size={30} />
        <UserCircleIcon color="#9333ea" size={40} />
      </View>
      <ScrollView>
        {/* Welcome */}
        <Welcome navigation={navigation} />
        {/* Popular Jobs */}
        <TopJobs navigation={navigation}/>
        {/* Nearby Jobs */}
        <NearbyJobs navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
