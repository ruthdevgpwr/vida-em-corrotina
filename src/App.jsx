import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';
import axios from 'axios';
import './global.css';
import { Footer } from './components/Footer';

const baseURL = 'https://vidaemcorrotina-api.herokuapp.com/posts';

function App() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        setPosts(response.data);
      }).catch(error => {
        alert(error);
      });
  }, []);

  return (

    <Container sx={{padding: '2rem', display: 'grid', position: 'relative', top: '5rem', gridTemplateColumns: '1fr', griddTemplateRows: '1fr', gap: '1rem'}} className='wrapper'>
      <Header />
      {
        posts.length > 0 && posts.map(post => {
          return  (
            <Post key={post.id} title={post.title} text={post.text}/>
          );
        })
      }
      <Footer />
    </Container>
  );
}

export default App;
