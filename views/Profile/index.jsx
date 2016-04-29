import React from 'react'
import Loader from '../Loader'
import {locales} from '../../settings'
import {RUBY_CHINA_API_V3_URL} from '../../constants'

module.exports = React.createClass({
  getInitialState() {
    return {
      user: null
    }
  },
  componentDidMount() {
    fetch(`${RUBY_CHINA_API_V3_URL}/users/${this.props.params.id}`).then((response) => response.json()).then((responseJSON) => {
      if (responseJSON.user) {
        this.setState({
          user: responseJSON.user
        })

        document.title = responseJSON.user.name
      }
    })
  },
  render() {
    if (this.state.user == null) {
      return <div className="container">
        <Loader style={{backgroundColor: 'lightgray'}} />
      </div>
    }

    return <div className="container">
      <div className="user-avatar">
        <img src={this.state.user.avatar_url} className="img-rounded" />
      </div>
    </div>
  }
})
