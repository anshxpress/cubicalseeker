import '@mantine/carousel/styles.css';
import './App.css';
import { createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css'
import '@mantine/tiptap/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import { getItem } from './Services/LocalStorageService';
import AppRoutes from './pages/AppRoutes';


function App() {
  const theme = createTheme({
    focusRing:"never",
    fontFamily: 'Poppins, sans-serif',
    primaryColor:'blue',
    primaryShade:4,
    colors: {
      'sapphire': ['#f0f7fe','#ddedfc','#c3e0fa','#9acef6','#6bb3ef','#4894e9','#3378dd','#2a63cb','#264d9c','#264782','#1b2c50',
      ],
      'mineShaft':['#e5fbfe','#d9f0f3','#b7dde2','#92cbd1','#73bbc2','#60b1b9','#52acb6','#4096a1','#328690','#17757e']
    },
  })
  return ( 
    <Provider store={Store}>
   <MantineProvider defaultColorScheme='dark'theme={theme}>
    <Notifications position="top-center" zIndex={1000}/>
    <AppRoutes/>
    </MantineProvider>
    </Provider>
  );
}

export default App;
