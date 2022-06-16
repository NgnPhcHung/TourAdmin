import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Employee from '../../pages/Employee';
import Customer from '../../pages/Customer';
import Tour from '../../pages/Tour';
import Order from '../../pages/Order/Order';
import SideBar from '../Sidebar';
import TourDetail from '../../pages/Tour/TourDetail';

const Section = styled.div`
    top: 12rem;
    width: 100rem;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
`;

const index = () => {
    return (
        <Section>
            <SideBar />
            <Routes>
                <Route path='/' element={<Customer />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/orders' element={<Order />} />
                <Route path='/customers' element={<Customer />} />
                <Route path='/tour' element={<Tour />} />
                <Route path='/tour/edit/:tourID' element={<TourDetail />} />
            </Routes>
        </Section>
    );
};

export default index;
