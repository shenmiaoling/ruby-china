import React from 'react'
import {locales} from '../../settings'
import  {RUBY_CHINA_API_URL} from '../../constants'
import {stringify} from 'query-string'
module.exports = React.createClass({
  contextTypes:{
    router:React.PropTypes.object
  },
  getInitialState(){
    return {
      login: {
        username:'',
        password:'',
        grant_type:'password'
      }
    }
  },
  componentDidMount(){
    document.title=locales.zh_CN.login
  },
  handleSubmit(event) {
    event.preventDefault()

    // fetch(RUBY_CHINA_API_URL + '/oauth/token?' + stringify(this.state.login), {
    //   method: 'POST'
    // }).then((response) => response.json()).then((responseJSON) => {
    //   if (responseJSON.access_token) {
    //     localStorage.setItem('access_token', responseJSON.access_token)
    //     this.props.setAuthorizedUser()
    //     this.context.router.push('/')
    //   }
    // })
    let xhr = new XMLHttpRequest();
    if (xhr!=null){

    xhr.open('POST',RUBY_CHINA_API_URL + '/oauth/token?' + stringify(this.state.login),false);
    xhr.send();
    let topickey=JSON.parse(xhr.response);
    if (topickey.access_token) {
        localStorage.setItem('access_token', topickey.access_token)
        this.props.setAuthorizedUser()
        this.context.router.push('/')
      }
    }
  },
  handleChange(event){
    const login = this.state.login
    login[event.target.name]=event.target.value
    this.setState({
      login:login
    })
  },
  render(){
    return <div className='container'>
      <form accept-charset='UTF-8' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>{locales.zh_CN.username}</label>
          <input type='text' name="username" value={this.state.login.username} className='form-control' onChange={this.handleChange}>
          </input>
          <label htmlFor='password'>{locales.zh_CN.password}</label>
          <input type='password' name="password" value={this.state.login.password} className='form-control' onChange={this.handleChange}>
          </input>
        </div>
        <button className='btn btn-primary'>{locales.zh_CN.login}</button>
      </form>
    </div>
  }
})
