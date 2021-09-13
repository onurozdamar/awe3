import React, {cloneElement, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

const MyList = props => {
  const {
    getData,
    reducer,
    hastaneId,
    onPressPath,
    onLongPressPath,
    navigation,
    component,
    headerText,
  } = props;

  const dispatch = useDispatch();

  const data = useSelector(state => state[reducer].data);
  const loading = useSelector(state => state[reducer].loading);

  useEffect(() => {
    if (!navigation) {
      return;
    }
    const willFocusSubscription = navigation.addListener('focus', () => {
      dispatch(getData(hastaneId));
    });

    return willFocusSubscription;
  }, []);

  const [showItems, setShowItems] = useState(true);

  function RenderItem(props) {
    return cloneElement(component, props);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, {display: headerText ? 'flex' : 'none'}]}>
        <TouchableOpacity
          onPress={() => {
            setShowItems(!showItems);
          }}>
          <Text style={styles.headerText}>{headerText}</Text>
          <Icon
            name={showItems ? 'sort-up' : 'sort-down'}
            size={25}
            color={'green'}
            style={[styles.icon, {top: showItems ? 5 : -5}]}
          />
        </TouchableOpacity>
      </View>

      {/* Body */}
      {showItems ? (
        loading ? (
          <View>
            <Text style={{textAlign: 'center'}}>Yükleniyor</Text>
          </View>
        ) : (
          <View style={styles.body}>
            {data.map((item, index) => (
              <RenderItem
                key={index}
                data={item}
                onPress={() => {
                  if (!onPressPath) {
                    return;
                  }
                  navigation.navigate(onPressPath);
                }}
                onLongPress={() => {
                  if (!onLongPressPath) {
                    return;
                  }
                  navigation.navigate(onLongPressPath, {
                    editing: true,
                    data: item,
                  });
                }}
              />
            ))}
          </View>
        )
      ) : (
        <></>
      )}
    </View>
  );
};

export default MyList;

const styles = StyleSheet.create({
  container: {marginBottom: 15},
  header: {
    backgroundColor: '#b5aeae',
    marginLeft: 5,
    marginRight: 5,
  },
  headerText: {fontSize: 16, padding: 10, fontWeight: 'bold'},
  body: {},
  icon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
});
