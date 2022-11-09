import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

export function Header() {
  return (
    <Box>
      <AppBar sx={{backgroundColor: '#131215'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-around', height: '6rem'}}>
          <Box sx={{display: 'flex', flexDirection: 'row', borderRadius: '0.4rem', padding: '0.5rem'}}>
            <GroupOutlinedIcon sx={{color: '#8257e6'}}/>
            <Typography component='span'>vida em corrotina</Typography>
          </Box>
          <nav>
            <NavLink to="/" className="linkstyle" end>
              Home
            </NavLink>
            <NavLink to="novapostagem"><AddCircleOutlineRoundedIcon /> Nova postagem</NavLink>
          </nav>  
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}


