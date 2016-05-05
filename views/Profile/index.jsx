// import React from 'react'
// import Loader from '../Loader'
// import {locales} from '../../settings'
// import {RUBY_CHINA_API_V3_URL} from '../../constants'

// module.exports = React.createClass({
//   getInitialState() {
//     return {
//       user: null
//     }
//   },
//   componentDidMount() {
//     fetch(`${RUBY_CHINA_API_V3_URL}/users/${this.props.params.id}`).then((response) => response.json()).then((responseJSON) => {
//       if (responseJSON.user) {
//         this.setState({
//           user: responseJSON.user
//         })

//         document.title = responseJSON.user.name
//       }
//     })
//   },
//   render() {
//     if (this.state.user == null) {
//       return <div className="container">
//         <Loader style={{backgroundColor: 'lightgray'}} />
//       </div>
//     }

//     return <div className="container">
//       <div className="user-avatar">
//         <img src={this.state.user.avatar_url} className="img-rounded" />
//       </div>
//     </div>
//   }
// })
import React from 'react'
import Loader from '../Loader'
import {locales} from '../../settings'
import {RUBY_CHINA_API_V3_URL} from '../../constants'
require('./styles')
module.exports=React.createClass({
  getInitialState(){
    return{
      user:null
    }
  },
  componentDidMount(){
    fetch(`${RUBY_CHINA_API_V3_URL}/users/${this.props.params.id}`).then((response)=>response.json()).then((responseJSON)=>{
      if(responseJSON.user) {
        this.setState({
          user:responseJSON.user
        })
        console.log(this.state.user)
        document.title = responseJSON.user.name
      }
    })
  },
  render(){
    if(this.state.user == null){
      return <div className='container'>
        <Loader styles={{backgroundColor:'lightgray'}}/>
      </div>
    }
    return <div className='container-fluid'>
      <div className='container2'>
      <img className='topics-detail-title img-circle'src={this.state.user.avatar_url}/>
      <span className="label label-success">{this.state.user.level_name}</span>

      <div className='topics-detail-html' >{this.state.user.login}({this.state.user.name})
      </div>
      <div className='topics-detail-html' >第{this.state.user.id}位会员</div>
      <div className='topics-detail-html' >
      {this.state.user.company} @ {this.state.user.location}</div>
      <div className='topics-detail-html' >{this.state.user.topics_count}篇帖子 · {this.state.user.replies_count}条回帖</div>
      <div className='topics-detail-html' dangerouslySetInnerHTML={{__html:this.state.user.body_html}}/>
      </div>
      </div>

  }
})
