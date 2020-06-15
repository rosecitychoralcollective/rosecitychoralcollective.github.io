import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, IconButton, Tab, Tabs, MenuItem, Menu,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/styles';
import useWindowSize from '../hooks/useWindowSize';
import useTabs from '../hooks/useTabs';
import availableStyles from '../resources/availableStyles';

const Header = ({ style, setStyle }) => {
  const [tabs, tabIndex, changeTabs] = useTabs();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const useStyles = makeStyles({
    ...style,
  });

  const classes = useStyles();

  const menuItems = availableStyles.map((_, i) => `Style ${i + 1}`);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (index) => {
    setStyle(index);
    handleClose();
  };

  const [width] = useWindowSize();

  return (
    <div>
      {
        width >= 0
          ? (
            <AppBar className={classes.header}>
              <Tabs
                value={tabIndex}
                onChange={changeTabs}
                aria-label="tab bar"
                variant="scrollable"
                scrollButtons="auto"
                classes={{ indicator: classes.indicator }}
              >
                {
                  tabs.map((tab) => (
                    <Tab key={tab.name} label={tab.name} />
                  ))
                }
                <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="end" onClick={handleClick} color="inherit">
                  <MoreIcon />
                </IconButton>
                <Menu
                  id="menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((name, index) => (
                    <MenuItem
                      key={name}
                      onClick={() => handleMenuClick(index)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Menu>
              </Tabs>
            </AppBar>
          )
          : (
            <AppBar className={classes.header}>
              <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="end" onClick={handleClick} color="inherit">
                <MoreIcon />
              </IconButton>
            </AppBar>
          )
      }
    </div>
  );
};

Header.propTypes = {
  style: PropTypes.shape.isRequired,
  setStyle: PropTypes.func.isRequired,
};

export default Header;
