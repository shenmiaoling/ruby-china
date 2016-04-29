import React from 'react'
import {locales} from '../../settings'
import TopicList from '../TopicList'
module.exports = React.createClass({
  componentDodMount(){
    document.title = locales.zh_CN.latest
  },
  render(){
    return <div className='container'>
      <TopicList source="https://ruby-china.org/api/v3/topics?type=recent"/>
    </div>
  }
})
