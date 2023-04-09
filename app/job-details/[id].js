import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View, ActivityIndicator, RefreshControl } from 'react-native';
import { SIZES } from '../../constants';

const JobDetails = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Text>Details</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetails;
