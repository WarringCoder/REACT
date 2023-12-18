import React, { Component } from 'react'

export class User extends Component {

  render() {
    const { avatar_url, login, html_url } = this.props.user;
    return (
        <div className='card'> 
            <img className='img-fluid rounded-start avatar' src={avatar_url} alt="" />
            <div className='card-body'>
                <h5 className='card-title'>{login} </h5>
                 <a href={html_url} className='btn btn-primary me-2' target="blank">GitHub</a>
            </div>
        </div>
        
    )
  }
}

export default User