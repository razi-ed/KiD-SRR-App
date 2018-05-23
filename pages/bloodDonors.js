import React, { Component, Fragment } from 'react';
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import DonorsList from '../components/DataList';
import Select from '../components/Select'

const data = [
  { name: "Name", address: "Locality", bloodGroup: "O+", mobile: "Test123123" },
  { name: "Name1", address: "Locality1", bloodGroup: "A+", mobile: "Test123123" },
  { name: "Name2", address: "Locality2", bloodGroup: "B+", mobile: "Test123123" },
  { name: "Name3", address: "Locality3", bloodGroup: "O-", mobile: "Test123123" },
  { name: "Name4", address: "Locality4", bloodGroup: "O-", mobile: "Test123123" },
  { name: "Name5", address: "Locality5", bloodGroup: "A-", mobile: "Test123123" },
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
          flexDirection: "column",
          justifyContent: "space-around",
        }}>
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
            display: "flex",
            justifyContent: "flex-end",
            marginTop: ".6rem"
          }}>
            <Button>
              <SearchIcon />
              Search
            </Button>
          </div>
        </div>
        <div>
          {this._list()}
        </div>
      </div>
    )
  }
}
