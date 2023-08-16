import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fetchMessage, setFetchMessage] = useState();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        'https://react-native-course-43a66-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=' +
          authCtx.token
      )
      .then((response) => {
        setFetchMessage(response.data);
      });
  }, [authCtx.token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  }
});
