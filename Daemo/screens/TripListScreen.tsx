import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import ViewPager from "../components/ViewPager";
import { trips } from "../helpers/TripHelper";
import { deviceWidth } from "../helpers/UtilHelper";

class TripListScreen extends React.Component<any> {
  trips = trips;

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
            height: "100%",
            marginTop: 113,
          }}
        >
          {this.trips.map((trip, tripIdx) => {
            return (
              <View
                style={{ marginLeft: 24, marginRight: 24, marginBottom: 32 }}
                key={tripIdx}
              >
                <ViewPager
                  initialPage={0}
                  style={{
                    height: 176 + 50,
                    borderRadius: 8,
                    marginBottom: 15,
                  }}
                >
                  {trip.images.map((image, idx) => {
                    return (
                      <View
                        key={idx}
                        style={{
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          style={{
                            flex: 1,
                            resizeMode: "cover",
                          }}
                          source={image}
                        />
                      </View>
                    );
                  })}
                </ViewPager>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("TripDetail", {
                      tripIdx: tripIdx,
                    });
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 18,
                      lineHeight: 26,
                      color: "#000000",
                      marginBottom: 4,
                    }}
                  >
                    {trip.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 13,
                      lineHeight: 16.9,
                      color: "#8B8B8B",
                      marginBottom: 10,
                    }}
                  >
                    {trip.desc}
                  </Text>
                  <View
                    style={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                    }}
                  >
                    {trip.tags.map((tag, tagIdx) => {
                      return (
                        <View
                          style={{
                            height: 25,
                            backgroundColor: "#ebebeb",
                            borderRadius: 4,
                            justifyContent: "center",
                            marginRight: 12,
                            marginBottom: 8,
                          }}
                          key={tagIdx}
                        >
                          <Text
                            style={{
                              marginLeft: 10,
                              marginRight: 10,
                              fontSize: 13,
                              lineHeight: 16.9,
                            }}
                          >
                            {tag}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
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
              marginLeft: 24,
              marginTop: 48,
              marginBottom: 24,
              fontWeight: "bold",
              fontSize: 24,
              lineHeight: 35,
              color: "#202020",
              position: "absolute"
            }}
          >
            오늘의 여행
          </Text>
          <Image
            style={{
              width: 44,
              height: 44,
              position: "absolute",
              top: 43,
              right: 14,
              resizeMode: "contain",
            }}
            source={require("../assets/imgs/btn_profile.png")}
          />
        </View>
      </View>
    );
  }
}

export default function (props: any) {
  const insets = useSafeAreaInsets();
  return <TripListScreen {...props} insets={insets} />;
}
