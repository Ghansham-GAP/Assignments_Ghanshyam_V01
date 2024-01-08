import { Text, Button, View } from 'react-native';


const App = () => {
  let a: number = 0;
  let b: number = 0;

  const Addition3 = (a: number, b: number)=> {
    return a + b;
  };

  return (
    <>
      <Text>Addition is : {Addition3(10, 5)}</Text>  
    </>
  );
};
export default App;