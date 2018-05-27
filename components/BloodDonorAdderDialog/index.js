import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Select from '../Select'
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from "@material-ui/icons/Call";


class BloodDonorAdderDialog extends React.Component {
  state = {
    open: false,
    country: '',
    _state: '',
    city: '',
    locality: '',
    bloodGroup: '',
    gender: '',
    name: '',
    mobile: '',
    email: '',
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.openForm === prevState.open){
      return null;
    }
    return {
      open:nextProps.openForm
    }
  }

  handleClose = () => {
    this.props.closeForm();
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  _country = () => (
    <Select
      id="selectCountry"
      name="country"
      label="Select Country"
      value={this.state.country}
      fullWidth
      // defaultValue={}
      // options={}
      onChange={(e) => {
        this._onSelect(e, "country");
      }}
    />
  )

  _state = () => (
    <Select
      id="selectState"
      name="state"
      label="Select State"
      value={this.state._state}
      fullWidth
      // defaultValue={}
      // options={}
      onChange={(e) => {
        this._onSelect(e, "_state");
      }}
    />
  )

  _city = () => (
    <Select
      id="selectCity"
      name="state"
      label="Select City"
      value={this.state.city}
      fullWidth
      // defaultValue={}
      // options={}
      onChange={(e) => {
        this._onSelect(e, "city");
      }}
    />
  )

  _locality = () => (
    <Select
      id="selectLocality"
      name="locality"
      label="Select Locality"
      value={this.state.locality}
      fullWidth
      // defaultValue={}
      // options={}
      onChange={(e) => {
        this._onSelect(e, "locality");
      }}
    />
  )

  _bloodGroup = () => (
    <Select
      id="selectBloodGroup"
      name="bloodGrouop"
      label="Select BloodGroup"
      value={this.state.bloodGroup}
      fullWidth
      // defaultValue={}
      // options={}
      onChange={(e) => {
        this._onSelect(e, "locality");
      }}
    />
  )

  _gender = () => (
    <Select
      id="selectGender"
      name="gender"
      label="Select Gender"
      value={this.state.gender}
      fullWidth
      // defaultValue={}
      // options={}
      onChange={(e) => {
        this._onSelect(e, "gender");
      }}
    />
  )

  _name = () => (
    <div>
      <TextField
        id="inputName"
        label="Name"
        fullWidth
        value={this.state.name}
        onChange={this.handleChange('name')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    </div>
  )

  _mobileNum = () => (
    <div>
      <TextField
        id="inputMobile"
        label="Mobile"
        fullWidth
        value={this.state.mobile}
        onChange={this.handleChange('mobile')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CallIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  )

  _email = () => (
    <div>
      <TextField
        id="inputEmail"
        label="Email"
        fullWidth
        value={this.state.email}
        onChange={this.handleChange('email')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  )

  render() {
    const { fullScreen } = this.props;
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="BloodDonorAdder-dialog-title"
        >
          {/* <DialogTitle id="BloodDonorAdder-dialog-title">
          {"Use Google's location service?"}
          </DialogTitle> */}
          <DialogContent>
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._name()}
                </div>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._mobileNum()}
                </div>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._email()}
                </div>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._bloodGroup()}
                </div>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._gender()}
                </div>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._country()}
                </div>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._state()}
                </div>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._city()}
                </div>
                <div style={{
                  minWidth: "10rem"
                }}>
                  {this._locality()}
                </div>
              </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="accent">
              close
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

BloodDonorAdderDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(BloodDonorAdderDialog);