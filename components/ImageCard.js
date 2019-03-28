import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
};

export default withStyles(styles)(ImgMediaCard);
