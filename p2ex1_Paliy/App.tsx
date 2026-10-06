import { JSX, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type FrogProps = {
  name: string;
  color: string;
};


function Frog({ name, color }: FrogProps) {
  return (
    <View style={[styles.frog, { backgroundColor: color }]}>
      <Text style={styles.frogText}>{name}</Text>
    </View>
  );
}
function PressButton({ num, pressHandler }: { num: number; pressHandler: (num: number) => void }) {
  return (
    <Pressable onPress={() => pressHandler(num)}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{num}</Text>
      </View>
    </Pressable>
  );
}
export default function Lake() {
  const [exNumber, setExNumber] = useState(1); 
  let lakeStyle;
  if (exNumber < 10) {
    lakeStyle = StyleSheet.compose(styles.lake, styles[`ex0${exNumber}` as keyof typeof styles]);
  } else {
    lakeStyle = StyleSheet.compose(styles.lake, styles[`ex${exNumber}` as keyof typeof styles]);
  }
  let i = 2;    
  let pressButtons: JSX.Element = (
    <PressButton num={1} pressHandler={setExNumber} />
  );
  while (i <= 21) {
    pressButtons = (
      <>
        {pressButtons}
        <PressButton num={i} pressHandler={setExNumber} />
      </>
    );
    i++;
  }
  return (
    <View style={styles.main}>
      <View style={{ height: 60, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text style={styles.taskText}>Текущая задача = {exNumber}</Text>
      </View>
      <View style={lakeStyle}>
        <Frog name="1" color="red" />
        <Frog name="2" color="yellow" />
        <Frog name="3" color="green" />
      </View>

      <View style={styles.buttons}>
        {pressButtons}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d0e3f2',
    padding: 8,
  },
  lake: {
    flex: 1,
    backgroundColor: '#3FA9F5',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 8,
    borderWidth: 2,
    borderColor: '#1f8ba4',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  frog: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  frogText: {
    color: '#FFFFFF',
  },
  button: {
    width: 44,
    height: 44,
    backgroundColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  textButton: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  taskText: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 4,
  },
  ex01: { justifyContent: 'flex-end' },
  ex02: { justifyContent: 'center' },
  ex03: { justifyContent: 'space-around' },
  ex04: { justifyContent: 'space-between' },
  ex05: { alignItems: 'flex-end' },
  ex06: { alignItems: 'center' },
  ex07: { alignItems: 'flex-start' },
  ex08: { flexDirection: 'column' },
  ex09: { flexDirection: 'column-reverse' },
  ex10: { flexDirection: 'row-reverse' },
  ex11: { justifyContent: 'flex-end' },
  ex12: { justifyContent: 'space-between' },
  ex13: { flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'flex-end' },
  ex14: { flexWrap: 'wrap',},
  ex15: { flexWrap: 'wrap', flexDirection: 'column',},
  ex16: { flexWrap: 'wrap', flexDirection: 'column',},
  ex17: { alignContent: 'flex-start', flexWrap: 'wrap',},
  ex18: { alignContent: 'flex-end', flexWrap: 'wrap',},
  ex19: { alignContent: 'center', flexWrap: 'wrap', flexDirection: 'column-reverse',},
  ex20: { alignContent: 'space-between', flexWrap: 'wrap', flexDirection: 'column-reverse',},
  ex21: { alignContent: 'space-between', flexWrap: 'wrap-reverse', flexDirection: 'column-reverse', justifyContent: 'space-between',},
});
