import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import BusController from './bus';

const styles = StyleSheet.create({
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
    marginVertical: 1,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const Separator = () => <View style={styles.separator} />;
function Bus1731({ navigation }) {

  const [item, setItems] = useState([]);

  const [direction,setDirection] = useState(1);

  const [start, setStart] = useState(true);

  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = () => {
      setRefreshing(true);
      BusController.route({id:173,dir:0}).then((res) => {
        setItems(res);
        setRefreshing(false);
      });
  };

  const onRefresh1 = () => {
    setRefreshing(true);
    BusController.route({id:173,dir:1}).then((res) => {
      setItems(res);
      setRefreshing(false);
    });
};

  useEffect(() => {
    if(start){
      setStart(false);
      if(direction==1)onRefresh();
      else onRefresh1();
    }
    var id;
    if(direction==1)id=setInterval(onRefresh,10000);
    else id=setInterval(onRefresh1,10000)
    return () => {
      clearInterval(id);
    }
  },[start]);

  return (
  <SafeAreaView style={styles.background} refreshControl={(<RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />)}>
    <View>
      <Text style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
        173
      </Text>
      <TouchableOpacity
        onPress={() => {navigation.navigate('List173')}}
        style={{
          width: '40%',
          backgroundColor: 'yellow',
          position: 'absolute',
          right: 0,
        }}>
        <Text style={styles.title}>發車時刻表</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>{navigation.navigate('Home')}}
        style={{
          width: '30%',
          backgroundColor: '',
          position: 'absolute',
          left: 0,
        }}>
        <Text style={styles.title}>返回</Text>
      </TouchableOpacity>
    </View>
    

    <View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          onPress={() => {setStart(true);setDirection(0)}}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            往中央大學
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {setStart(true);setDirection(1)}}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            往桃園高鐵站
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
    { item.map((data) => (
        <View>
          <Separator />
          <View style={styles.fixToText}>
          
            <Text style={{textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
              {data.time} 
            </Text>
            <Text style={ {textAlign: 'center',width: '50%', backgroundColor: 'white' }}>{data.state}</Text>
  
          </View>
        </View>
          
      ))}
    <Separator />
  </SafeAreaView>
);}

export default Bus1731;