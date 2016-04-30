import React from 'react'
import RUBY_CHINA_API_V3_URL from '../../constants'
import Detail from '../Detail'
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
      if(responseJSON.replies) {
        this.setState({
          replies:responseJSON.replies
        })
      }
    })
  },
  render(){
    return <div className='container'>
        {
          this.state.replies.map((reply)=>{
            return <div key={reply.id} className='reply'>
              <Link to={`/users/${reply.user.login}`}>
                <img src={reply.user.avatar_url} className="img-circle" />
              </Link>
              <div dangerouslySetInnerHTML={{__html:reply.body_html}} className='reply-body'/>
            </div>
          })
        }
      </div>
  }
})
