import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css'
import HomePage from './pages/HomePage';


function App() {
  const theme = createTheme({
    colors: {
      'sapphire': ['#f0f7fe','#ddedfc','#c3e0fa','#9acef6','#6bb3ef','#4894e9','#3378dd','#2a63cb','#264d9c','#264782','#1b2c50',
      ],
      'mineShaft':['#e5fbfe','#d9f0f3','#b7dde2','#92cbd1','#73bbc2','#60b1b9','#52acb6','#4096a1','#328690','#17757e'
      ]
    
    }
  })
  return (
   <MantineProvider theme={theme}>
    <HomePage/>
    </MantineProvider>
  );
}

export default App;
