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
function Frontdoor({ navigation }) {

  const [item, setItems] = useState([]);

  const [start, setStart] = useState(true);

  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = () => {
      setRefreshing(true);
      BusController.state({id:1351}).then((res) => {
        setItems(res);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    if(start){
      setStart(false);
      onRefresh();
    }
    var id;
    id=setInterval(onRefresh,10000)
    return () => {
      clearInterval(id);
    }
  },[start]);
  return (
    <SafeAreaView style={styles.background} refreshControl={(<RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />)}>
    <View>
      <Text style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
        中央大學正門
      </Text>
      <TouchableOpacity
        onPress={() =>navigation.navigate('Second')}
        style={{
          width: '10%',
          backgroundColor: 'skyblue',
          position: 'absolute',
          left: 20,
        }}>
        <Text style={styles.title}>返回</Text>
      </TouchableOpacity>
    </View>
    <Separator />

    <View>
      <View style={styles.fixToText}>
        <Text style={{ width: '50%', backgroundColor: 'white' ,textAlign: 'center'}}>
            公車
          </Text>
        
        
          <Text style={{ width: '50%', backgroundColor: 'white' ,textAlign: 'center'}}>
            到站時間
          </Text>
      </View>
    </View>
    <Separator />
    { item.map((data) => (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bus'+data.route)}
            style={{ width: '100%', backgroundColor: 'white' }}>
            <Text style={{textAlign: 'left'}}>
                {data.route}                                        {data.time}           
            </Text>
          </TouchableOpacity>
          <Separator />
        </View>
          
      ))}
    <Separator />
  </SafeAreaView>
);
}
export default Frontdoor;