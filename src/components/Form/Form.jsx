import { Box, Button, Container,  Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { configure } from 'locales';
import { useEffect, useState } from 'react';
import { MyTextField } from './MyTextField';

const theme = createTheme({
  components: {
    // Name of the component
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          background: 'var(--gray-900)',
          color: '#ccc'
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: 'purple',
          fontSize: '1rem',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export function Form({titleForm}) {

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  


  const handleChange = (event) => {
    event.preventDefault();
    setAuthor(event.target.value);
  };

 
  const postData = () => {
    axios.post('https://vidaemcorrotina-api.herokuapp.com/posts', {
      authorId: 'c98f9d9b-a96c-474c-a1d6-a242c6c9078d',
      title,
      text
    }, { 'Content-Type': 'application/json'}).then(response => {
      console.log(response.data);
    }).catch(error => console.log(error));
  };

  return (
    <Container sx={{position: 'relative', minHeight: '100vh'}}>
      <Box component="form" noValidate autoComplete='off' sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)'}}>
        <Box sx={{background: '#202024', padding: '8rem', borderRadius: '0.5rem', display: 'grid', gap: '2rem', width: '80rem'}}>
          <Typography sx={{color: 'var(--white)', fontSize: '2.5rem', display:' flex', flexDirection: 'column', alignItems: 'center'}}>{titleForm}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <ThemeProvider theme={theme}>
              <MyTextField required  id="outlined-text" label="Autor(a)" color="secondary" size='small' value={author} onChange={handleChange} />
              <MyTextField required id="outlined-text" label="Título" color="secondary" size='small' value={title} onChange={(event) => {event.preventDefault(); setTitle(event.target.value);}}  />
            </ThemeProvider>
          </Box>
          <ThemeProvider theme={theme}>
            <MyTextField required id="filled-multiline-flexible" label="Texto" color="secondary" multiline value={text}  onChange={(event) => {event.preventDefault(); setText(event.target.value); }}/>
          </ThemeProvider>
          <Button onClick={postData} sx={{ color: '#1a1a1e', background: '#fff' }}>ENVIAR</Button>
        </Box>
      </Box>
    </Container>
  );
}