import styled from 'styled-components';

export const Input = styled.input`
    width: 30rem;
    height: 2rem;
`;

export const ButtonSubmit = styled.button`
    width: 10rem;
    height: 2rem;
    border-radius: 25px;
    color: ${(props) =>
        props.cancel
            ? `rgba(${props.theme.redRgba})`
            : `rgba(${props.theme.greenRgba})`};
    background-color: ${(props) =>
        props.cancel
            ? `rgba(${props.theme.redRgba}, 0.4)`
            : `rgba(${props.theme.greenRgba}, 0.4)`};
    border-width: 0;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 500;
    &:hover {
        box-shadow: -7px 8px 8px 0px rgba(0, 0, 0, 0.1);
        font-weight: 700;
    }
`;
export const CardContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 1rem 0.5rem;
    cursor: pointer;
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.2)`};
    &:hover {
        box-shadow: 0px 25px 15px -3px rgba(0, 0, 0, 0.1);
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    justify-content: space-between;

    font-weight: 300;
    font-size: ${(props) => props.theme.fontmd};
`;
export const Section = styled.div`
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
    margin-top: 10vh;
    width: 60%;
`;
