import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import TopContent from './components/TopContent/TopContent';
import WhatWeCan from './components/WhatWeCan/WhatWeCan';
import HowWeWork from './components/HowWeWork/HowWeWork';

function App() {
  return (
    <Layout>
      <Header  />
      <MainContent>
        <TopContent />
        <WhatWeCan />
        <HowWeWork />
      </MainContent>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </Layout>
  );
}

export default App;
