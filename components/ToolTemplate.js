import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Link, Paper, Typography, withStyles} from '@material-ui/core';
import Tool from '../models/Tool';

const styles = theme => ({
  paper: {
    marginTop: 100,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  similarToolsTitle: {
    marginBottom: 10,
  },
});

class ToolTemplate extends React.Component {
  generateRecommendations = () => {
    let recommendations = [];
    Tool.recommendedTools[this.props.tool.keyName()].map(tool => {
      recommendations.push(
        <Link href={tool.path} key={tool.keyName()}>
          {tool.name}
        </Link>,
      );
    });
    return recommendations;
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Grid
          container
          spacing={24}
          className={classes.grid}>
          <Grid item xs={1}/>
          <Grid item xs={7}>
            <Paper elevation={1} className={classes.paper}>
              {this.props.children}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={1} className={classes.paper}>
              <Typography variant="h5" component="h3"
                          className={classes.similarToolsTitle}>
                Similar Tools
              </Typography>
              <Typography component="p">
                {this.generateRecommendations()}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ToolTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  tool: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolTemplate);
