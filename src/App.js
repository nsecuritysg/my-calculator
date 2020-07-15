import React from 'react';
import './App.css';

function App() {
  const [value, setValue] = React.useState('0');
  return (
    <div className="calc">
      <form className="form" name="form">
        <input className="output" value={value}/>
      </form>  
      <table>
        <tr>
          <td colspan="3"><input className="button ac btnColor" type="button" value="AC" onClick={()=>{
            setValue('0')
          }}/></td>
          <td><input className="button btnColor" type="button" value="/" onClick={()=>{
            setValue(value + '/')
          }}/></td>
        </tr>
        <tr>
          <td><input className="button" type="button" value="7" onClick={()=>{
            setValue(value + '7')
          }}/></td>
          <td><input className="button" type="button" value="8" onClick={()=>{
            setValue(value + '8')
          }}/></td>
          <td><input className="button" type="button" value="9" onClick={()=>{
            setValue(value + '9')
          }}/></td>
          <td><input className="button btnColor" type="button" value="*" onClick={()=>{
            setValue(value + '*')
          }}/></td>
        </tr>
        <tr>
          <td><input className="button" type="button" value="4"  onClick={()=>{
            setValue(value + '4')
          }}/></td>
          <td><input className="button" type="button" value="5" onClick={()=>{
            setValue(value + '5')
          }}/></td>
          <td><input className="button" type="button" value="6" onClick={()=>{
            setValue(value + '6')
          }}/></td>
          <td><input className="button btnColor" type="button" value="-" onClick={()=>{
            setValue(value + '-')
          }}/></td>
        </tr>
        <tr>
          <td><input className="button" type="button" value="1" onClick={()=>{
            setValue(value + '1')
          }}/></td>
          <td><input className="button" type="button" value="2" onClick={()=>{
            setValue(value + '2')
          }}/></td>
          <td><input className="button" type="button" value="3" onClick={()=>{
            setValue(value + '3')
          }}/></td>
          <td><input className="button btnColor" type="button" value="+" onClick={()=>{
            setValue(value + '+')
          }}/></td>
        </tr>
        <tr>
          <td><input className="button" type="button" value="0" onClick={()=>{
            setValue(value + '0')
          }}/></td>
          <td><input className="button" type="button" value="."/></td>
          <td colspan="2"><input className="button equal" type="button" value="=" onClick={()=>{
            function evil(fn) {
              return new Function('return ' + fn)();
            }
            setValue(evil(value));
          }}/></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
