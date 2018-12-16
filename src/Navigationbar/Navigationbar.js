import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import './Navigationbar.css';

class Navigationbar extends Component {
  render() {
    return(
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <div className="brand">UltraReddit</div>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
            <form onSubmit={this.props.addSub}>
              <FormGroup controlId="formBasicText">
                <FormControl
                  type="text"
                  value={this.props.newSubreddit}
                  placeholder="new subreddit"
                  onChange={this.props.handleChange}
                />
              </FormGroup>{' '}
              <Button type="submit">Add</Button>
            </form>
            </Navbar.Form>
            <Nav pullRight>
              <NavDropdown title="Subreddits" id="basic-nav-dropdown">
                { this.props.subreddits.map((subreddit, index) =>
                  <MenuItem> {subreddit}
                    <Button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={() => this.props.removeSub(index)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </Button>
                  </MenuItem>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );

  }
}

export default Navigationbar;
