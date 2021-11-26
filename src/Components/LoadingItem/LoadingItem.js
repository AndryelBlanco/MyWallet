import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../Helper/StyleSheet';


const wave = keyframes`
    0% {
        transform: initial;
    }
    15% {
        transform: translateY(2rem)
    }
    30% {
        transform: translateY(-2rem)
    }
    45% {
        transform: translateY(2rem)
    }
    60% {
        transform: translateY(-2rem)
    }
    75% {
        transform: translateY(2rem)
    }
    90% {
        transform: translateY(-2rem)
    }
    100% {
        transform: initial;
    }
`;

export const DotContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Dot = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 10000px;
    background-color: ${props => props.color};
    transition: ease-in-out;
    animation: ${wave} ${props => props.time} ${props => props.delay} linear infinite;
`;


const LoadingItem = ({ color }) => {
    return (
        <DotContainer>
            <Dot time={'7s'} delay={'.1s'} color={color}></Dot>
            <Dot time={'7s'} delay={'.2s'} color={color}></Dot>
            <Dot time={'7s'} delay={'.3s'} color={color}></Dot>
        </DotContainer>
    )
}

export default LoadingItem;
