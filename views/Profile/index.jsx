
import React from 'react'
import Loader from '../Loader'
import {locales} from '../../settings'
import {RUBY_CHINA_API_V3_URL} from '../../constants'
import SectionOne from './section/one'
import Replies from './section/replies'
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
  handleClick(){
    Replies
  },
  render(){
    let section = this.state.section;
    if(this.state.user == null){
      return <div className='container'>
        <Loader styles={{backgroundColor:'lightgray'}}/>
      </div>
    }
    return <div className='container-fluid'>
      <div className='container2'>
        <div className='container3'>
          <img className='topics-detail-title img-circle'src={this.state.user.avatar_url}/>
          <span className="label label-success">{this.state.user.level_name}</span>
          <div className='label-right'>
            <div className='topics-detail-html' >{this.state.user.login}({this.state.user.name})
            </div>
            <div className='topics-detail-html' >第{this.state.user.id}位会员</div>
            <div className='topics-detail-html' >
            {this.state.user.company} @ {this.state.user.location}</div>
            <div className='topics-detail-html' >{this.state.user.topics_count}篇帖子 · {this.state.user.replies_count}条回帖</div>
            <div className='topics-detail-html' dangerouslySetInnerHTML={{__html:this.state.user.body_html}}/>
            </div>
          </div>
          <div className='count'>
            <span className='count1'>{this.state.user.followers_count}</span>
            <span className='count2'>{this.state.user.following_count}</span>
            <span className='count3'>{this.state.user.favorites_count}</span>
          </div>
          <div className='count-text'>
            <span className='count-text1'>关注者</span>
            <span className='count-text2'>正在关注</span>
            <span className='count-text3'>收藏</span>
            <div className='bottom'>{this.state.user.tagline}</div>
          </div>
        </div>
        <div className='rightbar'>
          <span className='span1' onClick={this.handleClick}>个人信息</span>
          <span className='span2'>帖子</span>
          <span className='span3' onClick={this.handleClick}>回帖</span>
          <span className='span4'>收藏</span>
          <span className='span5'>记事本</span>
          <span className='span6'>正在关注</span>
          <span className='span7'>关注者</span>
          <div className='container'>
            <Replies source={`${RUBY_CHINA_API_V3_URL}/users/${this.state.user.login}/replies`}/>
          </div>
        </div>
      </div>

  }
})
