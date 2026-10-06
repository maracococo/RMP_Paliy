import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.flag}>
        <View style={{flex: 2, backgroundColor: '#FCD116'}} />
        <View style={{flex: 1, backgroundColor: '#003893'}} />
        <View style={{flex: 1, backgroundColor: '#CE1126'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  flag: {
    aspectRatio: 3 / 2,
  },
});

export default Flex;