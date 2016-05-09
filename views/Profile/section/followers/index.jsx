import React from 'react'
import {locales} from '../../../../settings'
import Loader from '../../../Loader'
import {Link} from 'react-router'
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
        console.log(this.state.followers)
  },
  render(){
    if (this.state.followers.length==0){
      return <div className='container'>
        <Loader style={{backgroundColor:'lightgray'}}/>
      </div>
    }
    return <div className='replies-container'>
        {
          this.state.followers.map((followers)=>{
            return <div key={followers.id} className='reply'>
              <div dangerouslySetInnerHTML={{__html:followers.id}} className='reply-body'/>
            </div>
          })
        }
      </div>
  }
})
