import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

export default function Section({ title, desc, leftbtn, rightbtn, img }) {
    return (
        <Wrap bgImage={img}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{desc} </p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <Buttonroup>
                        <LeftButton>
                            {leftbtn}
                        </LeftButton>
                        {
                            rightbtn &&
                            <RightButton>
                                {rightbtn}
                            </RightButton>
                        }

                    </Buttonroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-image:${props => `url("/images/${props.bgImage}")`};
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
`;

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`;

const Buttonroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
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
    cursor: pointer;
    text-transform:uppercase;
    font-size:14px;
    margin:8px;
`;


const RightButton = styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:black;
`;

const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`;

const Buttons = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;