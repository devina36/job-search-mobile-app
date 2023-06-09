import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs } from '../components';
import { COLORS, icons, images, SIZES } from '../constants';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
          headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
