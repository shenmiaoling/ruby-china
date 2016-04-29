import React from 'react'
import {locales} from '../../settings'

module.exports = React.createClass({
  getInitialState() {
    return {
      q: this.props.location.query.q || ''
    }
  },
  componentDidMount() {
    document.title = locales.zh_CN.search
  },
  handleChange(event) {
    this.setState({
      q: event.target.value
    })
  },
  handleSubmit(event) {

  },
  render() {
    return <div className="container">
      <form accept-charset="UTF-8" onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='text' name='q' value={this.state.q} className='form-control' onChange={this.handleChange} />
        </div>
      </form>
    </div>
  }
})
