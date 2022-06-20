import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Alert,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import BusController from './bus';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 16,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 16,
    backgroundColor: '#DCDCDC',
  },
  title: {
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
const Separator = () => <View style={styles.separator} />;
function First({ navigation }) {
  
  const [item, setItems] = useState([]);

  const [start, setStart] = useState(true);

  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = () => {
      setRefreshing(true);
      BusController.state(1).then((res) => {
        setItems(res);
        setRefreshing(false);
      });
  };
  useEffect(() => {
    if(start){
      setStart(false);
      onRefresh();
    }
    const id=setInterval(onRefresh,10000);
    return () => {
      clearInterval(id);
    }
  },[start]);
  return (
    <SafeAreaView style={styles.background} refreshControl={(<RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />)}>
    <ScrollView style={styles.scrollView}>
    <View>
      <Text style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
        公車動態
      </Text>
      <TouchableOpacity
        onPress={() =>Alert.alert('Left button pressed')}
        style={{
          width: '10%',
          backgroundColor: 'skyblue',
          position: 'absolute',
          right: 20,
        }}>
        <Text style={styles.title}>叉</Text>
      </TouchableOpacity>
    </View>
    <Separator />
    
    <View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            依班次
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>navigation.navigate('Second')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            依站牌
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Separator />
    {item.map((res)=>(
      <View>
        <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Bus'+res.state)}
          style={{ width: '100%', backgroundColor: 'white' }}>
          <Text style={{textAlign: 'left'}}>
          {res.state}                          警衛室|{res.time}
          </Text>
          <Text style={styles.title}>{'\n'}</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Left button pressed')}
            style={{
              width: '10%',
              backgroundColor: 'white',
              position: 'absolute',
              right: 20,
            }}>
            <Text style={styles.title}>心</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('Left button pressed')}
            style={{
              width: '10%',
              backgroundColor: 'white',
              position: 'absolute',
              right: 20,
              bottom: 0,
            }}>
            <Text style={styles.title}>加</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Separator />
    </View>
    ))}
    <Separator />
    </ScrollView>
  </SafeAreaView>
  );
}

export default First;
