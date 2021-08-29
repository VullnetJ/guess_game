
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [guessNumber, setGeussNumber] = useState('');
  const [count, setCount] = useState(0);
  const [randomNumber, SetRandomNumber] = useState(0);

  useEffect(() => resetGame(), [])

  const resetGame = () => {
    SetRandomNumber(Math.floor(Math.random()*100) + 1);
    setText("Try go guess a number between 1 - 100");
    setCount(0);
    setGeussNumber('');
  }

  const makeGuess = () => {
    setCount(count + 1);
    
    if (randomNumber === parseInt(guessNumber)) {
      Alert.alert('You guessed the number in ' + count + ' guesses')
      resetGame();
    }
    else if (randomNumber < parseInt(guessNumber)) {
      Alert.alert('Your guess ' + guessNumber + " is too high")
      setGeussNumber('');
    }
    else {
      Alert.alert('Your guess ' + guessNumber + " is too low")
      setGeussNumber('');
    }
  
  }



  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}></Text>
      <TextInput keyboardType='numeric' style={{fontSize: 24, width: 60, borderColor: 'orange', borderWidth: 1, margin: 25}}
      onChangeText={guessNumber => setGeussNumber(guessNumber)}
      value={guessNumber}
      />
      <Button  onPress={makeGuess} title='Make a guess'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
