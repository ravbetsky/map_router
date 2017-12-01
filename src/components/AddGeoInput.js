import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

const getSuggestionValue = suggestion => suggestion.name;

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
    const { value, suggestions } = this.state;
    if (e.keyCode === 13 && suggestions.length > 0) {
      const correctSuggestion = suggestions.filter( item => item.name === value )
      const geoObject = correctSuggestion.length > 0 ? correctSuggestion[0] : suggestions[0]
      const { name, point } = geoObject
      this.props.addGeo(name, point);
    }
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const geocoder = window.ymaps.geocode(inputValue)

    geocoder.then( res => {
      this.setState({
        suggestions: res.geoObjects.toArray().map( result => {
          return {
            'name': result.getAddressLine(),
            'point': result.geometry.getCoordinates()
          }
        })
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
