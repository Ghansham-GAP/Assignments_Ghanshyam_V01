import { Text } from 'react-native';


const App = () => {
  let a: number = 0;
  let b: number = 0;

  const Addition = (a: number, b: number)=> {
    return a + b;
  };

  const Substraction = (a: number, b: number)=> {
    return a - b;
  };

  return (
    <> 
      <Text>Addition is : {Addition(10, 5)}</Text>
      <Text>Substraction is : {Substraction(10, 5)}</Text>  
     </>
  );
};
export default App;