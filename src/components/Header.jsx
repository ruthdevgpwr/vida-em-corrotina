import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { ListItemText, MenuItem, MenuList } from '@mui/material';

export function Header() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Box>
            <GroupOutlinedIcon/>
            <Typography>vida em corrotina</Typography>
          </Box>
          <MenuList>
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
