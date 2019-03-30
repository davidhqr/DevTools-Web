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
  footer: {
    backgroundColor: '#1D2331',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  footerGrid: {
    margin: 30,
  },
  footerSubtitle: {
    fontWeight: 500,
  },
});

class ToolTemplate extends React.Component {
  generateRecommendations = () => {
    let recommendations = [];
    Tool.recommendedTools[this.props.tool.keyName()].map(tool => {
      recommendations.push(
        <Typography component="p">
          <Link href={tool.path} key={tool.keyName()}>
            {tool.name}
          </Link>
        </Typography>,
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
          spacing={24}>
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
              {this.generateRecommendations()}
            </Paper>
          </Grid>
        </Grid>
        <footer className={classes.footer}>
          <Typography variant="h5" align="center" color="secondary" gutterBottom>
            DevTools
          </Typography>
          <Grid container spacing={16} className={classes.footerGrid}>
            <Grid item xs={3}>
              <Typography variant="subtitle1" color="secondary" className={classes.footerSubtitle}>
                Tool Type 1
              </Typography>
              <Typography component="p" color="secondary">
                Tool1
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" color="secondary" className={classes.footerSubtitle}>
                Tool Type 2
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" color="secondary" className={classes.footerSubtitle}>
                Tool Type 3
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" color="secondary" className={classes.footerSubtitle}>
                Tool Type 4
              </Typography>
            </Grid>
          </Grid>
        </footer>
      </div>
    );
  }
}

ToolTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  tool: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolTemplate);
