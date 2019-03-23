import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TextFieldsIcon from '@material-ui/icons/TextFields'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {IconButton, Typography} from '@material-ui/core';
import Link from 'next/link';

const styles = theme => ({
  brand: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 300,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NavigationDrawer extends React.Component {
  state = {
    open: false,
    stringOpen: false,
  };

  handleStringClick = () => {
    this.setState(state => ({stringOpen: !state.stringOpen}));
  };

  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  render() {
    const {classes} = this.props;

    const leftList = (
      <div className={classes.list}>
        <Typography variant="h6" color="primary" className={classes.brand}>
          DevTools
        </Typography>
        <Divider/>
        <List>
          <ListItem button onClick={this.handleStringClick}>
            <ListItemIcon>
              <TextFieldsIcon/>
            </ListItemIcon>
            <ListItemText inset primary="String Tools"/>
            {this.state.stringOpen ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>

          <Collapse in={this.state.stringOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Remove Spaces', 'Trash', 'Spam'].map((text) => (
                <Link href="/remove-spaces">
                  <ListItem button className={classes.nested}
                            key={text} >
                    <ListItemIcon>
                      <ArrowRightIcon/>
                    </ListItemIcon>
                    <ListItemText inset primary={text}/>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    );

    return (
      <div>
        <IconButton className={classes.menuButton}
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.toggleDrawer(true)}>
          <MenuIcon/>
        </IconButton>
        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer(false)}
          >
            {leftList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationDrawer);
