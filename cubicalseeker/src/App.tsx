import '@mantine/carousel/styles.css';
import './App.css';
import { createTheme, Divider, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css'
import '@mantine/tiptap/styles.css';
import '@mantine/notifications/styles.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Findjobs from './pages/Findjobs';
import Header from './header/Header';
import Footer from './footer/Footer';
import FindTalentPage from './pages/FindTalentPage';
import TalentProfile from './pages/TalentProfile';
import PostJobPage from './pages/PostJobPage';
import JobDescPage from './pages/JobDescPage';
import ApplyJobPage from './pages/ApplyJobPage';
import CompanyPage from './pages/CompanyPage';
import PostedJobPage from './pages/PostedJobPage';
import '@mantine/dates/styles.css';
import JobHistoryPage from './pages/JobHistoryPage';
import SigninPage from './pages/SigninPage';
import ProfilePage from './pages/ProfilePage';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';


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
    <BrowserRouter>
    <div className='relative'>
    <Header/>
    <Divider color="blue.5" size="xs"/>
    <Routes>
      <Route path='/find-jobs' element={<Findjobs/>}/>
      <Route path='/find-talent' element={<FindTalentPage/>}/>
      <Route path='/company' element={<CompanyPage/>}/>
      <Route path='/jobs' element={<JobDescPage/>}/>
      <Route path='/posted-job' element={<PostedJobPage/>}/>
      <Route path='/job-history' element={<JobHistoryPage/>}/>
      <Route path='/apply-job' element={<ApplyJobPage/>}/>
      <Route path='/post-jobs' element={<PostJobPage/>}/>
      <Route path='/talent-profile' element={<TalentProfile/>}/>
      <Route path='/signup' element={<SigninPage/>}/>
      <Route path='/login' element={<SigninPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='*' element={<HomePage/>} />
    </Routes>
     <Footer/>
     </div>
    </BrowserRouter>
    </MantineProvider>
    </Provider>
  );
}

export default App;
