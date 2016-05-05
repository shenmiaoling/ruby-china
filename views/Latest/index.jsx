import React from 'react'
import {locales} from '../../settings'
import TopicList from '../TopicList'
import {RUBY_CHINA_API_V3_URL} from '../../constants'
module.exports = React.createClass({
  componentDodMount(){
    document.title = locales.zh_CN.latest
  },
  render(){
    return <div className='container'>
      <TopicList source={`${RUBY_CHINA_API_V3_URL}/topics?type=recent`}/>
    </div>
  }
})
