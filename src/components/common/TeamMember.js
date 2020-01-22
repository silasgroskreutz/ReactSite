import React, { Component } from 'react';

class TeamMember extends Component {
  render() {
    return (
      <div class='col-sm-4'>
        <div class='team-member'>
          <img class='mx-auto rounded-circle' src='{this.props.image}' alt='team photo' />
          <h4>Kay Garland</h4>
          <p class='text-muted'>Lead Designer</p>
          <ul class='list-inline social-buttons'>
            <li class='list-inline-item'>
              <a href='#'>
                <i class='fab fa-twitter'></i>
              </a>
            </li>
            <li class='list-inline-item'>
              <a href='#'>
                <i class='fab fa-facebook-f'></i>
              </a>
            </li>
            <li class='list-inline-item'>
              <a href='#'>
                <i class='fab fa-linkedin-in'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamMember;
