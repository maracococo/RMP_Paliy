import {useState} from 'react';
import {Button, Text, View} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        Я кот {props.name}, И я {isHungry ? 'голоден' : 'Сыт'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Дай мне еды,пожалуйста!' : 'Спасибо!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={{flex: 1}}>
      <Cat name="Барсик" />
      <Cat name="Черныш" />
      <Cat name="Жожик" />
    </View>
  );
};

export default Cafe;