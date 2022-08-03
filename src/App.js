import {Route, Routes,Link} from "react-router-dom";
import Home from "./Home";
import Cat from "./Cat";

function App() {
  return (
    <div className="App">
        <div>
          <Link to ="/">Home으로가기</Link>
          <Link to ="/cat">Cat으로가기</Link>
          
        </div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cat/:name" element={<Cat/>} />
        
        </Routes>
        
    </div>
  );
}

export default App;
