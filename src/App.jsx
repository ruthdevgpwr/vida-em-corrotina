import { Container, Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import axios from 'axios';
import { Post } from './components/Post';

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
    <Container>
      <Header />
      {
        posts.length > 0 && posts.map(post => {
          return  (
            <Post key={post.id} title={post.title}/>
          );
        })
      };

      
    </Container>
  );
}

export default App;
