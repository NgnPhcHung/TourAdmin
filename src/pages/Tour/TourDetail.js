import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonSubmit, Input } from '../../component/Common/Common';
import DatePicker from '../../component/DatePicker/DatePicker';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Container = styled.div`
    width: 75%;
    height: fit-content;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0.5rem auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Title = styled.h3`
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 400;
`;
const TourDetail = () => {
    const [cancel, setCancel] = useState(false);
    const { tourID } = useParams();
    const [data, setData] = useState([]);
    const [date, setDate] = useState(new Date());

    const getTourDetail = async () => {
        const response = await axios.get(
            `http://localhost:3100/tour/details/${tourID}`
        );
        console.log(response?.data.results[0]);
        setData(response?.data.results[0]);
    };
    useEffect(() => {
        getTourDetail();
    }, []);

    const open_modal = (record) => {
        setDate(record.check_date); // This is making the error
    };

    function clickHandler(event) {
        const my_date = new Date('2020-05-26');
        setDate(my_date);
    }

    return (
        <Container>
            <Wrapper>
                <Title>Tour Name</Title>
                <Input
                    type='text'
                    name='name'
                    placeholder='Tour Name'
                    value={data.TourName}
                />
            </Wrapper>
            <Wrapper>
                <Title>Descriptions</Title>
                <Input
                    type='text'
                    name='from'
                    placeholder='Description'
                    value={data.Descriptions}
                />
            </Wrapper>
            <Wrapper>
                <Title>Image</Title>
                <Input
                    type='text'
                    name='name'
                    placeholder='Image'
                    value={data.Image}
                />
            </Wrapper>
            <Wrapper>
                <Title>Start</Title>
                <DatePicker
                    dateFormat='dd/MM/yyyy'
                    className='form-control'
                    onChange={(date) => {
                        setDate(date);
                        alert(date);
                    }}
                />
            </Wrapper>
            <Wrapper>
                <Title>End</Title>
                <DatePicker
                    dateFormat='dd/MM/yyyy'
                    className='form-control'
                    onChange={(date) => {
                        setDate(date);
                        alert(date);
                    }}
                />
            </Wrapper>
            <Wrapper>
                <Title>Total Slot</Title>
                <Input
                    type='text'
                    name='slot'
                    placeholder='Total Slot'
                    value={data.Slot}
                />
            </Wrapper>
            <Wrapper>
                <Title>Price</Title>
                <Input
                    type='text'
                    name='price'
                    placeholder='Price'
                    value={data.Price}
                />
            </Wrapper>
            <ButtonContainer>
                <ButtonSubmit cancel={false}>Submit</ButtonSubmit>
                {cancel ? (
                    <ButtonSubmit cancel={true}>Submit</ButtonSubmit>
                ) : (
                    ''
                )}
            </ButtonContainer>
        </Container>
    );
};

export default TourDetail;
