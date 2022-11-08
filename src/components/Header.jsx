import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { ListItemText, MenuItem, MenuList } from '@mui/material';

export function Header() {
  return (
    <Box>
      <AppBar sx={{backgroundColor: '#131215'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-around', height: '6rem'}}>
          <Box sx={{display: 'flex', flexDirection: 'row', borderRadius: '0.4rem', padding: '0.5rem'}}>
            <GroupOutlinedIcon sx={{color: '#8257e6'}}/>
            <Typography component='span'>vida em corrotina</Typography>
          </Box>
          <MenuList sx={{display: 'flex', flexDirection: 'row'}}>
            <MenuItem>
              <ListItemText>Sobre nós</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>Contato</ListItemText>
            </MenuItem>
          </MenuList>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


