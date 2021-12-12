// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  searchInput = e => {
    this.setState({searchValue: e.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchValue} = this.state
    const searchDetails = destinationsList.filter(eachValue =>
      eachValue.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div className="top-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-holder">
          <input
            type="search"
            className="search-bar"
            placeholder="Search"
            onChange={this.searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
            value={searchValue}
          />
        </div>
        <ul className="content-holder">
          {searchDetails.map(eachObject => (
            <DestinationItem key={eachObject.id} placeList={eachObject} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
