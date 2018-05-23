import React, { Component } from 'react';
import DonorsList from '../components/DataList';
import Select from '../components/Select'

const data = [
  { name: "razi", address: "tcr", bloodGroup: "O+", mobile: "9112233445" }
]

export default class BloodDonors extends Component {
  state={}
  
  _onCall = e => {
    alert("calling " + e.mobile);
  }
  
  // _state = () => (
  //   <Select
  //     id={}
  //     name={}
  //     label={}
  //     value={}
  //     defaultValue={}
  //     options={}
  //     onChange={}
  //   />
  // )

  _list = () => (
    <DonorsList
      onCall={this._onCall}
      data={data}
    />
  )

  render() {
    return (
      <div>
        {this._list()}
      </div>
    )
  }
}
