import { Picker } from "@react-native-community/picker";
import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { deviceWidth } from "../helpers/UtilHelper";

class InfoScreen extends React.Component<any> {
  state = {
    sex: "m",
    age: "10대",
    theme: [0, 0, 0, 0],
  };
  themeText = ["먹거리", "볼거리", "활동적", "경치가 좋은"];
  render() {
    const { insets } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
        <ScrollView
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
              marginLeft: 24,
              marginTop: 48,
              marginBottom: 24,
              fontWeight: "bold",
              fontSize: 24,
              lineHeight: 35,
              color: "#202020",
            }}
          >
            여행자 정보
          </Text>
          <View
            style={{
              flex: 1,
              marginLeft: 24,
              marginRight: 24,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                lineHeight: 20,
                color: "#000000",
                marginBottom: 8,
              }}
            >
              성별
            </Text>
            <View
              style={{
                height: 48,
                position: "relative",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "50%",
                  height: 48,
                  borderWidth: 2,
                  borderColor: "#4565d4",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    this.state.sex === "m" ? "#4565D5" : "#fbfbfb",
                }}
                onPress={() => {
                  this.setState({
                    sex: "m",
                  });
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 20,
                    color: this.state.sex === "m" ? "#ffffff" : "#6c6c6c",
                  }}
                >
                  남성
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "50%",
                  height: 48,
                  borderWidth: 2,
                  borderColor: "#4565d4",
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    this.state.sex === "f" ? "#4565D5" : "#fbfbfb",
                }}
                onPress={() => {
                  this.setState({
                    sex: "f",
                  });
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 20,
                    color: this.state.sex === "f" ? "#ffffff" : "#6c6c6c",
                  }}
                >
                  여성
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 24,
              marginRight: 24,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                lineHeight: 20,
                color: "#000000",
                marginBottom: 8,
              }}
            >
              나이
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderWidth: 2,
                borderColor: "#4565d4",
                borderRadius: 8,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Picker
                selectedValue={this.state.age}
                style={{
                  flex: 1,
                }}
                itemStyle={{
                  color: "#282828",
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,
                }}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ age: itemValue });
                }}
              >
                <Picker.Item label="10대" value="10대" />
                <Picker.Item label="20대" value="20대" />
                <Picker.Item label="30대" value="30대" />
                <Picker.Item label="40대" value="40대" />
                <Picker.Item label="50대~" value="50대~" />
              </Picker>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 24,
              marginRight: 24,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                lineHeight: 20,
                color: "#000000",
                marginBottom: 8,
              }}
            >
              선호 여행 테마
            </Text>
            <View
              style={{
                position: "relative",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {[0, 1, 2, 3].map((val, idx) => {
                return (
                  <TouchableOpacity
                    key={idx}
                    style={{
                      marginRight: 16,
                      marginBottom: 12,
                      height: 48,
                      borderWidth: 2,
                      borderColor: "#4565d4",
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:
                        this.state.theme[val] === 1 ? "#4565D5" : "#fbfbfb",
                    }}
                    onPress={() => {
                      let theme = this.state.theme;
                      theme[val] ^= 1;
                      this.setState({
                        theme,
                      });
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: 32,
                        marginRight: 32,
                        fontWeight: "500",
                        fontSize: 14,
                        lineHeight: 20,
                        color:
                          this.state.theme[val] === 1 ? "#ffffff" : "#6c6c6c",
                      }}
                    >
                      {this.themeText[val]}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            width: "100%",
            height: 64,
            position: "absolute",
            bottom: 0,
          }}
        >
          <TouchableOpacity
            style={{
              width: deviceWidth - 48,
              height: 48,
              backgroundColor: "#4565d5",
              borderRadius: 8,
              justifyContent: "center",
              margin: "auto",
              marginBottom: 16,
            }}
            onPress={() => {
              this.props.navigation.navigate("TripList");
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
              여행 둘러보기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default function (props: any) {
  const insets = useSafeAreaInsets();
  return <InfoScreen {...props} insets={insets} />;
}
