import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import ViewPager from "../components/ViewPager";
import { trips } from "../helpers/TripHelper";
import { deviceWidth } from "../helpers/UtilHelper";

class TripDetailScreen extends React.Component<any> {
  image = require("../assets/imgs/1.jpg");
  state: any = {
    tripIdx: 0,
    trip: {
      name: "제목1",
      desc: "설명1",
      images: [this.image],
      tags: ["#재밌는", "#풍경이 멋있는", "#동선이 쉬운"],
      detail: [
        {
          name: "장소1",
          image: this.image,
          desc: "장소설명1",
        },
        {
          name: "장소2",
          image: this.image,
          desc: "장소설명2",
        },
        {
          name: "장소3",
          image: this.image,
          desc: "장소설명3",
        },
        {
          name: "장소4",
          image: this.image,
          desc: "장소설명4",
        },
      ],
    },
  };
  constructor(props: any) {
    super(props);

    let tripIdx = 0;
    try {
      tripIdx = this.props.route.params.tripIdx;
    } catch (e) {}

    this.state.tripIdx = tripIdx;

    this.state.trip = trips[tripIdx];
    console.log(this.state);
  }

  render() {
    const { insets } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
        <ScrollView
          style={{
            flex: 1,
            width: "100%",
            maxWidth: deviceWidth,
            margin: "auto",
            position: "relative",
          }}
        >
          <View
            style={{
              backgroundColor: "#ff0000",
              height: 240,
              marginBottom: 25,
            }}
          >
            <View
              style={{
                width: "100%",
                maxWidth: deviceWidth,
                margin: "auto",
                height: 113,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 18,
                  lineHeight: 26,
                  color: "#202020",
                  position: "absolute",
                  top: 9,
                  left: 24,
                }}
              >
                {this.state.trip.name}
              </Text>
              <TouchableOpacity
                style={{
                  width: 44,
                  height: 44,
                  position: "absolute",
                  top: 0,
                  right: 12,
                }}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <Image
                  style={{
                    width: 44,
                    height: 44,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/imgs/btn_close.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          {this.state.trip.detail.map((tripDetail: any, tripIdx: any) => {
            return (
              <View
                style={{
                  height: 113,
                  position: "relative",
                }}
                key={tripIdx}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    position: "absolute",
                    left: 24,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "#4565d4",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 13,
                      lineHeight: 19,
                      color: "#4565d4",
                    }}
                  >
                    {tripIdx + 1}
                  </Text>
                </View>
                {tripIdx < 3 && (
                  <View
                    style={{
                      position: "absolute",
                      top: 24,
                      left: 36,
                      width: 1,
                      height: 89,
                      borderWidth: 1,
                      borderColor: "#4565d4",
                      borderStyle: "dashed",
                    }}
                  ></View>
                )}

                <Image
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 60,
                    width: 95,
                    height: 95,
                    borderRadius: 8,
                    resizeMode: "cover",
                  }}
                  source={tripDetail.image}
                />
                <Text
                  style={{
                    position: "absolute",
                    left: 168,
                    right: 24,
                    fontWeight: "500",
                    fontSize: 18,
                    lineHeight: 26,
                    color: "#000000",
                  }}
                >
                  {tripDetail.name}
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    left: 168,
                    top: 32,
                    right: 24,
                    fontWeight: "500",
                    fontSize: 13,
                    lineHeight: 16.9,
                    color: "#8b8b8b",
                  }}
                >
                  {tripDetail.desc}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 64,
          }}
        >
          <View
            style={{
              width: "100%",
              maxWidth: deviceWidth,
              height: 64,
              margin: "auto",
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 24,
                bottom: 16,
                borderWidth: 2,
                borderColor: "#4565d4",
                borderRadius: 8,
                width: 48,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 24,
                  height: 25.36,
                  resizeMode: "contain",
                }}
                source={require("../assets/imgs/icn_like0.png")}
              />
            </View>
            <View
              style={{
                position: "absolute",
                left: 82,
                right: 24,
                bottom: 16,
                backgroundColor: "#4565d4",
                borderRadius: 8,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,
                  color: "#ffffff",
                }}
              >
                여행 시작하기
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default function (props: any) {
  const insets = useSafeAreaInsets();
  return <TripDetailScreen {...props} insets={insets} />;
}
