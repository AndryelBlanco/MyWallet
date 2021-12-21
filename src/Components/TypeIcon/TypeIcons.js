import React from 'react';
import styled from 'styled-components';

import { styleIcons } from '../../Helper/StyleSheet';
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoGameControllerSharp, IoCarSport, IoBarbell, IoCart } from "react-icons/io5";
import { RiHeartPulseFill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-width: 45px;
    min-height: 45px;
    border-radius: 4px;
`;

const TypeIcons = ({type}) => {
    switch(type){
        case 'Food':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.food_purple}`}} title={type}>
                    <GiForkKnifeSpoon
                        color='#FFF'
                        size={30}
                    />
                </IconContainer>
            )
            break;
        case 'Health':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.red_healt}`}} title={type}>
                    <RiHeartPulseFill
                        color='#FFF'
                        size={30}
                        style={{marginLeft: '1px'}}
                    />
                </IconContainer>
            )
            break;
        case 'Fitness':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.orange_fit}`}} title={type}>
                    <IoBarbell
                        color='#FFF'
                        size={30}
                    />
                </IconContainer>
            )
            break;
        case 'Transport':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.green_transport}`}} title={type}>
                    <IoCarSport
                        color='#FFF'
                        size={30}
                    />
                </IconContainer>
            )
            break;
        case 'Games':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.blue_games}`}} title={type}>
                    <IoGameControllerSharp
                        color='#FFF'
                        size={30}
                        style={{marginLeft: '1px'}}
                    />
                </IconContainer>
            )
            break;
        case 'Incomes':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.green_incomes}`}} title={type}>
                    <MdAttachMoney
                        color='#FFF'
                        size={30}
                        style={{marginLeft: '1px'}}
                    />
                </IconContainer>
            )
            break;
        case 'Shopping':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.red_shopp}`}} title={type}>
                    <IoCart
                        color='#FFF'
                        size={30}
                    />
                </IconContainer>
            )
        break;
        default:
            return(
                null
            )
            break;
    }
    
}

export default TypeIcons;
