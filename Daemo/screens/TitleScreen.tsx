import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { deviceWidth } from "../helpers/UtilHelper";

class TitleScreen extends React.Component<any> {
  render() {
    const { insets } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
        <View
          style={{
            flex: 1,
            width: "100%",
            maxWidth: deviceWidth,
            margin: "auto",
            position: "relative",
          }}
        >
          <Text
            style={{
              marginTop: 162,
              fontWeight: "bold",
              fontSize: 64,
              lineHeight: 96,
              textAlign: "center",
              color: "#000000",
            }}
          >
            대구의{"\n"}모든 것
          </Text>
          <TouchableOpacity
            style={{
              marginLeft: 24,
              marginRight: 24,
              width: deviceWidth - 48,
              height: 48,
              backgroundColor: "#4565d5",
              position: "absolute",
              bottom: 56,
              borderRadius: 8,
              justifyContent: "center",
            }}
            onPress={() => {
              this.props.navigation.navigate("Info");
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 20,
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              시작하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default function (props: any) {
  const insets = useSafeAreaInsets();
  return <TitleScreen {...props} insets={insets} />;
}
