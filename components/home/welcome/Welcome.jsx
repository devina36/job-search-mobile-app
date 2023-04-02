import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';

import styles from './welcome.style';

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Dev</Text>
        <Text style={styles.userName}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
