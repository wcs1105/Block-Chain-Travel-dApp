import * as React from "react";
import * as Location from 'expo-location';
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  View,
  TextInput,
  ToastAndroid,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapView, { Marker, Circle } from "react-native-maps";
import ViewPager from "@react-native-community/viewpager";
import Constants from "expo-constants";
import * as Facebook from "expo-facebook";
const axios = require("axios");

const showToastWithGravity = () => {
  ToastAndroid.showWithGravity(
    "회원가입 성공",
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM
  );
};

const showToast = () => {
  ToastAndroid.show("로그인 성공", ToastAndroid.SHORT);
};

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>대구의 모든것!</Text>
      <Image
        style={styles.tinyLogo1}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Button title="로그인" onPress={() => navigation.navigate("Login")} />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate("Register")}
      />

      {/* <Button title="리스트" onPress={() => navigation.navigate("List")} /> */}
      <Button
        title="테스트1"
        onPress={() => {
          axios.get("http://13.124.69.248:9001/").then((res) => {

            console.log("response", JSON.stringify(res.data));
          });
        }}
      />
      <Button
        title="테스트2"
        onPress={() => {
          axios.post("http://13.124.69.248:9001/test", {
              name: "hawi",
            })
            .then((res) => {
              console.log("response", JSON.stringify(res.data));
            });
        }}
      />
    </View>
  );
}

function LoginScreen({ navigation }) {
  const [isLoggedin, setLoggedinStatus] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  async function facebookLogIn() {
    try {
      await Facebook.initializeAsync("485358359272518");
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
        )
          .then((response) => {response.json();
          
          })
          .then((data) => {
            setLoggedinStatus(true);
            setUserData(data);
            navigation.navigate("List")
          })
          .catch((e) => console.log(e));
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="아이디" style={styles.textinput} />
      <TextInput placeholder="비밀번호" style={styles.textinput} />
      {/*
      <Button
        title="로그인"
        onPress={() => showToast(navigation.navigate("Main"))}
      />
      */}
      {isLoggedin ? (
        userData ? (
          <View style={{}}>

            <Text style={{ fontSize: 22, marginVertical: 10 }}>
              Hi {userData.name}!
            </Text>

          </View>
        ) : null
      ) : (
        <View style={{}}>
          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 50,
              marginVertical: 20,
            }}
          />

          <Button
            title="로그인"
            onPress={() => showToast(navigation.navigate("List"))}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#4267b2",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
            }}
            onPress={facebookLogIn}
            // onPress={() => showToast(navigation.navigate("List"))}
          >
            <Text style={{ color: "#fff" }}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="아이디" style={styles.textinput} />
      <TextInput placeholder="비밀번호" style={styles.textinput} />

      <TextInput placeholder="이름" style={styles.textinput} />
      <Button
        title="회원가입"
        onPress={() => showToastWithGravity(navigation.navigate("Home"))}
      />
    </View>
  );
}

function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{ height: 113 }}></View>
        <ListItem navigation={navigation}/>
        <ListItem navigation={navigation}/>
      </ScrollView>
      <View
        style={{
          height: 113,
          position: "absolute",
          backgroundColor: "#ffffff",
          width: "100%",
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: 48,
            left: 24,
            fontSize: 24,
            lineHeight: 35,
            color: "#202020",
            fontWeight: "bold",
          }}
        >
          오늘의 여행
        </Text>
      </View>
    </View>
  );
}

function ListItem({navigation}) {
  return (
    
    <View>
      
      <ViewPager
        style={{
          width: "100%",
          height: 176,
        }}
        initialPage={0}
      >   
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          key="1"
        >
        <TouchableOpacity onPress={()=> 
        (navigation.navigate("Main"))
        }
        > 
          <Image
            style={{
              flex: 1,
              resizeMode: "contain",
              borderRadius: 8,
             
            }}
            source={require("./image/trainstaion.png")}
          ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          key="2"
        >
        <TouchableOpacity onPress={()=> 
        (navigation.navigate("Main"))
        }
        > 
          <Image
            style={{
              flex: 1,
              resizeMode: "contain",
              borderRadius: 8,
            }}
            source={require("./image/Giri.png")}
          ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          key="3"
        >
        <TouchableOpacity onPress={()=> 
        (navigation.navigate("Main"))
        }
        > 
          <Image
            style={{
              flex: 1,
              resizeMode: "contain",
              borderRadius: 8,
            }}
            source={require("./image/SparkLand.png")}
          ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          key="4"
        >
        <TouchableOpacity onPress={()=> 
        (navigation.navigate("Main"))
        }
        > 
          <Image
            style={{
              flex: 1,
              resizeMode: "contain",
              borderRadius: 8,
            }}
            source={require("./image/Suseong.png")}
          ></Image>
          </TouchableOpacity>
        </View>
      </ViewPager>
    
      <TouchableOpacity onPress={()=> {
        (navigation.navigate("Main"))
      }}>
        <Text
          style={{
            color: "#000000",
            fontSize: 18,
            lineHeight: 26,
            fontWeight: "500",
            marginLeft: 24,
          }}
        >
          제목
      </Text> 
      </TouchableOpacity>

    </View>
  );
}
// 우창수 시작
function MainScreen({ navigation }) {
  const data = [
    {
      name: "땡땡카페",
      desc: "설명1",
      image: require("./image/trainstaion.png"),
      image2: require("./image/Vector.png"),
      marker: { latitude: 35.877461, longitude: 128.627508 },
    },
    {
      name: "땡땡음식점",
      desc: "설명2",
      image: require("./image/Suseong.png"),
      image2: require("./image/Vector.png"),
      marker: { latitude: 35.828048, longitude: 128.61755 },
    },
    {
      name: "땡땡전시",
      desc: "설명3",
      image: require("./image/Giri.png"),
      image2: require("./image/Vector.png"),
      marker: { latitude: 35.857201, longitude: 128.633173 },
    },
    {
      name: "땡땡사",
      desc: "설명4",
      image: require("./image/SparkLand.png"),
      marker: { latitude: 35.86948, longitude: 128.598638 },
      
    },
  ];

  let mapRef;

  let nowIdx = 1;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={{}}>
        <View style={{ height: 250 }}></View>
        {data.map((val, idx) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(idx);
                mapRef.animateCamera({
                  center: val.marker,
                });
                axios.post("http://13.124.69.248:9001/place",{
                  name: idx
                });
              }}
            >
              <MapData data={val} nowIdx={nowIdx} idx={idx + 1} key={idx} />
            </TouchableOpacity>
          ); 
        })}

        <View>

        <TouchableOpacity
         onPress={() => {Alert.alert('hello')}}
        >
          <View
            style={{
              width:254,
              height:48,
              left: 82,
              
              borderRadius: 8,
              backgroundColor: "#4565D5",
            }}>
            <Text
            style={{
               textAlign: "center",
               color: "white",
               top: 14,
               fontSize: 14 
            }}>여행 시작하기</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {Alert.alert('hi')}}
        >
          <View
            style={{
              width:48,
              height:48,
              left:24,
              borderRadius: 8,
              backgroundColor: "#FFFFFF",
              solid:"#4565D4",
            }}>
            <Text>aaaaaaaa</Text>
          </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
      
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height: 240,
          left: 0,
          top: 0,
          position: "absolute",
        }}
        initialRegion={{
          latitude: 35.865612, //위도
          longitude: 128.593278, //경도
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={(map) => {
          mapRef = map;
        }}
      >
        <Circle
          center={data[nowIdx].marker}
          radius={1000}
          fillColor={"rgba(255,0,0,0.4)"}
          strokeColor={"rgba(0,0,0,0)"}
        />
        {data.map((val, idx) => {
          return (
            <Marker
              coordinate={val.marker}
              image={require("./image/blue2.png")}
              key={idx}
            />
          );
        })}
      </MapView>
    </View>
  );
}

function MapData({ data, idx, nowIdx }) {
  return (
    <View>
      {idx !== nowIdx && (
        <View
          style={{
            width: 24,
            height: 24,
            left: 12,
            borderRadius: 12,
            backgroundColor: "#4565D4",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}//반복문 2번~ 4번
        >
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 24,
              fontSize: 13,
            }}//반복문 텍스트 2번~ 4번
          >
            {idx}
          </Text>
        </View>
      )}
      {idx == nowIdx && (
        <View
          style={{
            width: 24,
            height: 24,
            left: 12,
            borderRadius: 12,
            borderColor: "#4565D4",
            borderWidth: 1,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}//1번 동그라미
        >
          <Text
            style={{
              color: "#4565D4",
              textAlign: "center",
              lineHeight: 24,
              fontSize: 13,
            }}//1번 동그라미 안의 숫자
          >
            {idx}
          </Text>
        </View>
      )}

      <Image
        style={{
          position: "absolute",
          left: 60,
          width: 95,
          height: 95,
          borderRadius: 8,
          resizeMode: "cover",
        }}
        source={data.image}//사진
      />
      <Image
        style={{
          position : "absolute",
          width: 1,
          height: 89.5,
          left: 23,
          top: 22.5,
        }}
        source={data.image2}//숫자 밑의 실선
      />
      <View style={{ marginLeft: 168, minHeight: 113 }}>
        <Text
          style={{ //땡땡 음식점
            color: "#000000",
            fontSize: 18,
            lineHeight: 26,
            fontWeight: "500",
            marginBottom: 6,
          }}
        >
          {data.name}
        </Text>
        <Text
          style={{ //설명 
            color: "#8b8b8b",
            fontSize: 13,
            lineHeight: 17,
            fontWeight: "500",
          }}
        >
          {data.desc}
        </Text>
      </View>
    </View>
  );
}

// function MainScreen1({ navigation }) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "flex-start",
//         justifyContent: "flex-start",
//       }}
//     >
//       <MapView
//         style={{
//           width: Dimensions.get("window").width,
//           height: 240,
//           left: 0,
//           top: 0,
//           position: "absolute",
//         }}
//         initialRegion={{
//           latitude: 35.865612, //위도
//           longitude: 128.593278, //경도
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: 35.877461, longitude: 128.627508 }}
//           image={require("./image/blue2.png")}
//           title="1"
//           description="1"
//         />

//         <Marker
//           coordinate={{ latitude: 35.828048, longitude: 128.61755 }}
//           image={require("./image/blue2.png")}
//         />

//         <Marker
//           coordinate={{ latitude: 35.857201, longitude: 128.633173 }}
//           image={require("./image/blue2.png")}
//         />

//         <Marker
//           coordinate={{ latitude: 35.86948, longitude: 128.598638 }}
//           image={require("./image/blue2.png")}
//         />
//       </MapView>

//       <SafeAreaView style={styles.container}>
//         <ScrollView style={{ width: Dimensions.get("window").width }}>
//           <View
//             style={{
//               position: "absolute",
//               width: 254,
//               height: 48,
//               left: 82,
//               top: 485,
//               backgroundColor: "#ff0000",
//               borderRadius: 8,
//             }}
//             onPress={() => {console.log("hawi")}}
//           >
//           <TouchableOpacity style={{flex:1}}>
//           <Text
//               style={{
//                 position: "absolute",
//                 color: "white",
//                 left: 86,
//                 height: 20,
//                 width: 81,
//                 top: 14,
//               }}
//             >
//               {" "}
//               여행 시작하기{" "}
//             </Text>
//           </TouchableOpacity>
            
//           </View>

//           <Image
//             style={{
//               position: "absolute",
//               width: 24,
//               height: 24,
//               left: 24,
//               top: 25,
//             }}
//             source={require("./image/blue1.png")}
//           />

//           <Image style={styles.white1} source={require("./image/white1.png")} />

//           <Image style={styles.white2} source={require("./image/white1.png")} />

//           <Image style={styles.white3} source={require("./image/white1.png")} />

//           <Image
//             style={styles.smallsquare}
//             source={require("./image/smallsquare.png")}
//           />

//           {/*<Image  
//         style={styles.bigsquare}
//           source={require('./image/bigsquare.png')}
//         />*/}
//           <Image style={styles.heart} source={require("./image/heart.png")} />

//           <Image
//             style={styles.trainstaion}
//             source={require("./image/trainstaion.png")}
//           />

//           <Image style={styles.Giri} source={require("./image/Giri.png")} />

//           <Image
//             style={styles.SparkLand}
//             source={require("./image/SparkLand.png")}
//           />

//           <Image
//             style={styles.Suseong}
//             source={require("./image/Suseong.png")}
//           />

//           <Image
//             style={styles.Vector1}
//             source={require("./image/Vector.png")}
//           />

//           <Image
//             style={styles.Vector2}
//             source={require("./image/Vector.png")}
//           />

//           <Image
//             style={styles.Vector3}
//             source={require("./image/Vector.png")}
//           />

//           <TextInput style={styles.text1}>동대구역</TextInput>
//           <TextInput style={styles.sbtext1}>
//             대구광역시 동구 신암동 동대구로 550
//           </TextInput>
//           <TextInput style={styles.text2}>기리</TextInput>
//           <TextInput style={styles.sbtext2}>
//             대구광역시 수성구 범어동 202-18
//           </TextInput>
//           <TextInput style={styles.text3}>스파크랜드</TextInput>
//           <TextInput style={styles.sbtext3}>대구광역시 중구 공평동</TextInput>
//           <TextInput style={styles.text4}>수성못</TextInput>
//           <TextInput style={styles.sbtext4}>대구광역시 두산동</TextInput>
//           {/*<TextInput style={styles.text5}>
//           여행 시작하기
//         </TextInput>*/}
//           <TextInput style={styles.circletext1}>1</TextInput>
//           <TextInput style={styles.circletext2}>2</TextInput>
//           <TextInput style={styles.circletext3}>3</TextInput>
//           <TextInput style={styles.circletext4}>4</TextInput>
//           <Text style={styles.text}>
//             {"\n"}
//             {"\n"}
//             {"\n"}
//             {"\n"}
//             {"\n"}
//             {"\n"}
//             {"\n"}
//             {"\n"}
//             {"\n"}
//             {"\n"}
//           </Text>
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    margin: 30,
    fontSize: 30,
    fontSize: 20,
    fontWeight: "bold",
  },

  textinput: {
    width: 250,
    marginBottom: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginLeft: 300,
  },
  tinyLogo1: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    marginTop: 240, //위 공백
  },
  scrollView: {
    marginHorizontal: 10, //글자 옆 공백
  },
  text: {
    fontSize: 42,
  },

  white1: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 24,
    top: 138,
  },
  white2: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 24,
    top: 251,
  },
  white3: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 24,
    top: 366,
  },
  smallsquare: {
    position: "absolute",
    width: 48,
    height: 48,
    left: 15,
    top: 485,
  },
  bigsquare: {
    position: "absolute",
    width: 254,
    height: 57,
    left: 82,
    top: 485,
  },
  heart: {
    position: "absolute",
    left: "7.5%",
    right: "29.95%",
    top: "90%",
    bottom: "-20%",
  },
  trainstaion: {
    position: "absolute",
    width: 95,
    height: 95,
    left: 60,
    top: 25,
    borderRadius: 10,
  },
  Giri: {
    position: "absolute",
    width: 95,
    height: 95,
    left: 60,
    top: 138,
    borderRadius: 10,
  },
  SparkLand: {
    position: "absolute",
    width: 95,
    height: 95,
    left: 60,
    top: 251,
    borderRadius: 10,
  },
  Suseong: {
    position: "absolute",
    width: 95,
    height: 95,
    left: 60,
    top: 366,
    borderRadius: 10,
  },
  text1: {
    position: "absolute",
    fontSize: 18,
    width: Dimensions.get("window").width,
    height: 26,
    left: 168,
    top: 24,
  },
  sbtext1: {
    position: "absolute",
    fontSize: 13,
    width: Dimensions.get("window").width,
    height: 34,
    left: 168,
    top: 56,
  },
  text2: {
    position: "absolute",
    fontSize: 18,
    width: Dimensions.get("window").width,
    height: 26,
    left: 168,
    top: 134,
  },
  sbtext2: {
    position: "absolute",
    fontSize: 13,
    width: Dimensions.get("window").width,
    height: 34,
    left: 168,
    top: 169,
  },
  text3: {
    position: "absolute",
    fontSize: 18,
    width: Dimensions.get("window").width,
    height: 26,
    left: 168,
    top: 250,
  },
  sbtext3: {
    position: "absolute",
    fontSize: 13,
    width: Dimensions.get("window").width,
    height: 34,
    left: 168,
    top: 282,
  },
  text4: {
    position: "absolute",
    fontSize: 18,
    width: Dimensions.get("window").width,
    height: 26,
    left: 168,
    top: 365,
  },
  sbtext4: {
    position: "absolute",
    fontSize: 13,
    width: Dimensions.get("window").width,
    height: 34,
    left: 168,
    top: 397,
  },
  text5: {
    position: "absolute",
    fontSize: 14,
    width: Dimensions.get("window").width,
    height: 20,
    left: 169,
    top: 499,
    color: "white",
  },
  circletext1: {
    position: "absolute",
    fontSize: 13,
    width: 8,
    height: 19,
    left: 32,
    top: 27,
    color: "white",
  },
  circletext2: {
    position: "absolute",
    fontSize: 13,
    width: 8,
    height: 19,
    left: 32,
    top: 140,
    color: "blue",
  },
  circletext3: {
    position: "absolute",
    fontSize: 13,
    width: 8,
    height: 19,
    left: 32,
    top: 253,
    color: "blue",
  },
  circletext4: {
    position: "absolute",
    fontSize: 13,
    width: 8,
    height: 19,
    left: 32,
    top: 368,
    color: "blue",
  },
  Vector1: {
    position: "absolute",
    width: 1,
    height: 89.5,
    left: 36,
    top: 49,
  },
  Vector2: {
    position: "absolute",
    width: 1,
    height: 88.5,
    left: 36,
    top: 162,
  },
  Vector3: {
    position: "absolute",
    width: 1,
    height: 89.5,
    left: 36,
    top: 275,
  },
  first: {
    position: "absolute",
    width: 254,
    height: 48,
    left: 82,
    top: 485,
    backgroundColor: "black",
    borderRadius: 8,
  },
});

export default App;
