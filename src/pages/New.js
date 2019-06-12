import React, { Component } from 'react'
import api from '../services/api'
import './new.css'

export default class New extends Component {

    state = {
        image:null,
        author:'',
        place:'',
        description:'',
        hashtags:''
    }

    handleSubmit = async e => {
        e.preventDefault()
        const data = new FormData()
        data.append('image',this.state.image)
        data.append('author',this.state.author)
        data.append('place',this.state.place)
        data.append('description',this.state.description)
        data.append('hashtags',this.state.hashtags)
       
        await api.post('posts',data)
        this.props.history.push('/')
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleImageChange = e => {
        this.setState({image:e.target.files[0]})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="new-post">
                <input onChange={this.handleImageChange} type="file"/>
                <input value={this.state.author} onChange={this.handleChange} name="author" placeholder="Name Author" type="text"/>
                <input value={this.state.place} onChange={this.handleChange} name="place" placeholder="Place" type="text"/>
                <input value={this.state.description} onChange={this.handleChange} name="description" placeholder="Description" type="text"/>
                <input value={this.state.hashtags } onChange={this.handleChange} name="hashtags" placeholder="Hash Tags" type="text"/>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}
