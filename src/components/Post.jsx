import { Box, Paper, Typography } from '@mui/material';

export function Post({title, text}) {

  return (
    <>
      <Paper sx={{backgroundColor: 'var(--gray-700)', padding: '0.5rem', height: 'auto', width: '72rem', color: '#C6CEF4', minHeight: '12rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
        <Typography>{title}</Typography>
        <time dateTime='2022-11-06 06:00:00'>Publicado há 1 hora</time>
        <Typography>{text}</Typography>
        <Typography>Ruth</Typography>
      </Paper>
    </>
  );
}

