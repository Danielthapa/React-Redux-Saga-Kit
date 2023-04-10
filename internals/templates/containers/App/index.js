/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Home from '../HomePage/Loadable';

import ThemeContext from './themeContext';
// import Login from '../Login/Loadable';
// import PublicRoute from '../../routes/PublicRoute';

const AppWrapper = styled.div`
  /* max-width: calc(768px + 16px * 2); */
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <AppWrapper>
        <Routes>
          <Route path="/*" element={<Home />} />
          {/* <Route exact path="/login" element={<PublicRoute />}>
            <Route exact path="/login" element={<Login />} />
          </Route> */}
        </Routes>
      </AppWrapper>
      <GlobalStyle />
    </ThemeContext.Provider>
  );
}
