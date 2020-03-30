import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import themer from './styles/themer';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={themer}>
      <GlobalStyles />
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />

      <Dashboard open={open} />
    </ThemeProvider>
  );
}

export default App;
