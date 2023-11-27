import React, { Component } from 'react'
import axios from 'axios';


export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        resp: []
      }
    }
    postToAPI = () => {
//         In the postToApi method, let’s replace the  console log with a call to axios.post().  
// This function takes two parameters: a URL we  would like to POST to, meaning send data to,  
// and an object containing the data we want to send.
        // axios.post("url", {})
        axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            {
                title: 'Hello',
                body: 'it works',
                userID: 123,
            }
        ).then(
            response => {
            console.log(response)
            this.setState({
                resp: Array.isArray(response.data)
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
    const respon = this.state.resp
    return (
      <div>
        <button onClick={this.postToAPI}>
            Create Post
        </button>
        {
            // мы проверяем (тернарным) если пост имеет длину (а значит он не пустой) мы рендерим посты
            // а в противном случае выводим загловок что посты грузяться
            respon.length ? (
                respon.map(post => (
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

export default HTTPPost

// alternative
// import React, { Component } from 'react'
// import axios from 'axios'

// export class HTTPPost extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              apiResponse: null
//         }
//     }
    
//     postToApi = () => {
//         axios.post(
//             'https://jsonplaceholder.typicode.com/posts',
//             {
//                 title: 'Hello world!',
//                 body: 'It works!',
//                 userId: 123,
//             }
//         ).then(response => {
//             this.setState({
//                 apiResponse: response.data
//             })
//         })
//     }
//     render() {
//         const {apiResponse} = this.state;
//         return (
//             <div>
//                 <button onClick={this.postToApi}>
//                     Create Post
//                 </button>
//                 {
//                     apiResponse
//                     ? (<div>
//                         <h1>{apiResponse.title}</h1>
//                         <p>post id: {apiResponse.id}</p>
//                         <p>{apiResponse.body}</p>
//                         <p>user id: {apiResponse.userId}</p>
//                     </div>)
//                     : (<p>please click the button above</p>)
//                 }
//             </div>
//         )
//     }
// }

// export default HTTPPost