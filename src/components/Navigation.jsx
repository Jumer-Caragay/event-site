import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navigation.module.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar className={styles.navColor} dark expand="lg" fixed="top">
          <NavbarToggler className={styles.toggler} onClick={this.toggle} />
          <Collapse className={`${styles.navFlex}`} isOpen={isOpen} navbar>
            <Nav className={styles.navList} navbar>
              <NavItem onClick={() => this.setState({ isOpen: false })}>
                <a href="#home">Home</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
