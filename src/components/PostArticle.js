import React from 'react'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import api from '../services/api';

const PostArticle = ({_id,author, place, image, likes, description, hashtags }) => {
    
    function handleLike(id){
        api.post(`/posts/${id}/like`)
    }
    
    return (
        <article key={_id}>
        <header>
            <div className="user-info">
                <span><b>{ author }</b></span>
                <span className="place">{ place }</span>
            </div>
            <img src={more} alt="Mais"/>
        </header>
        <img src={`http://localhost:3001/files/${ image }`} alt="Background"/>
        <footer>
            <div className="actions">
                <button className="buttonLike" type="button" onClick={() => handleLike(_id)}><img src={like} alt=""/></button>
                <img src={comment} alt=""/>
                <img src={send} alt=""/>
            </div>
                <strong>{likes} curtidas</strong>
                <p>{ description }<span>{ hashtags }</span></p>
        </footer>
    </article>
    )
}

export default PostArticle
