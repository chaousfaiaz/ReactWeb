import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong><i class="fas fa-graduation-cap"></i> EDUCATION</strong>
            </h6>
            <hr />
            <div className="row mt">

              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Ryerson University</strong>
                    <span>2018 - 2020</span>
                  </h6>
                  <p className="pt">
                   Bachelors of Engineer
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Centennial College</strong>
                    <span>2020 - 2022</span>
                  </h6>
                  <p className="pt">
                  Software Engineering Technology
                  </p>
                </blockquote>
              </div>
      
       <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Seneca College</strong>
                    <span>2020 - 2022</span>
                  </h6>
                  <p className="pt">
                  Software Development
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Relevant Courses</strong>
                    <span></span>
                  </h6>
                  <p className="pt">
                  AI, Networks, Algorithms, Databases, Data Structures, Human-Computer Interaction, Software Engineering (Intro, 1, 2), Software Project Management
                  </p>
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
