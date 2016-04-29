import React from 'react'
import Loader from '../Loader'
import {locales} from '../../settings'
import {RUBY_CHINA_API_V3_URL} from '../../constants'
require('./styles')
module.exports = React.createClass({
  getInitialState(){
    return{
      topic:null
    }
  },
  componentDidMount(){
    fetch(`${RUBY_CHINA_API_V3_URL}/topics/${this.props.params.id}`).then((response)=>response.json()).then((responseJSON)=>{
      if(responseJSON.topic) {
        this.setState({
          topic:responseJSON.topic
        })
      }
    })
  },
  render(){
    if(this.state.topic == null){
      return <div className='container'>
        <Loader styles={{backgroundColor:'lightgray'}}/>
      </div>
    }
    return <div className='container'>
      <h2 className='topics-detail-title'>{this.state.topic.title}</h2>
      <div className='topics-detail-html' dangerouslySetInnerHTML={{__html:this.state.topic.body_html}}/></div>
  }
})
