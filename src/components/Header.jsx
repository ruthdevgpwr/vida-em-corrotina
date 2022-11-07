import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { ListItemText, MenuItem, MenuList } from '@mui/material';

export function Header() {
  return (
    <>
      <AppBar position="fixed" sx={{ left: '0' , backgroundColor: '#202024'}}>
        <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 55px 15px 105px'}}>
          <Box sx={{display: 'flex', alignContent: 'center', alignItems: 'center' , bgcolor: '#0F77D9', borderRadius: '0.3rem', padding: '0.3rem'}}>
            <GroupOutlinedIcon  sx={{color: '#18548c', fontSize: '1.6rem'}}/>
            <Typography component="h1" fontSize={'1.3rem'} sx={{lineHeight: '1.5'}}>vida em corrotina</Typography>
          </Box>
          <MenuList sx={{display: 'flex'}}>
            <MenuItem>
              <ListItemText>Sobre nós</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>Contato</ListItemText>
            </MenuItem>
          </MenuList>
        </Toolbar>
      </AppBar>
    </>
  );
}
