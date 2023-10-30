import './App.css'
import SplitScreen from './components/split-screen'

const LeftSide = () => {
  return (
    <h2>I am left</h2>
  )
}

const RightSide = () => {
  return (
    <h2>I am right</h2>
  )
}

function App() {
  return (
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSide/>
        <RightSide /> 
      </SplitScreen>
  )
}

export default App
