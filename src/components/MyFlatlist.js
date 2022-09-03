import React, {cloneElement, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

const MyFlatlist = props => {
  const {data, loading, onPress, onLongPress, component, onRefresh} = props;

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
                onPress && onPress(data);
              }}
              onLongPress={() => {
                onLongPress && onLongPress(data);
              }}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        extraData={data}
        refreshing={loading}
        onRefresh={() => {
          onRefresh && onRefresh();
        }}
      />
    </SafeAreaView>
  );
};

export default MyFlatlist;
