import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: null

      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            console.log(response);
            this.setState({
                // мы присваиваем полученные данны нашему стейту пост.
                // но до этого мы с помощью тернарного оператора проверяем
                // возращается ли массив объектов или одинарный пост (например если 
                // https://jsonplaceholder.typicode.com/posts/1)
                // так как в рендере мы применяем мап нам нужен массив даже с одног поста
              posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
            })
          }).catch(error => {
            this.setState({
              error: error.message
            })
          })
      }
  render() {
    const posts = this.state.posts
    return (
      <div>
        <h2>Posts:</h2>
        {
            // мы проверяем (тернарным) если пост имеет длину (а значит он не пустой) мы рендерим посты
            // а в противном случае выводим загловок что посты грузяться
          posts.length ? (
            posts.map(post => (
              <div key={post.id}>
                <h2>{post.id}. {post.title}</h2>
                <h4>By User ID {post.userId}</h4>
                <p>{post.body}</p>
                <hr />
              </div>
            ))
          ) : (
              this.state.error
                ? <p>{this.state.error}</p>
                : <h4>Loading posts ...</h4>
            )
        }
      </div>
    )
  }
}

export default HTTPRequests