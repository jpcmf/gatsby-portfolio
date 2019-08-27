import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class Header extends Component {
  state = {
    isMenuOpen: false,
  }
  componentDidMount() {}
  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen
    }));
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  }

  render = () => {
    const { siteTitle } = this.props;
    // console.log(this.props);

    const { isMenuOpen } = this.state;
    const burgerClass = isMenuOpen ? 'is-active' : '';

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item"to="/">{siteTitle}</Link>
            <button type="button" className={`navbar-burger ${burgerClass}`} aria-label="menu" aria-expanded="false" onClick={this.handleMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className={`navbar-menu ${burgerClass}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/" onClick={this.closeMenu}>Home</Link>
              <Link className="navbar-item" to="/projects" onClick={this.closeMenu}>Projects</Link>
              <Link className="navbar-item" to="/blog" onClick={this.closeMenu}>Blog</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
