import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
export const deviceWidth = windowWidth > 414 ? 414 : windowWidth;
