import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';

const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

const getSuggestionValue = suggestion => suggestion;

class AddGeoInput extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (e, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onKeyDown = (e) => {
    const { value } = this.state;
    if (e.keyCode == 13) {
      this.props.addGeo(value);
    }
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const geocoder = window.ymaps.geocode(inputValue)

    geocoder.then( res => {
      this.setState({
        suggestions: res.geoObjects.toArray().map( result => result.getAddressLine() )
      })
    })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Поиск',
      value,
      className: 'form-control',
      onChange: this.onChange,
      onKeyDown: this.onKeyDown
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default AddGeoInput;
