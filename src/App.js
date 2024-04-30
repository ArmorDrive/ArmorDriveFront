import {getText} from "./utils/getText.js";


function App() {
  return (
    <div className="App">
      {/* test */}
      {`${getText('title')} ${getText('name')}`}
      {`${getText('test')}`}
    </div>
  );
}

export default App;
