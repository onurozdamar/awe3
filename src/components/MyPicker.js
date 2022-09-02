import React, {cloneElement} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function MyPicker({data, component, label, onChange}) {
  const [showItems, setShowItems] = useState(false);

  function RenderItem(props) {
    return cloneElement(component(props), props);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setShowItems(!showItems);
          }}>
          <Text style={styles.headerText}>{label}</Text>
          <Icon
            name={showItems ? 'sort-up' : 'sort-down'}
            size={25}
            color={'black'}
            style={[styles.icon, {top: showItems ? 5 : -5}]}
          />
        </TouchableOpacity>
      </View>

      {/* Body */}
      {showItems && (
        <View style={styles.body}>
          {data.map((item, index) => (
            <RenderItem
              key={index}
              item={item}
              onPress={() => {
                onChange && onChange(item);
                setShowItems(false);
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
}

export default MyPicker;

const styles = StyleSheet.create({
  container: {marginBottom: 15, flex: 1},
  header: {
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  headerText: {fontSize: 16, padding: 10, fontWeight: 'bold'},
  body: {
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderTopWidth: 0,
    borderBottomWidth: 1,
  },
  icon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
});
