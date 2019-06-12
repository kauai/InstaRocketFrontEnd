import React, { Component } from 'react'
import './feed.css'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'


export default class Feed extends Component {
    render() {
        return (
          <section id="post-list">
              <article>
                  <header>
                      <div className="user-info">
                          <span>Thiago kauai</span>
                          <span className="place">Guarujá</span>
                      </div>
					  <img src={more} alt="Mais"/>
                  </header>
				  <img src="http://localhost:3001/files/background.jpg" alt="Background"/>
                  <footer>
					  <div className="actions">
						  <img src={like} alt=""/>
						  <img src={comment} alt=""/>
						  <img src={send} alt=""/>
					  </div>
						  <strong>900 curtidas</strong>
						  <p>Lorem ipsum dolor sit amet. <span>#react #omnistack #dev</span></p>
				  </footer>
			  </article>

              <article>
                  <header>
                      <div className="user-info">
                          <span>Thiago kauai</span>
                          <span className="place">Guarujá</span>
                      </div>
					  <img src={more} alt="Mais"/>
                  </header>
				  <img src="http://localhost:3001/files/background.jpg" alt="Background"/>
                  <footer>
					  <div className="actions">
						  <img src={like} alt=""/>
						  <img src={comment} alt=""/>
						  <img src={send} alt=""/>
					  </div>
						  <strong>900 curtidas</strong>
						  <p>Lorem ipsum dolor sit amet. <span>#react #omnistack #dev</span></p>
				  </footer>
			  </article>
          </section>
        )
    }
}
