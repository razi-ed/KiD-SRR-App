import React from 'react';
import {
  Select as Selection,
  MenuItem,
  FormControl,
  FormHelperText,
  Input,
  InputLabel
} from 'material-ui';
import isUndefined from 'lodash/isUndefined';

export default class Select extends React.Component {
  state = {
    value: isUndefined(this.props.value) ? this.props.defaultValue : this.props.value
  };

  _onChange = (e) => {
    this.setState({ value: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
  };

  render() {
    return (
      <FormControl
        fullWidth={this.props.fullWidth ? true : false}
        className={this.props.className}
      >
        <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
        <Selection
          value={_.isUndefined(this.props.value) ? this.state.value : this.props.value}
          input={(
            <Input
              name={this.props.name}
              id={this.props.id}
            />
          )}
          onChange={this._onChange}
        >
          {_.map(
            this.props.options,
            (option) => (
              <MenuItem
                value={option.value}
                key={`select_item_${this.props.id}_${option.value}`}
              >
                {option.label}
              </MenuItem>
            )
          )}
        </Selection>
      </FormControl>
    );
  }
}