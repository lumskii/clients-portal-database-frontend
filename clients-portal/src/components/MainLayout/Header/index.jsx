import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';
import {
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import { auth } from '../../../firebase';
import { Wrapper, SearchBox, RightMenus, Item, Badge } from './styles';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = {
    name: 'Michael Smith',
    avatar:
      'https://images.unsplash.com/profile-1518156163490-947fb5399aa6?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
  };

  return (
    <Wrapper>
      <SearchBox>
        <input type="text" placeholder="Search anything here..." />
        <FaSearch />
      </SearchBox>

      <RightMenus>
        <Item>
          <FaRegBell />
          <Badge>2</Badge>
        </Item>
        <Item>
          <BsChatDots />
          <Badge>2</Badge>
        </Item>

        <Tooltip title={user.name}>
          <IconButton onClick={handleClick} size="small">
            <Avatar
              src={user.avatar}
              sx={{ width: 30, height: 30, cursor: 'pointer' }}
            />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem sx={{ pointerEvents: 'none' }}>{user.name}</MenuItem>
          <Divider />
          <MenuItem onClick={() => auth.signOut()}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </RightMenus>
    </Wrapper>
  );
};

export default Header;
