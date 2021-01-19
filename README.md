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
Daemo에서는 We에서 만든 어플의 형태를 기반으로 Solidity를 통해 Smart Contract를 구축했습니다.
### We
