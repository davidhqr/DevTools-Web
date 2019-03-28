import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 240,
    marginBottom: 16,
  },
  cardTitle: {
    fontWeight: 500,
  },
  media: {
    objectFit: 'cover',
  },
};

class ImgMediaCard extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea href={this.props.tool.path}>
          <CardContent>
            <Typography gutterBottom variant="subtitle1"
                        className={classes.cardTitle}>
              {this.props.tool.name}
            </Typography>
            <Typography component="p">
              {this.props.tool.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={this.props.tool.path}>
            Use this tool
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  tool: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
