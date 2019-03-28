import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import SearchAppBar from './SearchAppBar';

const styles = theme => ({
  paper: {
    marginTop: 100,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  removeSpacesTitle: {
    marginBottom: 10,
  },
  similarToolsTitle: {
    marginBottom: 10,
  },
  button: {
    margin: 30,
    justifyContent: 'center',
  },
});

class RemoveSpaces extends React.Component {
  state = {
    input: 'Hello World',
    spacesRemoved: '',
  };

  handleChange = () => event => {
    this.setState({
      input: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      spacesRemoved: this.state.input.replace(/ /g, ''),
    });
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        <SearchAppBar/>
        <Grid
          container
          spacing={24}
          className={classes.grid}>
          <Grid item xs={1}/>
          <Grid item xs={7}>
            <Paper elevation={1} className={classes.paper}>
              <Typography variant="h5" component="h3"
                          className={classes.removeSpacesTitle}>
                Remove Spaces
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                label="Enter string"
                multiline
                rows="8"
                fullWidth
                value={this.state.input}
                onChange={this.handleChange()}
                margin="normal"
                variant="outlined"
              />
              <Grid container justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"
                          className={classes.button} onClick={this.handleClick}>
                    Remove Spaces
                  </Button>
                </Grid>
              </Grid>
              <TextField
                id="outlined-multiline-flexible"
                label="Result"
                multiline
                rows="8"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.state.spacesRemoved}
                margin="normal"
                variant="outlined"
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={1} className={classes.paper}>
              <Typography variant="h5" component="h3"
                          className={classes.similarToolsTitle}>
                Similar Tools
              </Typography>
              <Typography component="p">
                <Link href="/">
                  Remove Dashes
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

RemoveSpaces.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemoveSpaces);
