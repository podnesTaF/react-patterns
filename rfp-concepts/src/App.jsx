import { SmallRedButton, RedButton } from "./components/partial";
// import RecursiveComponent from "./components/recurcive";


// const nestedObject = {
//   key1: "value1",
//   key2: {
//     innerKey1: "innerValue1",
//     innerKey2: {
//       innerInnerKey1: "innerInnerValue1",
//       innerInnerKey2: "innerInnerValue2"  
//     }
//   },
//   key3: 'value3'
// }

function App() {

  return (
    <div>
      <div>
      <RedButton text={"I'm red"} disabled={true} />
      </div>
     <div>
     <SmallRedButton text={"I'm small"} />
     </div>
    </div>
  )
}

export default App;
