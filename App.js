import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import{ Header } from'react-native-elements';
import{ Icon } from'react-native-elements';
import{ Input, Button } from'react-native-elements';
import{ ListItem } from'react-native-elements';
//testing

export default function App() {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  
 const addProduct = () => {
    setShoppingList([...shoppingList, {product: product, amount: amount}]);
    setProduct('');
    setAmount('');
  }

  const deleteProduct = (index) => {
    setShoppingList(shoppingList.filter((product, i) => i !== index));
  }

  renderItem = ({ item, index }) => (
      <ListItem bottomDivider pad={100}>
        <ListItem.Content >
          <ListItem.Title>{item.product}</ListItem.Title>
          <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content>
          <Icon type="material" color="red" name="delete" onPress={() => deleteProduct(index)}/>
        </ListItem.Content>
      </ListItem>
    );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainerStyle}>
        <Header
          centerComponent={{text:'SHOPPINGLIST',style:{color:'#fff', height: 40, textAlignVertical: 'center'}}}
        />
        <Input placeholder = 'Product' label = 'PRODUCT' onChangeText={text => setProduct(text)} value={product}/>
        <Input placeholder = 'Amount' label = 'AMOUNT' onChangeText={text => setAmount(text)} value={amount}/>
        <Button icon={{name: 'save'}} title='SAVE' buttonStyle={{width: 180}} onPress={addProduct}></Button>
      </View>
      <FlatList 
          data={shoppingList}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={renderItem} 
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 20
  },
  inputContainerStyle: {
    alignItems: 'center',  
  },
});