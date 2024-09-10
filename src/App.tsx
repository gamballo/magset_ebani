import './App.css'

// import {ToyBox} from './components/ToyBox';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-expect-error
import {Counter} from "./components/count/Counter.tsx";

function App() {
    return(
      <div>
          {/*<ToyBox/>*/}
          <Counter/>
      </div>
    )}

export default App
