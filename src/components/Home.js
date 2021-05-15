import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import data from '../carInfo.json';

export default function Home() {
    return (
        <Container>
           
        {
            data.map((ele,ind) => (
                <Section key={ind} title={ele.title} desc={ele.description} leftbtn="Order Online" rightbtn="Touchless Delivery" img={ele.image}/>
            ))
        }    
        </Container>
    )
}

const Container = styled.div`
    height:100vh;

`;