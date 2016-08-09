import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    let barStyle = {
      width:'60%', 
      margin: '0 auto', 
      padding:'20px 0 20px 0',
    }

    let inputStyle = { borderRadius: 0 }

    return (
      <div className="form-group"
        style={barStyle}>
        <input
          style={inputStyle}
          placeholder='Type to search...'
          className='form-control'
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
