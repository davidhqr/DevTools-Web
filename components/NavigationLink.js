import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Link from 'next/link';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NavigationLink extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Link href={this.props.tool.path}>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <ArrowRightIcon/>
          </ListItemIcon>
          <ListItemText inset primary={this.props.tool.name}/>
        </ListItem>
      </Link>
    );
  }
}

NavigationLink.propTypes = {
  tool: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationLink);