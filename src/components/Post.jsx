import { Box, Paper, Typography } from '@mui/material';

export function Post({title}) {

  return (
    <Box>
      <Paper sx={{padding: '20px', backgroundColor: '#29292e', color: '#fff'}}>
        <Typography sx={{color: '#52a1ed'}}>{title}</Typography>
        <time  dateTime='2022-11-06 06:00:00'>Publicado há 1 hora</time>
        <Typography>TEXTOOOOOO</Typography>
        <Typography sx={{backgroundColor: '#0f3f6f', position: 'absolute', borderRadius: '0.1rem'}}>Ruth</Typography>
      </Paper>
    </Box>
  );
}

