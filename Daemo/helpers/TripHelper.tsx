const images = [
  require("../assets/imgs/trainstaion.png"),
  require("../assets/imgs/Giri.png"),
  require("../assets/imgs/SparkLand.png"),
  require("../assets/imgs/Suseong.png"),
  require("../assets/imgs/kim.png"),
  require("../assets/imgs/gangjeongvo.png"),
  require("../assets/imgs/rabbockgi.png"),
  require("../assets/imgs/eworld.png"),
  require("../assets/imgs/gun.jpg"),
  require("../assets/imgs/flower.jpg"),
  require("../assets/imgs/daegu.jpg"),
  require("../assets/imgs/seomoon.jpg"),
  require("../assets/imgs/gang.jpg"),
  require("../assets/imgs/rose.jpg"),
  require("../assets/imgs/road.jpg"),
  require("../assets/imgs/eeworld.jpg"),
  require("../assets/imgs/mountain.png"),
  require("../assets/imgs/palgong.png"),
  require("../assets/imgs/stardium.png"),
  require("../assets/imgs/eeeworld.png"),
];
export const trips = [
  {
    name: "동성로",
    desc: "동대구역, 기리, 스파크랜드, 수성못",
    images: [images[0], images[1], images[2], images[3]],
    tags: ["#대구", "#동성로", "#수성못"],
    detail: [
      {
        name: "동대구역",
        image: images[0],
        desc: "주소 : 대구광역시 동구 동대구로 550",
      },
      {
        name: "기리",
        image: images[1],
        desc: "주소 : 대구 달서구 조암남로 5 1층",
      },
      {
        name: "스파크랜드",
        image: images[2],
        desc: "주소 : 대구 중구 동성로6길 61",
      },
      {
        name: "수성못",
        image: images[3],
        desc: "주소 : 대구 수성구 두산동 512",
      },
    ],
  },
  {
    name: "놀이공원",
    desc: "김광석거리, 강정보, 라볶이마을, 이월드",
    images: [images[4], images[5], images[6], images[7]],
    tags: ["#김광석거리", "#강정보", "#이월드"],
    detail: [
      {
        name: "김광석거리",
        image: images[4],
        desc: "주소 : 대구 중구 대봉동 6-11",
      },
      {
        name: "강정보",
        image: images[5],
        desc: "주소 : 대구광역시 달성군 다사읍 죽곡리",
      },
      {
        name: "라볶이마을",
        image: images[6],
        desc: "주소 : 대구 달서구 서당로9길 30",
      },
      {
        name: "이월드",
        image: images[7],
        desc: "주소 : 대구 달서구 두류공원로 200",
      },
    ],
  },
  {
    name: "강정고령보",
    desc: "스트레스 풀고 힐링",
    images: [images[8], images[9], images[10], images[11]],
    tags: ["#빵야빵야", "#힐링", "#야시장먹방"],
    detail: [
      {
        name: "대구사격장",
        image: images[8],
        desc: "대구광역시 북구 금호동 문주길 170",
      },
      {
        name: "하중도 유채꽃단지",
        image: images[9],
        desc: "대구광역시 북구 노곡동 681-1",
      },
      {
        name: "대구예술발전소",
        image: images[10],
        desc: "대구광역시 중구 수창동 58-2",
      },
      {
        name: "서문시장",
        image: images[11],
        desc: "대구광역시 중구 대신동 큰장로26길 45",
      },
    ],
  },
  {
    name: "강정고령보",
    desc: "힐링과 액티비티를 밸런스있게",
    images: [images[12], images[13], images[14], images[15]],
    tags: ["#활동적인", "#힐링", "#야경"],
    detail: [
      {
        name: "강정고령보",
        image: images[12],
        desc: " 대구광역시 달성군 다사읍 강정본길 57",
      },
      {
        name: "이곡장미공원",
        image: images[13],
        desc: "대구광역시 달서구 이곡동 1306-6",
      },
      {
        name: "김광석 거리",
        image: images[14],
        desc: "대구광역시 중구 달구벌대로 2238",
      },
      {
        name: "이월드",
        image: images[15],
        desc: "대구광역시 달서구 두류공원로 200",
      },
    ],
  },
  {
    name: "활동적",
    desc: "앞산, 팔공산, 스타디움,이월드",
    images: [images[16], images[17], images[18], images[19]],
    tags: ["#땀뻘뻘", "#재미", "#야경"],
    detail: [
      {
        name: "앞산",
        image: images[16],
        desc: "장소 : 대구광역시 대명9동",
      },
      {
        name: "팔공산",
        image: images[17],
        desc: "장소 : 군위군 부계면",
      },
      {
        name: "대구 스타디움",
        image: images[18],
        desc: "장소 : 대구광역시 수성구 대흥동 504",
      },
      {
        name: "이월드",
        image: images[19],
        desc: "장소 : 대구광역시 달서구 두류동 두류공원로 200",
      },
    ],
  },
];
