import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import SearchAppBar from './SearchAppBar';
import ImageCard from './ImageCard';
import Laptop from '../static/laptop.png';
import Tool from '../models/tool';

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
});

class Home extends React.Component {
  featuredTools = [
    new Tool('Remove Spaces', 'Remove all spaces in a string of text', '/remove-spaces', null),
    new Tool('Remove Dashes', 'Remove all dashes in a string of text', '/remove-dashes', null),
  ];

  generateCards = () => {
    let cards = [];
    this.featuredTools.map(tool => {
      cards.push(
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <ImageCard tool={tool}/>
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
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
