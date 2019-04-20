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
};

class ImageToBase64Converter extends React.Component {
  state = {
    output: '',
    files: [],
  };

  getBase64 = file => {
    const that = this;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      that.setState({
        output: reader.result,
      });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  handleClick = () => {
    if (this.state.files.length > 0) {
      this.getBase64(this.state.files[0]);
    } else {
      this.props.enqueueSnackbar('Select an image first', {autoHideDuration: 2000})
    }
  };

  onChange = files => {
    this.setState({
      files: files,
    });
  };

  render() {
    const {classes} = this.props;
    const tool = Tool.allTools.imageToBase64Converter;

    return (
      <div>
        <SearchAppBar/>
        <ToolTemplate tool={tool}>
          <div>
            <Typography variant="h5" component="h3"
                        className={classes.title}>
              {tool.name}
            </Typography>
            <DropzoneArea
              onChange={this.onChange.bind(this)}
            />
            <Grid container justify="center">
              <Grid item>
                <Button variant="contained" color="primary"
                        className={classes.convertButton}
                        onClick={this.handleClick}>
                  Convert To Base64 String
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

ImageToBase64Converter.propTypes = {
  classes: PropTypes.object.isRequired,
};

const App = withStyles(styles)(withSnackbar(ImageToBase64Converter));

function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <App/>
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;
