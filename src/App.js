import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import EvenBinding from './EventBinding/EvenBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe';
import RenderWithMap from './RenderWithState/RenderWithMap/RenderWithMap';
import ExampleCard from './LiftingUpState/ExampleCard';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBinding /> */}
      {/* <EvenBinding/> */}
      {/* <RenderWithState/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap /> */}
      <ExampleCard />

    </div>
  );
}

export default App;
