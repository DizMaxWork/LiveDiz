import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import TopContent from './components/TopContent/TopContent';
import WhatWeCan from './components/WhatWeCan/WhatWeCan';

function App() {
  return (
    <Layout>
      <Header  />
      <MainContent>
        <TopContent />
        <WhatWeCan />
      </MainContent>
    </Layout>
  );
}

export default App;
