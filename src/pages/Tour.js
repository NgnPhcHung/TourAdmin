import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from '../component/Loading';
import Tab from './Tab';
import TourList from './Tour/TourList';

const Section = styled.div`
    height: 95vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
`;
const Tour = ({ children }) => {
    return (
        <Section>
            <Tab>
                <div label='List'>
                    <TourList />
                </div>
                <div label='Service'>
                    <Loading />
                </div>
            </Tab>
        </Section>
    );
};

export default Tour;
