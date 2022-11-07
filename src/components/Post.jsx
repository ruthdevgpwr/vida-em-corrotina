import { Box, Paper, Typography } from '@mui/material';

export function Post() {
  return (
    <Box className='boxPOST' sx={{maxWidth: '100%' , marginTop: '35px'}}>
      <Paper sx={{padding: '20px', backgroundColor: '#29292e', color: '#fff'}}>
        <Typography component="h2" fontSize={'1.2rem'} sx={{fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '0.5px', color: '#52a1ed'}}>Aprenda HTML do básico</Typography>
        <data></data>
        <Typography sx={{marginBottom: '30px', fontWeight: 'lighter'}}>10 Dez 22</Typography>
        <Typography component='h3' sx={{marginBottom: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quae ratione quas perspiciatis, in obcaecati nobis, recusandae dolorum dolorem laudantium officia, pariatur vero quasi excepturi placeat atque ipsum consequuntur eveniet.</Typography>
        <Typography component='h4' sx={{backgroundColor: 'slategrey', position: 'absolute', borderRadius: '0.1rem', padding: '5px'}}>Ruth Dantas</Typography>
      </Paper>
    </Box>
  );
}

