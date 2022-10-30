import { useState, useRef } from "react";

function App() {
  let giaTri ;
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState({
    value: "",
    unit: "",
})
const [outputValue, setOutputValue] = useState({
  value: "",
  unit: "",
})
  const handleAdd = () => {
    switch (inputValue.unit)
    {
     case "km": {
     giaTri = inputValue.value*1000;
     break;
    }
     case "ha": {
      giaTri = inputValue.value*100;  
     break;
    }
     case "dam": {
      giaTri = inputValue.value*10; 
     break;
    }
     case "m": {
      giaTri = inputValue.value*1;  
     break;
    }
     case "dm": {
      giaTri = inputValue.value*0.1;  
     break;
    }
     case "cm": {
     giaTri = inputValue.value*0.01;
     break;
    }
     case "mm": {
      giaTri = inputValue.value*0.001;
     break;
    }
    }
   if(isNaN(giaTri) === true){
      alert("Không hợp lệ, mời nhập lại !!!");
      setInputValue({
        ...inputValue,
        value: ("")
      });
      setOutputValue({
        ...outputValue,
        value: ("")
    });
  }else {
     switch (outputValue.unit)
     {
      case "km": {
         setOutputValue({
          ...outputValue,
          value: (+giaTri*0.001)
        });
      break;
     }
      case "ha": {
        setOutputValue({
          ...outputValue,
          value: (+giaTri*0.01)
        });;  
      break;
     }
      case "dam": {
        setOutputValue({
          ...outputValue,
          value: (+giaTri*0.1)
        });; 
      break;
     }
      case "m": {
        setOutputValue({
          ...outputValue,
          value: (+giaTri*1)
        });;  
      break;
     }
      case "dm": {
        setOutputValue({
          ...outputValue,
          value: (+giaTri*10)
        });;  
      break;
     }
      case "cm": {
        setOutputValue({
          ...outputValue,
          value: (+giaTri*100)
        });;
      break;
     }
      case "mm": {
        setOutputValue({
          ...outputValue,
          value: (+giaTri*1000)
        });;
      break;
     }
    }
    inputRef.current.focus();
  }
  }
  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col">
          <input type="text" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none" placeholder="Enter value..."
          onChange={(e) => setInputValue({
            ...inputValue, 
            value: e.target.value
          })}
          value = {inputValue.value}
          ref = {inputRef}
          ></input>
          <select  onChange={(e) => setInputValue({
            ...inputValue, 
            unit: e.target.value
          })}>
          <option value="select">-select-</option>
            <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
        <div className="flex flex-col">
          <button type="" className="px-6 py-2 bg-lime-600 rounded-md text-white"
          onClick={handleAdd}
          >Convert</button>
        </div>
        <div className="flex flex-col">
          <input type="text" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none" placeholder="Enter value..."       
          value = {outputValue.value}
          ></input>

          <select onChange={(e)=>setOutputValue({
            ...outputValue,
            unit: e.target.value
          })}>
          <option value="select">-select-</option>
          <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
      </div>
    
    </>
  );
}

export default App;