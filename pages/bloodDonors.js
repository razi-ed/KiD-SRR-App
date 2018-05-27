import React, { Component, Fragment } from 'react';
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import DonorsList from '../components/DataList';
import Select from '../components/Select'
import AdderForm from '../components/BloodDonorAdderDialog'
import withRoot from '../src/withRoot'

const data = [
  { name: "Name", address: "Locality", bloodGroup: "O+", mobile: "Test123123" },
  { name: "Name1", address: "Locality1", bloodGroup: "A+", mobile: "Test123123" },
  { name: "Name2", address: "Locality2", bloodGroup: "B+", mobile: "Test123123" },
  { name: "Name3", address: "Locality3", bloodGroup: "O-", mobile: "Test123123" },
  { name: "Name4", address: "Locality4", bloodGroup: "O-", mobile: "Test123123" },
  { name: "Name5", address: "Locality5", bloodGroup: "A-", mobile: "Test123123" },
]

class BloodDonors extends Component {
  state={
    country:'',
    _state: '',
    city: '',
    locality: '',
    bloodGroup: '',
    openAdderForm: false
  }

  _openAdderForm = () => {
    this.setState({
      openAdderForm: true
    })
  }
  
  _closeAdderForm = () => {
    this.setState({
      openAdderForm: false
    })
  }
  
  _onCall = e => {
    alert("calling " + e.mobile);
  }
  
  _onSelect = (e,name) => {
    this.setState({
      [name]: e
    });
  }

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
      onChange={(e)=>{
        this._onSelect(e,"_state");
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
      onChange={(e)=>{
        this._onSelect(e,"city");
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
      onChange={(e)=>{
        this._onSelect(e,"locality");
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
      onChange={(e)=>{
        this._onSelect(e,"locality");
      }}
    />
  )

  _list = () => (
    <DonorsList
      onCall={this._onCall}
      data={data}
    />
  )

  _AdderForm = () => (
    <AdderForm
      openForm={this.state.openAdderForm}
      closeForm={this._closeAdderForm}
    />
  )

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}>
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
          <div style={{
            minWidth: "10rem"
          }}>
            {this._bloodGroup()}
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: ".6rem"
          }}>
            <Button
              variant="raised"
              color='primary'
              onClick={this._openAdderForm}
            >
              Enlist as Donor
            </Button>
            <Button variant="raised">
              <SearchIcon />
              Search
            </Button>
          </div>
        </div>
        <div>
          {this._list()}
          {this._AdderForm()}
        </div>
      </div>
    )
  }
}

export default withRoot(BloodDonors);