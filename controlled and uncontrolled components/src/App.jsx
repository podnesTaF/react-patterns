import ControlledFlow from "./components/ControlledFlow"
import { useState } from "react"

const StepOne = ({goNext}) =>{
  return (
    <>
    <h1>Step 1</h1>
     <button onClick={() => goNext({name: "Oleksii"})}>next</button>
    </>
  ) 
  }
const StepTwo =({goNext}) =>{
  return (
    <>
    <h1>Step 2. Yo cool</h1>
     <button onClick={() => goNext({surname: "Pidnebesnyi"})}>next</button>
    </>
  ) 
  }
const StepThree = ({goNext}) =>{
  return (
    <>
    <h1>Step 3</h1>
     <button onClick={() => goNext({age: 21})}>next</button>
    </>
  ) 
  }

  const StepFour = ({goNext}) =>{
    return (
      <>
      <h1>Step 4</h1>
       <button onClick={() => goNext({mins: "322"})}>next</button>
      </>
    ) 
    }

function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    setData({...data, ...dataFromStep})
    const nextStepIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextStepIndex);
  };

  return (
    <>
     <ControlledFlow currentIndex={currentStepIndex} onNext={goNext} onFinish={(data) => console.log(data)}>
      <StepOne />
      <StepTwo />
      {data.age > 5 && <StepThree />}
      <StepFour />
     </ControlledFlow>
    </>
  )
}

export default App
