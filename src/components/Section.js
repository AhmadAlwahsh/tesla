import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

export default function Section(props){

    return(
        <Wrap backImg={props.backImg} id={props.id}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.dis}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.lBtn}
                        </LeftButton>
                        {
                            props.rBtn &&
                            <RightButton>
                                {props.rBtn}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    height:100vh;
    background-image: ${props => `url(images/${props.backImg})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    text-align:center;
`;

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;

`;
const ButtonGroup = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin-bottom:30px;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`;
const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.65;
`;
const DownArrow = styled.img`
    height:40px;
    margin-top:20px;
    animation: arrowDown infinite 1.5s;
    overflow:hidden;
`;

const Buttons = styled.div`
    text-align:center;
`