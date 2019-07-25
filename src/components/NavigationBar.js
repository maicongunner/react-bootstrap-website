import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .nav-item a {
        margin: 0 5px;
        color: #bbb;
        text-decoration: none;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        text-decoration: none;

        &:hover {
            color: white;            
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Link to="/">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/about">About</Link></Nav.Item>
                    <Nav.Item><Link to="/contact">Contact</Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


