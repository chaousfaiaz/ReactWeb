import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0 hide-on-med-and-down pt">
          <div className="card-content social">
            <h2 className="grey-text text-darken-3">
              <strong>MD FAIAZ</strong>
            </h2>
            <h5 className="grey-text text-darken-1">Full Stack Web Developer</h5>
                <a href="https://www.youtube.com/c/EngineeringQuest/videos" target="blank">
                    <i className="fa-brands fa-youtube fa-2x">
                </a>
                <a href="https://github.com/chaousfaiaz" target="blank">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
          </div>
        </div>
      </div>
    )
  }
}
