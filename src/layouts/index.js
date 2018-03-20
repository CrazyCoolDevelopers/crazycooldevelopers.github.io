import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/typography.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <div>
        <Helmet
          title="Gatsby Default (Blog) Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div
          style={{
            background: `blue`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1rem 0.75rem`,
            }}
          >
            <h1>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                crazy cool developers
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,

            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}
