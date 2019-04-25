import React from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, Typography, withStyles} from '@material-ui/core';
import SearchAppBar from './SearchAppBar';
import ImageCard from './ImageCard';
import Laptop from '../static/laptop.png';
import Tool from '../models/Tool';

const styles = theme => ({
  image: {
    width: 300,
    height: 'auto',
    marginTop: 100,
  },
  title: {
    marginTop: 30,
    fontWeight: 100,
    textAlign: 'center',
  },
  description: {
    marginTop: 30,
    fontWeight: 100,
    textAlign: 'center',
  },
  explore: {
    marginTop: 30,
  },
  cards: {
    marginTop: 50,
    width: '100%',
  },
  footer: {
    backgroundColor: '#1D2331',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
    width: '100%',
    position: 'relative',
    bottom: 0,
  },
  footerGrid: {
    margin: 30,
  },
  footerSubtitle: {
    fontWeight: 500,
  },
});

class Home extends React.Component {
  generateCards = () => {
    let cards = [];
    Tool.featuredTools.map(tool => {
      cards.push(
        <Grid item xs={6} sm={4} md={3} lg={2} key={tool.keyName()}>
          <ImageCard tool={tool} key={tool.keyName()}/>
        </Grid>,
      );
    });
    return cards;
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <SearchAppBar/>
        <Grid
          container
          direction="column"
          alignItems="center">
          <img src={Laptop}
               className={classes.image} alt="DevTools icon"/>
          <Typography variant="h3" color="primary" className={classes.title}>
            DEVELOPER TOOLS
          </Typography>
          <Typography variant="h5" color="primary"
                      className={classes.description}>
            A suite of tools designed specifically for developers.
          </Typography>
          <Button variant="outlined" color="primary"
                  className={classes.explore}>
            Explore Tools
          </Button>
          <Grid
            container
            className={classes.cards}
            spacing={16}
            justify="center">
            {this.generateCards()}
          </Grid>
        </Grid>
        <footer className={classes.footer}>
          <Typography variant="h5" align="center" color="secondary"
                      gutterBottom>
            DevTools
          </Typography>
          <Grid container spacing={16} className={classes.footerGrid}>
            <Grid item xs={3}>
              <Typography variant="subtitle1" color="secondary"
                          className={classes.footerSubtitle}>
                Tool Type 1
              </Typography>
              <Typography component="p" color="secondary">
                Tool1
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" color="secondary"
                          className={classes.footerSubtitle}>
                Tool Type 2
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" color="secondary"
                          className={classes.footerSubtitle}>
                Tool Type 3
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" color="secondary"
                          className={classes.footerSubtitle}>
                Tool Type 4
              </Typography>
            </Grid>
          </Grid>
        </footer>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
