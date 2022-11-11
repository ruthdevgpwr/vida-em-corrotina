import { Paper, Typography } from '@mui/material';
import { format, parseISO, formatDistanceStrict, addHours } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';



export function Post({title, text, author, createdAt}) {
  
  const parseDateStringtoIso = parseISO(createdAt);

  const znDate = zonedTimeToUtc(parseDateStringtoIso, 'America/Sao_Paulo');

  const addedDate = addHours(znDate, -3);
  
  const formattedDate = format(
    addedDate, 
    // eslint-disable-next-line quotes
    "dd 'de' MMMM', às ' HH:mm'h'", {
      timeZone: 'America/Sao_Paulo',
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
      <Paper sx={{backgroundColor: '#202024', padding: '0.5rem', height: 'auto', width: '72rem', color: '#e1e1e6', minHeight: '12rem', display: 'flex', flexDirection: 'column'}}>
        <Typography component='h1' sx={{fontSize:' 2rem', marginBottom: '-0.4rem'}}>{title}</Typography>
        <Typography component="time" sx={{marginLeft: '.2rem', fontSize: '0.8rem', fontWeight: 'lighter'}}>Publicado no dia {formattedDate}</Typography>
        <Typography sx={{marginLeft: '.2rem', fontSize: '1.2rem'}}>{text}</Typography>
        <Typography>{author}</Typography>
      </Paper>
    </>
  );
}

