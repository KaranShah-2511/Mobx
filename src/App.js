import logo from "./logo.svg";
import "./App.css";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import styled from "styled-components";


function App() {
  return (
    <Container>
        <BrowserRouter>
          <Navigation />

          <Routes>
            <Route path="enterName" element={<Page1 />}></Route>
            <Route path="showName" element={<Page2 />}></Route>
            <Route path="deletedName" element={<Page3 />}></Route>
           

          </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  font-size: 25px;
`;
