import React, { Component } from 'react'
import api from '../services/api'
import PostArticle from '../components/PostArticle'
import io from 'socket.io-client'
import './feed.css'


export default class Feed extends Component {

   state = {
       feed:[]
   }
	
   async componentDidMount(){
	 this.registerToSocket()
	 const response = await api.get('posts')
	 this.setState({ feed: response.data })
   }

   registerToSocket = () => {
	   const socket = io('http://localhost:3001')
	   socket.on('post', newPost => {
           this.setState({ feed:[ newPost, ...this.state.feed] })
	   })
	 
	   socket.on('like', liked => {
           this.setState({feed: this.state.feed.map(itemLike => {
			    return itemLike._id == liked._id ? liked : itemLike 
	       })
	     })
	   })
   }

    render() {
        return (
          <section id="post-list">
			  {this.state.feed.map(item => {
                  return <PostArticle {...item}/>
			  })}
          </section>
        )
    }
}
