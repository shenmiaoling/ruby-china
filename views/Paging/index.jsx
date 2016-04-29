import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
require('./styles')

const Paging=React.createClass({

  getInitialState(){
    return {
      pages:new Array(100),
       digital:this.props.params.item-1
    }
  },

  componentDidMount() {
    let pages=this.state.pages
      for(let i=0;i<pages.length;i++){
         pages[i]=i+1
    }
  },

     paging(id,event){
    fetch('https://ruby-china.org/api/v3/topics?limit=12&offset='+id*12).then((response)=>{
      return response.json()
    }).then((json)=>{
      this.setState({topics:json.topics})
    })
  },
  render() {
      return(
          <div>
            {this.state.pages.map((item,id)=>{
            return (
              <Link to={`/topics/${item}`} onClick={this.paging.bind(this,id)}>{item}</Link>
            )
          })}
          </div>
        )
  }
})
export default Paging;
