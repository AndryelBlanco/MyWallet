import styled from "styled-components";
import { colors, device } from '../../Helper/StyleSheet';

export const Sidebar = styled.aside`
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    height: 100vh;
    width: 20vw;
    min-width: 12rem;

    position: relative;
    padding: .75rem;
    background: ${colors.primary_color};
    z-index: 999;


    @media ${device.laptop}{
        display: flex;
    }

`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40%;

    @media ${device.laptopL}{
        height: 50%;
    }

    @media ${device.desktop}{
        gap: 2rem;
    }
`;

export const UserPhoto = styled.img`
    display: flex;

    width: 9rem;
    height: 9rem;

    border-radius: 9999999px;
    border: 2px solid ${colors.secondary_color};
    position: relative;
    margin-top: 1rem;
    margin-bottom: 2rem;

    cursor: pointer;
    transition: .3s ease;

    &:hover{
        filter: opacity(.7);
    }

    @media ${device.laptop}{
        width: 7rem;
        height: 7rem;
    }

    @media ${device.laptopL}{
        width: 12rem;
        height: 12rem;
    }

    @media ${device.desktop}{
        width: 18em;
        height: 18rem;
    }
`;

export const UserNameText = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    color: #FFF;

    margin-bottom: .375rem;


    @media ${device.laptopL}{
        font-size: 1.5rem;
    }

    @media ${device.desktop}{
        font-size: 2.2rem;
    }
`;

export const Line = styled.hr`
    width: 95%;
    height: 1px;

    background-color: #FFF;
`;

export const SidebarButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    width: 100%;
    height: 40%;
    padding: 0.75rem;
    
    @media ${device.laptop}{
        padding: 1px;
    }
`;

export const SidebarButton = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 2rem;
    
    border:2px solid transparent;
    border-radius: 4px;
    /* padding: .375rem; */
    background-color: ${props => props.active ? `${colors.terciary_blue_color}` : 'transaparent'};;
    
    cursor: ${props => !props.disabled ? "pointer" : "not-allowed"};
    filter: ${props => !props.disabled ? "opacity(1)" : "opacity(.4)"};
    transition: .5s ease;

    &:hover{
        filter: ${props => !props.disabled ? "opacity(.875)" : "opacity(.4)"};
        transform: ${props => !props.disabled ? "translateX(2px)" : null};
        border: ${props => !props.disabled ? `2px solid ${colors.blue_hover}` : null};
        /* box-shadow: 0px 0px 8px ${colors.blue_hover}; */
    }

    @media ${device.laptopM}{
        height: 2.4rem;
    }

    @media ${device.laptopL}{
        height: 3rem;
    }

    @media ${device.desktop}{
        height: 5rem;
    }
`;

export const SidebarButtonText = styled.span`
    width: 50%;

    font-size: 1rem;
    font-weight: 600;
    color: ${colors.white_color};

    @media ${device.laptopL}{
        font-size: 1.2rem;
    }

    @media ${device.desktop}{
        font-size: 2rem;
    }
`;

export const SidebarFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin-top: 1rem;
`;

export const LogoApp = styled.img`
    max-width: 5rem;
    
    @media ${device.desktop}{
        width: 10rem;
    }
`;

export const FooterText = styled.span`
    align-self: flex-end;

    font-size: .865rem;
    font-weight: 300;
    color: ${colors.white_color};
    user-select: none;
`;
