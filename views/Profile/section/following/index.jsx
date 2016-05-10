import React from 'react'
import Loader from '../../../Loader'
import {RUBY_CHINA_API_V3_URL} from '../../../../constants'
require('./styles')
module.exports=React.createClass({
  getInitialState(){
    return{
      following:[]
    }
  },
  componentDidMount(){
    fetch(`${RUBY_CHINA_API_V3_URL}/users/${this.props.params.id}/following`).then((response)=>response.json()).then((responseJSON)=>{
        this.setState({
          following:responseJSON.following
        })
    })
  },
  render(){
    if (this.state.following.length==0){
      return <div className='container'>
        <Loader style={{backgroundColor:'lightgray'}}/>
      </div>
    }
    return <div className='following-container'>
        {
          this.state.following.map((following)=>{
            return <div key={following.id} className='following'>
            <img className="img-circle img1" src={following.avatar_url}/>
            <div dangerouslySetInnerHTML={{__html:following.name}} className='following-body'/>
            </div>
          })
        }
      </div>
    }

})
