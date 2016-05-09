import React from 'react'
import Loader from '../../../Loader'
module.exports=React.createClass({
  getInitialState(){
    return{
      following:[]
    }
  },
  componentDidMount(){
    fetch(this.props.source).then((response)=>response.json()).then((responseJSON)=>{
        this.setState({
          following:responseJSON.following
        })
    })
  },
  render(){
    if (this.state.following && this.state.following.length > 0){
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
    return
      <div className='container'>
        <Loader style={{backgroundColor:'lightgray'}}/>
      </div>

  }
})
