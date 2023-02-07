import React,{ Component } from 'react';
import Child from './Child';
import './App.css';
// export لازم انادي في الانبورت بنفس الاسم لان احتمال اكو اكثر من اكسبورت 
import {x , y} from './module';
import {Test} from './module';
// ويمكن وضع  له أي اسم غير اسمه ال ديفلت لا يتكرر ولهذا لا اضعه داخل ااقواس المجموعه
import Test2 from './module';
//ممكن وضع اسم مستعار للمتغير بهذهالطريقه
// import {x as num1} from './module';
//طريقة كتابة الاسم الدلع للمتغير او داله الديفلت
// import {default as afnan} from './module';
class App extends  Component {
  // Test(){
  //   console.log("test!");
  // }
  Test = ()=>console.log("test!");
  

  render(){
  return (
    <div className="App">
     <Child />
    
    {this.Test()}

    Hello React {x+y}
    {Test()}
     {/* Hello React {num1} */}
     {Test2()}
     {/* {afnan()} */}
    </div>
  );
  }
}

export default App;
