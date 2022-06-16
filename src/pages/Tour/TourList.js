import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardContainer, Container } from '../../component/Common/Common';

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

const Slot = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    h5 {
        align-self: center;
        font-size: ${(props) => props.theme.fontsm};
        font-weight: 300;
        width: 4rem;
    }
`;

const Status = styled.h5`
    background-color: ${(props) =>
        props.what == 0
            ? `var(--yellow)`
            : props.what == 1
            ? `var(--green)`
            : props.what == 2
            ? `var(--orange)`
            : ''};
    border-radius: 25px;
    padding: 0.5rem 1rem;
    height: 1rem;
    width: 6rem;
    align-self: center;

    h4 {
        font-weight: 300;
        font-size: ${(props) => props.theme.fontmd};
    }
`;
const ImageContainer = styled.div`
    width: 4rem;
    height: 4rem;
    img {
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
    }
`;
const Date = styled.h4`
    width: 10rem;

    font-weight: 300;
    font-size: ${(props) => props.theme.fontmd};
    align-self: center;
`;

const TourCard = (props) => {
    return (
        <Link to={{ pathname: `/tour/edit/${props.id}` }}>
            <CardContainer>
                <ImageContainer>
                    <img src={props.image} alt='tour avatar' />
                </ImageContainer>
                <Title>
                    {props.title}
                    <p>{props.price}VNĐ</p>
                </Title>

                {/* <Details> */}
                <Date>{moment(props.start).utc().format('DD-MM-YYYY')}</Date>
                <Date>{moment(props.end).utc().format('DD-MM-YYYY')}</Date>
                <Slot>
                    <h5>{props.Totalslot}</h5>
                    <h5>{props.OrderSlot}</h5>
                </Slot>
                <Status what={props.status}>
                    {props.status == 0
                        ? 'Pending'
                        : props.status == 1
                        ? 'On Tour'
                        : 'Cancel'}
                </Status>
                {/* </Details> */}
            </CardContainer>
        </Link>
    );
};

const TourList = () => {
    const [datas, setDatas] = useState([]);
    const tourList = async () => {
        const response = await axios.get(`http://localhost:3100/tour/list`);
        // console.log(response?.data.results);
        setDatas(response?.data.results);
    };

    useEffect(() => {
        tourList();
    }, []);
    return (
        <Container>
            <CardContainer>
                <ImageContainer>{/* <Title>Image</Title> */}</ImageContainer>
                <Title>Title</Title>

                {/* <Details> */}
                <Date>Start</Date>
                <Date>End</Date>
                <Slot>
                    <h5>Total</h5>
                    <h5>Ordered</h5>
                </Slot>
                <Status what={3}>
                    <h4>Status</h4>
                </Status>
                {/* </Details> */}
            </CardContainer>
            {datas.map((item, index) => {
                return (
                    <TourCard
                        id={item.TourID}
                        title={item.TourName}
                        price={item.Price}
                        Totalslot={item.Slot}
                        OrderSlot={item.OrderedSlot}
                        des={item.Descriptions}
                        status={item.Status}
                        image={item.Image}
                        start={item.BeginDate}
                        end={item.EndDate}
                    />
                );
            })}
        </Container>
    );
};

export default TourList;
