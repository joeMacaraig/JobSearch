import React from "react";
import { View, Text } from "react-native";

//icons

//components&utils
import { checkImageURL } from "../../utils";

const Company = ({ logo, title, name, location }) => {
  return (
    <View>
      {/* image */}
      <View>
        <Image
          source={{
            uri: checkImageURL(logo)
              ? logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
        />
      </View>
      {/* title */}
      <View></View>
    </View>
  );
};

export default Company;
