import React from 'react'
import Loader from '../../../Loader'
import {RUBY_CHINA_API_V3_URL} from '../../../../constants'
import TopicList from '../../../TopicList'
module.exports=React.createClass({
  getInitialState(){
    return{
      favorites:[]
    }
  },
  // componentDidMount(){
  //   fetch(`${RUBY_CHINA_API_V3_URL}/users/${this.props.params.id}/favorites`).then((response)=>response.json()).then((responseJSON)=>{

  //       this.setState({
  //         favorites:responseJSON.topics
  //       })
  //   })
  // },
  render(){
    return <div style={{'marginTop':'100px'}}>
      <TopicList source={`${RUBY_CHINA_API_V3_URL}/users/${this.props.params.id}/favorites` } />
    </div>
    }

})
