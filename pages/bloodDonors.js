import React, { Component, Fragment } from 'react';
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import DonorsList from '../components/DataList';
import Select from '../components/Select'

const data = [
  { name: "NameOfDonor", address: "Locality", bloodGroup: "O+", mobile: "Test123123" }
]

export default class BloodDonors extends Component {
  state={
    _state: '',
    city: '',
    locality: ''
  }
  
  _onCall = e => {
    alert("calling " + e.mobile);
  }
  
  _onSelect = (e,name) => {
    this.setState({
      [name]: e
    });
  }

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

  _list = () => (
    <DonorsList
      onCall={this._onCall}
      data={data}
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
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "1.6rem"
        }}>
          <div style={{
            width: "10rem"
          }}>
            {this._state()}
          </div>
          <div style={{
            width: "10rem"
          }}>
            {this._city()}
          </div>
          <div style={{
            width: "10rem"
          }}>
            {this._locality()}
          </div>
          <div>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div>
          {this._list()}
        </div>
      </div>
    )
  }
}
