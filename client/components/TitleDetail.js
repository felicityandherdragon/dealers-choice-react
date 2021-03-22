import React from 'react';
import {connect} from 'react-redux';
import { Line, Circle } from 'rc-progress';

const TitleDetail = (props) => {
  console.log(props);
  if (props.selectedTitle.length > 0) {
    if (props.match.params.id*1 === props.selectedTitle[0].id) {
      return (
        <div className='title-detail'>
          <h2>{props.selectedTitle[0].name}</h2>
          <ul>
            <li><h3>Status</h3><p>{props.selectedTitle[0].status.name}</p></li>
            <li>
            <h3>Progress:100%</h3>
            <Circle
              className='progress'
              percent={100}
              strokeWidth={10}
              strokeColor={{
                '0%': '#f29640',
                '100%': '#cba6e3',
                }}
            />
            </li>
            <li><h3>Current episode</h3><p>{props.selectedTitle[0].current_episode}</p></li>
            <li><h3>Total episode</h3><p>{props.selectedTitle[0].total_episode}</p></li>
            <li><h3>Started on</h3><p>{props.selectedTitle[0].started_on}</p></li>
            <li><h3>Finished on</h3><p>{props.selectedTitle[0].finished_on}</p></li>
            <li><h3>Personal Rating</h3><p>{props.selectedTitle[0].rating}</p></li>
            <li><h3>Personal note</h3><p>{props.selectedTitle[0].personal_note}</p></li>
          </ul>
          <div className='CTAs'>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  } else {
    return (
      <p>Loading...</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTitle: state.selectedTitle
  }
}

export default connect(mapStateToProps)(TitleDetail);
