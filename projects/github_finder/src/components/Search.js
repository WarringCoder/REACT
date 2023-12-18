import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         keyword: ''
      }

    }
    onChange =(e) =>
      {
        this.setState({
          keyword: e.target.value
        })
        
      }

      onSubmit =(e) =>
      {
        e.preventDefault();
        if(this.state.keyword.length === 0)
        {
          this.props.ErrorControls("Lütfen aramak istediğiniz kullanıcı adını giriniz!", "danger");
        }
        else
        {
           this.props.SearchUsers(this.state.keyword);
        }
       
      }
  render() {
    return ( 
      <div>
        <div className='input-group mb-3 mt-4'>
          <input type="text" className='form-control' onChange={this.onChange} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button onClick={this.onSubmit} className='btn btn-outline-secondary' type="button" id="button-addon2">Button</button>
        </div>
        {
          this.props.ShowClearButton &&
          <button onClick={this.props.ClearUsers} className="btn btn-outline-danger clear">Temizle...</button>
        }
        </div>
    )
  }
}

export default Search