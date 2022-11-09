import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { Post } from '../components/Post';
import axios from 'axios';


const baseURL = 'https://vidaemcorrotina-api.herokuapp.com/posts';

export function Home() {
  
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
      
      {
        posts.length > 0 && posts.map(post => {
          return  (
            <Post 
              key={post.id} 
              title={post.title} 
              text={post.text} 
              author={post.author}
              createdAt={post.createdAt}
            />
          );
        })
      }
    </Container>
  );
}
