import { Box, Button, Container, TextField, Typography } from '@mui/material';

export function Form({titleForm}) {
  return (
    <Container sx={{position: 'relative', minHeight: '100vh'}}>
      <Box component="form" noValidate autoComplete="off" sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)'}}>
        <Box sx={{background: '#202024', padding: '8rem', borderRadius: '0.5rem', display: 'grid', gap: '2rem', width: '80rem'}}>
          <Typography sx={{color: 'var(--white)', fontSize: '2.5rem', display:' flex', flexDirection: 'column', alignItems: 'center'}}>{titleForm}</Typography>
          <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
            <TextField
              required
              id="outlined-required"
              label="Autor(a)"
              defaultValue="Seu nome"
              color="secondary"
              size='small'
            />
            <TextField
              required
              id="outlined-required"
              label="Título"
              defaultValue="Título da Postagem"
              color="secondary"
              size='small'
            />
          </Box>
          <TextField
            required
            id="filled-multiline-flexible"
            label="Texto"
            defaultValue="Digite o texto da Postagem"
            color="secondary"
            multiline
            maxRows={60}
          />
          <Button sx={{color: '#1a1a1e', background: '#fff'}}>ENVIAR</Button>
        </Box>
      </Box>
    </Container>
  );
}