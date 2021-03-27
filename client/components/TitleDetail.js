import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';
import { deleteTitle, getTitleDetail } from '../store';

class TitleDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTitleDetail(this.props.match.params.id*1)
  }

  render() {
    console.log(this.props);
    if (this.props.selectedTitle.length > 0) {
      if (this.props.match.params.id*1 === this.props.selectedTitle[0].id) {
        return (
          <>
          <div className='title-detail'>
            <div className='title-info'>
              <h2>{this.props.selectedTitle[0].name}</h2>
              <ul>
                <li><h3>Status</h3><p>{this.props.selectedTitle[0].status.name}</p></li>
                <li>
                <h3>Progress:{this.props.selectedTitle[0].progress}%</h3>
                <Circle
                  className='progress'
                  percent={this.props.selectedTitle[0].progress}
                  strokeWidth={10}
                  strokeColor={{
                    '0%': '#91c2f7',
                    '100%': '#f9c627',
                    }}
                />
                </li>
                <li><h3>Current episode/Chapter</h3><p>{this.props.selectedTitle[0].currentEpisode}</p></li>
                <li><h3>Total number of episodes/Chapters</h3><p>{this.props.selectedTitle[0].totalEpisode}</p></li>
                <li><h3>Started on</h3><p>{this.props.selectedTitle[0].startedOn}</p></li>
                <li><h3>Finished on</h3><p>{this.props.selectedTitle[0].finishedOn? this.props.selectedTitle[0].finishedOn: 'Haven\'t finished yet' }</p></li>
                <li><h3>Personal Rating</h3><p>{this.props.selectedTitle[0].rating}</p></li>
                <li><h3>Personal note</h3><p>{this.props.selectedTitle[0].personalNote}</p></li>
              </ul>
            </div>
            <div className='CTAs'>
              <img src={this.props.selectedTitle[0].cover} />
              <button>
                <Link to={'/category/title/edit'}>
                Edit
                </Link>
              </button>
              <button onClick={() => this.props.deleteTitle(this.props.selectedTitle[0])}>Delete</button>
            </div>
          </div>
          </>
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
    },
    getTitleDetail: (titleId) => {
      return dispatch(getTitleDetail(titleId))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TitleDetail);
