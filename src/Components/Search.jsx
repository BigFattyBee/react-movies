import React from "react"

class Search extends React.Component {
    state = {
        search: ''
    }

    handleKeyDown = event => {
        if (event.key === 'Enter')
            this.props.onSearch(this.state.search)
    }

    render () {
        return (
            <div className="row">
            <div className="input-field col s12">
              <input 
                id="search" type="search" className="validate" 
                value={this.state.search}
                onChange={e => this.setState({search: e.target.value})}
                onKeyDown={this.handleKeyDown}
              />
              <label htmlFor="search">Search</label>
            </div>
          </div>
        )
    }
}

export default Search