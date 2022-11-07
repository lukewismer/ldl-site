import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home/Home';
import Standings from './Standings/Standings';
import Schedule from './Schedule/Schedule';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="standings" element={<Standings/>} />
          <Route path="schedule" element={<Schedule/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
