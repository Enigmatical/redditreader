import React from 'react';
import styled from 'styled-components';
import { AppProvider } from 'contexts/appContext';
import SettingsForm from 'components/SettingsForm';
import CardGrid from 'components/CardGrid';

const StyledApp = styled.div`
  padding: 0 15px;
`;

const App = () => {
  return (
    <AppProvider>
      <StyledApp>
        <h1>Reddit Reader</h1>
        <SettingsForm />
        <CardGrid />
      </StyledApp>
    </AppProvider>
  );
}

export default App;
