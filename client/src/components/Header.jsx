import React from 'react';

export class Header extends React.Component{
  render() {
    return (
      <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">
                Emaily
            </a>
            <ul className="right">
                <li>
                    <a>Login With Google</a>
                </li>
            </ul>
          </div>
      </nav>
    );
  };
};
