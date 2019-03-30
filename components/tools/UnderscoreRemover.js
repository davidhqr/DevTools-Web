import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import {SnackbarProvider, withSnackbar} from 'notistack';
import CopyToClipboard from 'react-copy-to-clipboard';
import SearchAppBar from '../SearchAppBar';
import ToolTemplate from '../ToolTemplate';
import Tool from '../../models/Tool';

const styles = {
  title: {
    marginBottom: 10,
  },
  convertButton: {
    margin: 20,
  },
  copyButton: {
    margin: 10,
  },
};

class UnderscoreRemover extends React.Component {
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
      output: this.state.input.replace(/_/g, ''),
    });
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        <SearchAppBar/>
        <ToolTemplate tool={Tool.allTools.underscoreRemover}>
          <div>
            <Typography variant="h5" component="h3"
                        className={classes.title}>
              Underscore Remover
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
                  Remove Underscores
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
            <Grid container justify="center">
              <Grid item>
                <CopyToClipboard text={this.state.output}
                                 onCopy={() => this.props.enqueueSnackbar('Copied to clipboard', {autoHideDuration: 1500})}>
                  <Button variant="contained"
                          className={classes.copyButton}>
                    Copy To Clipboard
                  </Button>
                </CopyToClipboard>
              </Grid>
            </Grid>
          </div>
        </ToolTemplate>
      </div>
    );
  }
}

UnderscoreRemover.propTypes = {
  classes: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

const App = withStyles(styles)(withSnackbar(UnderscoreRemover));

function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;
