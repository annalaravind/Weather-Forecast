import React, { useState } from 'react';
import "./React.css";
// import { create, all } from 'mathjs';

const Calculator = () => {

  // const math = create(all);

  const [value, setValue] = useState("");

  // const calculatingResult=()=>{
  //     let result=math.evaluate(value);
  //     setValue(result.toString());
  // }

  const onOperator = (e) => {
    const operators = ['+', '-', '*', '/', '%'];
    const lastChar = value.slice(-1);

    if (!operators.includes(lastChar)) {
      setValue(value + e.target.value);
    }
  };

  const onDot = (e) => {
    const lastNumber = value.split(/[-+*/%]/).pop();
    if (!lastNumber.includes('.')) {
      setValue(value + e.target.value);
    }
  };

  return (
    <div className='formIn'>
      <div className='box'>
        <form>
          <div className='div'>
            <input type='text' name='text' value={value} onChange={(e) => { setValue(e.target.value) }} />
          </div>
          <div className='div1'>
            <input type='button' value='AC' name='button' onClick={() => { setValue("") }} />
            <input type='button' value='DEL' name='button' onClick={() => { setValue(value.slice(0, -1)) }} />
            <input type='button' value='%' name='button' onClick={onOperator} />
            <input type='button' value='/' name='button' onClick={onOperator} />
          </div>
          <div className='div2'>
            <input type='button' value='7' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='8' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='9' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='*' name='button' onClick={onOperator} />
          </div>
          <div className='div3'>
            <input type='button' value='4' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='5' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='6' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='-' name='button' onClick={onOperator} />
          </div>
          <div className='div4'>
            <input type='button' value='1' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='2' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='3' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='+' name='button' onClick={onOperator} />
          </div>
          <div className='div5'>
            <input type='button' value='0' name='button' onClick={(e) => { setValue(value + e.target.value) }} />
            <input type='button' value='.' name='button' onClick={onDot} />
            <input type='button' value='=' name='button' className='equal' onClick={() => { setValue(eval(value)) }/* calculatingResult */} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Calculator;
