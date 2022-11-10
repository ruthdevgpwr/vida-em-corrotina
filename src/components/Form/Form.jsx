import { Box, Button, Container,  Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
          fontSize: '1.2rem',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export function Form({titleForm}) {
  
  return (
    <Container sx={{position: 'relative', minHeight: '100vh'}}>
      <Box component="form" noValidate autoComplete="off" sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)'}}>
        <Box sx={{background: '#202024', padding: '8rem', borderRadius: '0.5rem', display: 'grid', gap: '2rem', width: '80rem'}}>
          <Typography sx={{color: 'var(--white)', fontSize: '2.5rem', display:' flex', flexDirection: 'column', alignItems: 'center'}}>{titleForm}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <ThemeProvider theme={theme}>
              <MyTextField required id="outlined-required" label="Autor(a)" defaultValue="Seu nome" color="secondary" size='small' />
              <MyTextField required id="outlined-required" label="Título" defaultValue="Título da Postagem" color="secondary" size='small' sx={{p: {color: '#fff'}}} />
            </ThemeProvider>
          </Box>
          <ThemeProvider theme={theme}>
            <MyTextField required id="filled-multiline-flexible" label="Texto" defaultValue="Escreva seu texto" color="secondary" multiline  />
          </ThemeProvider>
          <Button sx={{ color: '#1a1a1e', background: '#fff' }}>ENVIAR</Button>
        </Box>
      </Box>
    </Container>
  );
}