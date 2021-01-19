## First Project
* 한국표준협회에서 3개월간 진행한 팀 프로젝트 입니다.
  * Expo
  * Smart Contract
  
### Daemo
```solidity
pragma solidity ^0.5.16;

contract DaeMo{
 struct Trip{
  uint256 id;
  uint256 step;
  uint256 time;
 }
 
 Trip[] public trips;
 mapping(uint256 => address) tripToOwner;
 mapping(uint256 => uint256) ownerTripCount;
 uint256 allTripCount = 0;
 
 function _createTrip(uint256 tripId, uint256 _time) internal {
  trips.push(Trip(tripId, 0, _time));
  uint256 id = trips.length -1;
  tripToOwner[id] = msg.sender;
  ownerTripCount[msg.sender]++;
  allTripCount++;
```
Daemo에서는 Expo로 구축한 We를 기반으로 Solidity를 통해 Smart Contract를 구축했습니다.

[Solidity 참고자료] (https://cryptozombies.io/ko/)

![ganache](https://user-images.githubusercontent.com/69658489/105055650-a133b400-5ab6-11eb-8625-cb9a22bddfe0.png)

ganache를 이용하여 Smart Contract를 테스트 진행하였습니다.

![truffle](https://user-images.githubusercontent.com/69658489/105055792-c7f1ea80-5ab6-11eb-8a2d-d0cf6a5ea94c.png)

truffle을 이용하여 Smart Contract를 compile 진행하였습니다.

[truffle 참고자료] (https://medium.com/@weekly.teckle/truffle%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-dapp-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1-14a98dc49db2)

### We
```js
import MapView, { Marker, Circle } from "react-native-maps";
//중략
function MainScreen({ navigation }) {
 const data = [
  {
   name: "ㅇㅇ카페",
   desc: "설명1",
   image: require("./"),
   iamge2: require("./"),
   marker: { latitude: , longitude: },
  },
 //중략
 ];
 <View>
  <MapView
   style={{
    width: Dimensions.get("window").width,
    height: ,
    left: ,
    top: ,
    position: "absolute",
   }}
   //중략
  </MapView>
 </View>
```
[참고자료] (https://docs.expo.io/)
