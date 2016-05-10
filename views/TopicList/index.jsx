import React from 'react'
import {Link} from 'react-router'
import {locales} from '../../settings'
import Loader from '../Loader'
import superagent from 'superagent'
require('./styles')

module.exports = React.createClass({
  getInitialState() {
    return {
      topics: [],
      loading: null
    }
  },
  componentDidMount() {
    this.fetchTopics()
  },
  // fetchTopics(options={}) {
  //   fetch(`${this.props.source}${this.props.source.match(/\?/) ? '&' : '?'}offset=${this.state.topics.length}`).then((response) => response.json()).then((responseJSON) => {
  //     if (responseJSON.topics) {
  //       this.setState({
  //         loading:false,
  //         topics: this.state.topics.concat(responseJSON.topics)
  //       })
  //     }
  //   })
  // },
  fetchTopics(){
    superagent.get(`${this.props.source}${this.props.source.match(/\?/) ? '&' : '?'}offset=${this.state.topics.length}`).end((err,response)=>{
      this.setState({
        loading:false,
        topics: this.state.topics.concat(response.body.topics)
      })
    })
  },
  render() {
    if(this.state.topics.length == 0) {
      return <div>
        <Loader style={{backgroundColor:'lightgray'}} />
      </div>
    }
    return <div className='container'>
    <table className="table topics-table">
      <tbody>
        {
          this.state.topics.map((topic,index) => {
            return <tr key={index}>
              <td>
                <Link to={`/users/${topic.user.login}`}>
                  <img src={topic.user.avatar_url} className="img-circle" />
                </Link>
              </td>
              <td>
                <Link to={`/topics/${topic.id}`}>{topic.title}</Link>
              </td>
              <td>{topic.node_name}</td>
              <td className="text-xs-center">
                <code>{topic.replies_count}</code>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
    <div style={{marginBottom:'25px'}} className='text-xs-center'>
      {
        this.state.loading ? <Loader style={{backgroundColor:'lightgray'}}/> : <a href='/' className='btn btn-secondary-outline' onClick={(e)=>{
          e.preventDefault()
          this.setState({
            loading:true
          },()=>{
            this.fetchTopics()
          })
        }}>{locales.zh_CN.load_more}</a>
      }
    </div>
  </div>
  }
})
