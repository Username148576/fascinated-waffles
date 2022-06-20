import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

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
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
const Separator = () => <View style={styles.separator} />;
function List133({ navigation }) {
  return (
  <SafeAreaView style={styles.background}>
    <View>
      <Text style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
        133公車時刻表
      </Text>
     <TouchableOpacity
        onPress={() => navigation.navigate('Bus1331')}
        style={{
          width: '30%',
          backgroundColor: '',
          position: 'absolute',
          left: 0,
        }}>
        <Text style={styles.title}>返回</Text>
      </TouchableOpacity>
    </View>
    <Separator />
     <Text style={{ textAlign: 'center', backgroundColor: 'white' }}>
       往中央大學
      </Text>
    <View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
           平日
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            假日
          </Text>
        
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            06:30
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            06:20
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            07:00
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            07:00
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
           08:00
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            07:20
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            08:30
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            08:00
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
           09:00
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            08:20
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            09:30
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            09:00
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            10:00
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            09:20
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            10:30
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            10:00
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            11:00
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            10:20
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            11:30
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            11:00
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            12:00
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            11:20
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            12:25
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            12:00
          </Text>   
      </View>
    </View>
    
    <Text style={{ textAlign: 'center', backgroundColor: 'white' }}>
        上次更新:2022/03/10
      </Text>
    
  </SafeAreaView>
);}
export default List133;
