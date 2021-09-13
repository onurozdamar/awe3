import React, {cloneElement, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

const MyFlatlist = props => {
  const {data, loading, onPressPath, onLongPressPath, navigation, component} =
    props;

  function RenderItem(props) {
    return cloneElement(component, props);
  }

  const [showItems, setShowItems] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        nestedScrollEnabled
        renderItem={data => {
          if (!showItems) {
            return <></>;
          }
          return (
            <RenderItem
              data={data.item}
              onPress={() => {
                if (!onPressPath) {
                  return;
                }
                navigation.navigate(onPressPath, {data: data.item});
              }}
              onLongPress={() => {
                if (!onLongPressPath) {
                  return;
                }
                navigation.navigate(onLongPressPath, {
                  editing: true,
                  data: data.item,
                });
              }}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        extraData={data}
        refreshing={loading}
        onRefresh={() => {}}
      />
    </SafeAreaView>
  );
};

export default MyFlatlist;
