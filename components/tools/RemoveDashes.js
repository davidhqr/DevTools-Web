import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import SearchAppBar from '../SearchAppBar';
import ToolTemplate from '../ToolTemplate';
import Tool from '../../models/Tool';

const styles = {
  title: {
    marginBottom: 10,
  },
  convertButton: {
    margin: 30,
    justifyContent: 'center',
  },
};

class RemoveDashes extends React.Component {
  state = {
    input: 'Hello World',
    output: '',
  };

  handleChange = () => event => {
    this.setState({
      input: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      output: this.state.input.replace(/-/g, ''),
    });
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        <SearchAppBar/>
        <ToolTemplate tool={Tool.allTools.removeDashes}>
          <div>
            <Typography variant="h5" component="h3"
                        className={classes.title}>
              Remove Dashes
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
                        className={classes.convertButton}
                        onClick={this.handleClick}>
                  Remove Dashes
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
              value={this.state.output}
              margin="normal"
              variant="outlined"
            />
          </div>
        </ToolTemplate>
      </div>
    );
  }
}

RemoveDashes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemoveDashes);
