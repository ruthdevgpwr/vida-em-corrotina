import { Container, Box } from '@mui/system';
import { Header } from './components/Header';
import { Post } from './components/Post';

function App() {
  return (
    <Container className='containerPRINCIPAL'sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', height: '100vh'}}>
      <Header />
      <Box className='box DOCARAI' sx={{display: 'flex', flexWrap: 'wrap', position: 'relative', top: '115px'}}>
        <Post />
        <Post />
        <Post />
      </Box>
    </Container>
  );
}

export default App;
