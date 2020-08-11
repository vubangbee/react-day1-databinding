import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import Form_Validation from "./Form_Validation/Form_Validation";
import QLSV from "./Form_Validation/QLSV";
import ReactLifeCycle from "./ReactLifeCycle/ReactLifeCycle";
import PureComponentDemo from "./PureComponent/PureComponentDemo";
// import BaiTapLayout2 from "./Components/BaiTapLayout2/BaiTapLayout2";
// import DataBinding from "./DataBinding/DataBinding";
// import EvenBinding from "./EventBinding/EvenBinding";
// import RenderWithState from "./RenderWithState/RenderWithState";
// import BaiTapChonXe from "./RenderWithState/BaiTapChonXe";
// import RenderWithMap from "./RenderWithState/RenderWithMap/RenderWithMap";
// import ExampleGlasses from "./RenderWithState/ExampleGlasses";
// import DemoProps from './Props/DemoProps';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBinding /> */}
      {/* <EvenBinding/> */}
      {/* <RenderWithState/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap/> */}
      {/* <ExampleGlasses/> */}
      {/* <DemoProps /> */}
      {/* <Form_Validation /> */}
      {/* <QLSV /> */}
      {/* <ReactLifeCycle /> */}
      <PureComponentDemo />
    </div>
  );
}

export default App;
