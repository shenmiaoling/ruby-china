import React from 'react'

module.exports = React.createClass({
  render() {
    return <div className="loaders">
      <div className="loader text-xs-center">
        <div className="loader-inner line-scale-pulse-out">
          <div style={this.props.style}></div>
          <div style={this.props.style}></div>
          <div style={this.props.style}></div>
          <div style={this.props.style}></div>
          <div style={this.props.style}></div>
        </div>
      </div>
    </div>
  }
})
