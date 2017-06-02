import React from 'react';
import AppBar from 'material-ui/AppBar';

const Navigation = () => (
  <AppBar
    title={<a href="/" style={{ textDecoration: 'none' }}><font color="white">Pretzel</font></a>}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{ backgroundColor: 'black' }}
  />
);

export default Navigation;
