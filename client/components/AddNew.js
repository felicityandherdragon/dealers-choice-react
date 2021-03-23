import React from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { addNew } from '../store.js';

class AddNew extends React.Component {
  constructor() {
    super()
    this.state = {
      name:'',
      cover:'',
      link:'',
      currentEpisode: 0,
      totalEpisode: 0,
      startedOn: '',
      finishedOn: '',
      rating: '',
      categoryId: 0,
      statusId: 0,
      personalNote:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addNew({...this.state, finishedOn: new Date(this.state.finishedOn), startedOn:new Date(this.state.startedOn)});
  }

  handleChange(ev) {
    if (ev.target.name === 'category' || ev.target.name === 'status') {
      this.setState({
        [ev.target.name]: ev.target.value*1
      })
    } else {
      this.setState({
        [ev.target.name]: ev.target.value
      })
    }
  }

  render() {
    return (
      <div className='add-new'>
      <h2>Add a new record</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Title name</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <label>
          Status
            <br/>
            <select name='statusId' value={this.state.statusId} onChange={this.handleChange}>
              <option value=''>--Select an option--</option>
              <option value='1'>READY TO START</option>
              <option value='2'>IN PROGRESS</option>
              <option value='3'>FINISHED</option>
            </select>
          </label>
          <label htmlFor='link'>Where are you watching this / reading this title?</label>
          <input type='url' name='link' value={this.state.link} onChange={this.handleChange}/>
          <label>
          Category
            <br/>
            <select name='categoryId' value={this.state.categoryId} onChange={this.handleChange}>
            <option value=''>--Select an option--</option>
              <option value='1'>MANGA</option>
              <option value='2'>ANIME</option>
              <option value='3'>TV SHOWS</option>
              <option value='4'>BOOK</option>
              <option value='5'>GAME</option>
            </select>
          </label>
          <label htmlFor='currentEpisode'>Current episode/chapter I'm on</label>
          <input type="number" id='currentEpisode' name='currentEpisode' value={this.state.currentEpisode} onChange={this.handleChange} />
          <label htmlFor='totalEpisode'>Total number of episodes/chapters</label>
          <input type="number" id='totalEpisode' name='totalEpisode' value={this.state.totalEpisode} onChange={this.handleChange} />
          <label htmlFor='startedOn'>I started reading/watching this on</label>
          <input type="date" id='startedOn' name='startedOn' value={this.state.startedOn} onChange={this.handleChange} />
          <label htmlFor='finishedOn'>I finished this on</label>
          <input type="date" id='finishedOn' name='finishedOn' value={this.state.finishedOn} onChange={this.handleChange} />
          <label htmlFor='personalNote'>My note</label>
          <textarea type='text' name='personalNote' rows='5' value={this.state.personalNote} onChange={this.handleChange} />
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    addNew: (title) => {
      return dispatch(addNew(title,history))
    }
  }
}

export default connect(null,mapDispatchToProps)(AddNew)
