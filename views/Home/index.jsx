import React from 'react'
import {locales} from '../../settings'
import TopicList from '../TopicList'
import {RUBY_CHINA_API_V3_URL} from '../../constants'

module.exports = React.createClass({
  componentDidMount(){
    document.title = locales.zh_CN.home
  },
  render(){
    return <div className='container'>
      <TopicList source={`${RUBY_CHINA_API_V3_URL}/topics` }/>
    </div>
  }
})
