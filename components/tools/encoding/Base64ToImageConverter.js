import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import DropzoneArea from '../../DropzoneArea';
import SearchAppBar from '../../SearchAppBar';
import ToolTemplate from '../../ToolTemplate';
import Tool from '../../../models/Tool';
import {SnackbarProvider, withSnackbar} from 'notistack';
import CopyToClipboard from 'react-copy-to-clipboard';

const styles = {
  title: {
    marginBottom: 10,
  },
  convertButton: {
    margin: 20,
    justifyContent: 'center',
  },
  copyButton: {
    margin: 10,
  },
  image: {
    maxWidth: '50%',
    maxHeight: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};

class Base64ToImageConverter extends React.Component {
  state = {
    input: '',
    clicked: false,
  };

  handleChange = () => event => {
    this.setState({
      input: event.target.value,
      clicked: false,
    });
  };

  handleConvertClick = () => {
    this.setState({
      clicked: true,
    });
  };

  handleDownloadClick = () => {

  };

  render() {
    const {classes} = this.props;
    const tool = Tool.allTools.base64ToImageConverter;

    return (
      <div>
        <SearchAppBar/>
        <ToolTemplate tool={tool}>
          <div>
            <Typography variant="h5" component="h3"
                        className={classes.title}>
              {tool.name}
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter base64 string"
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
                        onClick={this.handleConvertClick}>
                  Convert To Image
                </Button>
              </Grid>
            </Grid>
            {this.state.clicked &&
            (<div>
              <img src={this.state.input} className={classes.image}/>
              <Grid container justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"
                          className={classes.convertButton}
                          onClick={this.handleDownloadClick}>
                    Download
                  </Button>
                </Grid>
              </Grid>
            </div>)
            }
          </div>
        </ToolTemplate>
      </div>
    );
  }
}

Base64ToImageConverter.propTypes = {
  classes: PropTypes.object.isRequired,
};

const App = withStyles(styles)(withSnackbar(Base64ToImageConverter));

function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <App/>
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;
