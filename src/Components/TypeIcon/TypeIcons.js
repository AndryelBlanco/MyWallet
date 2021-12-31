import React from 'react';
import styled from 'styled-components';

import { styleIcons } from '../../Helper/StyleSheet';
import { device } from "../../Helper/StyleSheet";
import { FitnessCenter } from '@styled-icons/material-rounded/FitnessCenter'
import { Fitness } from '@styled-icons/ionicons-solid/Fitness'
import { Car } from '@styled-icons/fa-solid/Car'
import { Cart } from '@styled-icons/ionicons-solid/Cart'
import { Food } from '@styled-icons/fluentui-system-filled/Food'
import { GameController } from '@styled-icons/ionicons-solid/GameController'
import { AttachMoney } from '@styled-icons/material-outlined/AttachMoney'


const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-width: 45px;
    min-height: 45px;
    border-radius: 4px;

    @media ${device.mobileL}{
        min-width: 35px;
        min-height: 35px;
    }

    @media ${device.laptop}{
        min-width: 38px;
        min-height: 38px;
    }

    @media ${device.laptopM}{
        min-width: 3rem;
        min-height: 3rem;
    }

    @media ${device.laptopL}{
        min-width:50px;
        min-height: 50px;
    }

    @media ${device.desktop}{
        min-width: 75px;
        min-height: 75px;
    }
`;

const FitnessIcon = styled(FitnessCenter)`
    color: #FFF;
    width: 2.6rem;

    @media ${device.mobileL}{
        width: 28px;
    }

    @media ${device.desktop}{
        width: 4rem;
    }
`;

const FitnessHeart = styled(Fitness)`
    color: #FFF;
    width: 2.6rem;

    @media ${device.mobileL}{
        width: 28px;
    }

    @media ${device.desktop}{
        width: 4rem;
    }
`;

const CarIcon = styled(Car)`
    color: #FFF;
    width: 2.3rem;

    @media ${device.mobileL}{
        width: 28px;
    }

    @media ${device.desktop}{
        width: 4rem;
    }
`;

const CartIcon = styled(Cart)`
    color: #FFF;
    width: 2.5rem;

    @media ${device.mobileL}{
        width: 28px;
    }

    @media ${device.desktop}{
        width: 4rem;
    }
`;

const FoodIcon = styled(Food)`
    color: #FFF;
    width: 2.5rem;
    
    @media ${device.mobileL}{
        width: 28px;
    }

    @media ${device.desktop}{
        width: 4rem;
    }
`;

const GameControllerIcon = styled(GameController)`
    color: #FFF;
    width: 2.5rem;

    @media ${device.mobileL}{
        width: 28px;
    }

    @media ${device.desktop}{
        width: 4rem;
    }
`;

const AttachMoneyIcon = styled(AttachMoney)`
    color: #FFF;
    width: 2.5rem;

    @media ${device.mobileL}{
        width: 28px;
        margin-left: 2px;
    }

    @media ${device.desktop}{
        width: 4rem;
    }
`;

const TypeIcons = ({type}) => {
    switch(type){
        case 'Food':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.food_purple}`}} title={type}>
                    <FoodIcon/>
                </IconContainer>
            )
            break;
        case 'Health':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.red_healt}`}} title={type}>
                    <FitnessHeart/>
                </IconContainer>
            )
            break;
        case 'Fitness':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.orange_fit}`}} title={type}>
                    <FitnessIcon/>
                </IconContainer>
            )
            break;
        case 'Transport':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.green_transport}`}} title={type}>
                    <CarIcon/>
                </IconContainer>
            )
            break;
        case 'Games':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.blue_games}`}} title={type}>
                    <GameControllerIcon/>
                </IconContainer>
            )
            break;
        case 'Incomes':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.green_incomes}`}} title={type}>
                    <AttachMoneyIcon/>
                </IconContainer>
            )
            break;
        case 'Shopping':
            return (
                <IconContainer style={{backgroundColor: `${styleIcons.red_shopp}`}} title={type}>
                    <CartIcon/>
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
