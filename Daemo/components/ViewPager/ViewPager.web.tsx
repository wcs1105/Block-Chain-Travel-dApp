/* eslint-disable */
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { ScrollView, View } from "react-native";

const ViewPager = ({ children, ref, style, onLayout, horizontal = true }) => {
  const scrollView = useRef<ScrollView>(null);

  const dataOrientation =
    horizontal === true
      ? { "data-snap-container-vertical": true }
      : { "data-snap-container-horizontal": true };

  useImperativeHandle(ref, () => ({
    setPage: () => {
      console.log(`set page`);
    },
    snapToItem: () => {
      scrollView.current.scrollToEnd();
    },
  }));

  const [hasUpdated, setUpdated] = useState(false);

  useEffect(() => {
    if (!hasUpdated) {
      scrollView.current.scrollToEnd();
      setUpdated(true);
    }
  }, [hasUpdated, setUpdated]);

  const elmts = React.Children.toArray(children);

  return (
    <ScrollView
      style={style}
      contentContainerStyle={{ flex: 1 }}
      horizontal={horizontal}
      nestedScrollEnabled
      onLayout={onLayout}
      //{...dataOrientation}
      ref={scrollView}
    >
      {elmts.map((el) => (
        <View
          key={el.key}
          style={{ height: `100%`, width: `100%` }}
          data-snap-child
        >
          {el}
        </View>
      ))}
    </ScrollView>
  );
};

export default ViewPager;
