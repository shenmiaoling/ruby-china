import React from 'react'
import {locales} from '../../../../settings'
import Loader from '../../../Loader'
import {Link} from 'react-router'
require('./styles')
module.exports=React.createClass({
  getInitialState(){
    return{
      replies:[]
    }
  },
  componentDidMount(){
    fetch(this.props.source).then((response)=>response.json()).then((responseJSON)=>{
        this.setState({
          replies:responseJSON.replies
        })
    })
  },
  render(){
    if (this.state.replies.length==0){
      return <div className='container'>
        <Loader style={{backgroundColor:'lightgray'}}/>
      </div>
    }
    return <div className='replies-container'>
        {
          this.state.replies.map((reply)=>{
            return <div key={reply.id} className='reply'>
              <div dangerouslySetInnerHTML={{__html:reply.body_html}} className='reply-body'/>
            </div>
          })
        }
      </div>
  }
})
