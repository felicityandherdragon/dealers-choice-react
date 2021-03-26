import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';
import { deleteTitle } from '../store';

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
            <h3>Progress:{props.selectedTitle[0].progress}%</h3>
            <Circle
              className='progress'
              percent={props.selectedTitle[0].progress}
              strokeWidth={10}
              strokeColor={{
                '0%': '#91c2f7',
                '100%': '#f9c627',
                }}
            />
            </li>
            <li><h3>Current episode/Chapter</h3><p>{props.selectedTitle[0].currentEpisode}</p></li>
            <li><h3>Total number of episodes/Chapters</h3><p>{props.selectedTitle[0].totalEpisode}</p></li>
            <li><h3>Started on</h3><p>{props.selectedTitle[0].startedOn}</p></li>
            <li><h3>Finished on</h3><p>{props.selectedTitle[0].finishedOn? props.selectedTitle[0].finishedOn: 'Haven\'t finished yet' }</p></li>
            <li><h3>Personal Rating</h3><p>{props.selectedTitle[0].rating}</p></li>
            <li><h3>Personal note</h3><p>{props.selectedTitle[0].personalNote}</p></li>
          </ul>
          <div className='CTAs'>
            <button>
              <Link to={'/category/title/edit'}>
              Edit
              </Link>
            </button>
            <button onClick={() => props.deleteTitle(props.selectedTitle[0])}>Delete</button>
          </div>
        </div>
      )
    } else {
      return null
    }
  } else {
    return (
      <div className='title-detail'>
        <p>Please select a title to see details</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTitle: state.selectedTitle
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteTitle: (selectedTitle) => {
      return dispatch(deleteTitle(selectedTitle, history))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TitleDetail);
