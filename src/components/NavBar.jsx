import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


class NavBar extends React.Component {

 render() {
    return (<BottomNavigation
    value="Favorites"
    onChange={(newValue) => {
        setValue(newValue);
    }}
    showLabels
    >
    <BottomNavigationAction label="Recents" />
    <BottomNavigationAction label="Favorites"  />
    <BottomNavigationAction label="Nearby" />
    </BottomNavigation>
    )
  }
}

export default NavBar;