import styled from 'styled-components';
import React from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import * as AiIcon from 'react-icons/ai';
import * as IOIcon from 'react-icons/io';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 95vh;
    width: 10rem;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.body};
    box-shadow: 10px 10px 15px -3px rgba(0, 0, 0, 0.1);
    justify-content: center;
    margin-top: 2rem;
    font-weight: 700;
    position: fixed;
    top: 0;
    left: 0.5rem;
`;

const Menu = styled.li`
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;
    list-style: none;
    align-items: center;
`;
const MenuItem = styled.ul`
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
    font-size: ${(props) => props.theme.fontlg};
    border: none;
    color: #000;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    &::after {
        position: absolute;
        content: '';
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        direction: rtl;
        z-index: -1;
        box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
            7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
        transition: all 0.3s ease;
    }
    &:hover {
        color: #000;
    }
    &:hover:after {
        left: auto;
        right: 0;
        width: 100%;
    }
    &:active {
        top: 2px;
    }
`;

const index = () => {
    return (
        <Container>
            <Menu>
                <Link to='/customers' className='nav-link'>
                    <MenuItem>Customer</MenuItem>
                </Link>
                <Link to='/tour' className='nav-link'>
                    <MenuItem>Tour</MenuItem>
                </Link>

                <Link to='/orders' className='nav-link'>
                    <MenuItem>Order</MenuItem>
                </Link>
                <Link to='/employee' className='nav-link'>
                    <MenuItem>Employee</MenuItem>
                </Link>
            </Menu>
        </Container>
    );
};

export default index;
