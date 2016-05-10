import React from 'react'
import Loader from '../../../Loader'
import { RUBY_CHINA_API_V3_URL }from '../../../../constants'
require('./styles')
module.exports=React.createClass({
  getInitialState(){
    return{
      replies:[]
    }
  },
  componentDidMount(){
    let url = `${RUBY_CHINA_API_V3_URL}/users/${this.props.params.id}/replies`
    fetch(url).then((response)=>response.json()).then((responseJSON)=>{
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
