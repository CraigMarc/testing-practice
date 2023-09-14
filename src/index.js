//import './styles.css';

function sum(a, b) {
    return a + b;
  }

  function capitalize(string) {
    
    return string[0].toUpperCase() + string.slice(1)
    
  }
  
 
  function reverse(string) {
   
    let arr = []

    for (let i = string.length; i >= 0; i--) {
        arr.push(string[i])
    }
    return arr.join("")
  }

  

  
  //export default sum;
  export {
   sum,
   capitalize,
   reverse,
  };