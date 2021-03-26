import React from 'react';
import { connect } from 'react-redux';
import { updateTitle } from '../store'

class EditTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: props.selectedTitle.length > 0 ? props.selectedTitle[0].cover : '../../public/assets/img/placeholder.jpeg',
      currentEpisode: props.selectedTitle.length > 0 ? props.selectedTitle[0].currentEpisode : 0,
      totalEpisode: props.selectedTitle.length > 0 ? props.selectedTitle[0].totalEpisode : 0,
      startedOn: props.selectedTitle.length > 0 && props.selectedTitle[0].startedOn ? props.selectedTitle[0].startedOn.slice(0,10) : '',
      finishedOn: props.selectedTitle.length > 0 && props.selectedTitle[0].finishedOn ? props.selectedTitle[0].finishedOn.slice(0,10) : '',
      rating: props.selectedTitle.length > 0 ? props.selectedTitle[0].rating : '',
      personalNote: props.selectedTitle.length > 0 ? props.selectedTitle[0].personalNote : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const merged = {...this.state, finishedOn: new Date(this.state.finishedOn), startedOn:new Date(this.state.startedOn)}
    console.log({...this.props.selectedTitle[0], ...merged})
    this.props.updateTitle({...this.props.selectedTitle[0], ...merged})
  }

  render() {
    console.log(this.state)
    return (
      <div className='edit'>
        <form onSubmit={this.handleSubmit}>
          <h2>Edit progress & notes</h2>
          <label htmlFor='cover'>Cover</label>
          <input type='text' name='cover' value={this.state.cover} onChange={this.handleChange}/>
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
              <option value='★★★★★'>★★★★★</option>
              <option value='★★★★'>★★★★</option>
              <option value='★★★'>★★★</option>
              <option value='★★'>★★</option>
              <option value='★'>★</option>
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

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    updateTitle: (selectedTitle) => {
      return dispatch(updateTitle(selectedTitle,history))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditTitle)
