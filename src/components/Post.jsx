import { Paper, Typography } from '@mui/material';
import { format, parseISO, formatDistanceStrict } from 'date-fns';
import pt from 'date-fns/locale/pt';



export function Post({title, text, author, createdAt}) {
  
  const parseDateStringtoIso = parseISO(createdAt);

  const formattedDate = format(
    parseDateStringtoIso, 
    // eslint-disable-next-line quotes
    "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
      timeZone: 'America/Brasil',
      locale: pt,
    }
  );

  const dateTextTemp = formatDistanceStrict(
    parseDateStringtoIso, 
    new Date(), 
    {locale: pt},
  );
   
  return (
    <>
      <Paper sx={{backgroundColor: 'var(--gray-700)', padding: '0.5rem', height: 'auto', width: '72rem', color: '#e1e1e6', minHeight: '12rem', display: 'flex', flexDirection: 'column'}}>
        <Typography component='h1' sx={{fontSize:' 2rem', marginBottom: '-0.4rem'}}>{title}</Typography>
        <Typography component="time" sx={{marginLeft: '.2rem', fontSize: '0.8rem', fontWeight: 'lighter'}}>Publicado há {dateTextTemp}</Typography>
        <Typography sx={{marginLeft: '.2rem', fontSize: '1.2rem'}}>{text}</Typography>
        <Typography>{author}</Typography>
      </Paper>
    </>
  );
}

