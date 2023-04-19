import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {TestItem} from '../../components';

const TestPage = () => {
  const [test, testData] = useState([
    {
      id: 1,
      image:
        'https://media.licdn.com/dms/image/D5603AQG8TnZ0oQ1E_A/profile-displayphoto-shrink_800_800/0/1671005717839?e=2147483647&v=beta&t=jFOOZ9g0fZGBzxaAicpzK8cZDdH7oGOhW0AuTkt7Wlw',
      name: 'Shalahuddin Ahmad Aziz',
      job: 'Mobile Developer',
    },
    {
      id: 2,
      image:
        'https://cdn.dribbble.com/users/10398535/avatars/normal/06d981a9d3c5ed2cfd9a5e40814c4c2e.jpeg?1641894202',
      name: 'Ical Codegp',
      job: 'Full-Stack Developer',
    },
  ]);

  return (
    <SafeAreaView className="flex-1">
      <View className="m-5">
        {test.map(testdata => {
          return <TestItem key={testdata.id} testing={testdata} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default TestPage;

const styles = StyleSheet.create({});
