import React from 'react'
import {locales} from '../../../../settings'
import Loader from '../../../Loader'
import {Link} from 'react-router'
require('./styles')
module.exports=React.createClass({
  getInitialState(){
    return{
      followers:[]
    }
  },
  componentDidMount(){
    fetch(this.props.source).then((response)=>response.json()).then((responseJSON)=>{
        this.setState({
          followers:responseJSON.followers
        })
    })
  },
  render(){
    if (this.state.followers.length==0){
      return <div className='container'>
        <Loader style={{backgroundColor:'lightgray'}}/>
      </div>
    }
    return <div className='followers-container'>
        {
          this.state.followers.map((followers)=>{
            return <div key={followers.id} className='follower'>
            <img className="img-circle img1" src={followers.avatar_url}/>
            <div dangerouslySetInnerHTML={{__html:followers.name}} className='followers-body'/>
            </div>
          })
        }
      </div>
  }
})




