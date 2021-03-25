import React from 'react';
import { connect } from 'react-redux';

class EditTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      // currentEpisode: this.props.selectedTitle.length > 0 ? this.props.selectedTitle[0].currentEpisode : '',
      // totalEpisode: this.props.selectedTitle.length > 0 ? this.props.selectedTitle[0].totalEpisode : '',
      // startedOn: this.props.selectedTitle.length > 0 ? this.props.selectedTitle[0].startedOn : '',
      // finishedOn: this.props.selectedTitle.length > 0 ? this.props.selectedTitle[0].finishedOn : '',
      // rating: this.props.selectedTitle.length > 0 ? this.props.selectedTitle[0].rating : '',
      // personalNote: this.props.selectedTitle.length > 0 ? this.props.selectedTitle[0].personalNote : '',
      currentEpisode: this.props && this.props.selectedTitle.length > 0 ? this.props.selectedTitle[0].currentEpisode : 0,
      totalEpisode: this.props && this.props.selectedTitle.length > 0 ? this.props.selectedTitle[0].totalEpisode : 0,
      startedOn: '',
      finishedOn: '',
      rating: '',
      personalNote: ''
    }
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render() {
    console.log(this.props.selectedTitle);
    return (
      <div className='edit'>
        <form>
          <h2>Edit progress & notes</h2>
          <label htmlFor='currentEpisode'>Current episode/chapter I'm on</label>
          <input type="number" id='currentEpisode' name='currentEpisode' value={this.state.currentEpisode} onChange={this.handleChange} />
          <label htmlFor='totalEpisode'>Total number of episodes/chapters</label>
          <input type="number" id='totalEpisode' name='totalEpisode' value={this.state.totalEpisode} onChange={this.handleChange} />
          <label htmlFor='startedOn'>I started reading/watching this on</label>
          <input type="date" id='startedOn' name='startedOn' value={this.state.startedOn} onChange={this.handleChange} />
          <label htmlFor='finishedOn'>I finished this on</label>
          <input type="date" id='finishedOn' name='finishedOn' value={this.state.finishedOn} onChange={this.handleChange} />
          <label>
          My rating:
          <select name='rating' value={this.state.rating} onChange={this.handleChange}>
            <option value=''>--Select an option--</option>
              <option value='5'>★★★★★</option>
              <option value='4'>★★★★</option>
              <option value='3'>★★★</option>
              <option value='2'>★★</option>
              <option value='1'>★</option>
            </select>
          </label>
          <label htmlFor='personalNote'>My note</label>
          <textarea type='text' name='personalNote' rows='5' value={this.state.personalNote} onChange={this.handleChange} />
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTitle: state.selectedTitle
  }
}

export default connect(mapStateToProps)(EditTitle)
