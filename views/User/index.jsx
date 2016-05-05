import React from 'react'
import Loader from '../Loader'
import {locales} from '../../settings'
import {RUBY_CHINA_API_V3_URL} from '../../constants'
module.exports=React.createClass({
  getInitialState(){
    return{
      user:null
    }
  },
  componentDidMount(){
    fetch(`${RUBY_CHINA_API_V3_URL}/users/login`).then((response)=>response.json()).then((responseJSON)=>{
      if(responseJSON.user) {
        this.setState({
          user:responseJSON.user
        })
      }
    })
  },
  render(){
    if(this.state.user == null){
      return <div className='container'>
        <Loader styles={{backgroundColor:'lightgray'}}/>
      </div>
    }
    return <div className='container'>
      <h2 className='topics-detail-title'>{this.state.user.avatar_url}</h2>
      <div className='topics-detail-html' dangerouslySetInnerHTML={{__html:this.state.user.body_html}}/>
      </div>
  }
})
