import React from 'react';
import { useEffect } from 'react';
import {
    CardContainer,
    Container,
    Section,
} from '../../component/Common/Common';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 700;
    width: 35rem;
    color: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
    margin-left: 1rem;
    p {
        margin-top: 0.5rem;
        opacity: 0.6;
        font-size: ${(props) => props.theme.fontsm};
    }
`;

const Name = styled.h4`
    &:not(:last-child) {
        max-width: 15rem;
        width: 20rem;
        padding-right: 2rem;
    }
`;

const OrderList = (props) => {
    const [datas, setDatas] = useState({});

    const userInf = async () => {
        const response = await axios.get(
            `http://localhost:3100/acc/details/${props.uid}`
        );
        setDatas(response?.data.results[0]);
    };
    useEffect(() => {
        userInf();
    }, []);

    return (
        <CardContainer>
            <Title>
                {datas.UserName}
                <p>{datas.Address}</p>
            </Title>
            <Name>{datas.Level}</Name>
            <Name>{datas.Gender}</Name>
            <Name>{datas.Email}</Name>
            <Name>{datas.Phone}</Name>
            <Name>{datas.Status}</Name>
        </CardContainer>
    );
};

const Order = () => {
    const [datas, setDatas] = useState([]);
    const tourList = async () => {
        const response = await axios.get(`http://localhost:3100/order/list`);
        console.log(response?.data.results);
        setDatas(response?.data.results);
    };

    useEffect(() => {
        tourList();
    }, []);
    return (
        <Section>
            <Container>
                <CardContainer>
                    <Title>
                        Customer Name
                        <p></p>
                    </Title>
                    <Name>Level</Name>
                    <Name>Gender</Name>
                    <Name>Email</Name>
                    <Name>Phone</Name>
                    <Name>Status</Name>
                </CardContainer>
                {datas.map((item, index) => {
                    return <OrderList uid={item.UserID} />;
                })}
            </Container>
        </Section>
    );
};

export default Order;
