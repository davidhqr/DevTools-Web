import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Tool from '../models/Tool';
import NavigationLink from './NavigationLink';

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

  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  handleStringClick = () => {
    this.setState(state => ({stringOpen: !state.stringOpen}));
  };

  generateStringTools = () => {
    let navigationLinks = [];
    Object.values(Tool.allTools).map(tool => {
      navigationLinks.push(<NavigationLink tool={tool} key={tool.keyName()}/>);
    });
    return navigationLinks;
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
              {this.generateStringTools()}
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
