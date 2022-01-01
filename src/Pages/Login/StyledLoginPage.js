import styled from 'styled-components';
import { colors, device } from '../../Helper/StyleSheet';


export const Page = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 45%;
    height: 100vh;

    background: ${colors.primary_color};
    padding: 1rem 2rem;

    @media ${device.mobileL}, ${device.mobileS}{
        display: none;
    }

    @media ${device.tablet}{
        display: none;
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    width: 55%;
    height: 100vh;

    background-color: #FDFDFD;

    @media ${device.mobileL}, ${device.mobileS}{
        width: 100%;
        background-color: ${colors.primary_color};
    }

    @media ${device.tablet}{
        width: 100%;
        background-color: ${colors.primary_color};
    }
`;

export const LogoApp = styled.img`
    max-width: 5rem;
    align-self: flex-start;

    @media ${device.desktopL}{
        max-width: 8rem;
    }
`;

export const LogoText = styled.span`
    color: #FFF;
    font-size: 1rem;
    font-weight: 300;

    @media ${device.desktopL}{
        font-size: 2rem;
        font-weight: 400;
    }
`;

export const PiggyImg = styled.img`
    max-width: 100%;

    @media ${device.desktopL}{
        width: 100%;
    }
`;

export const IllustrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2;

    width: 100%;
    height: 100%;

    padding: 1rem;
`;

export const IllustrationText = styled.h2`
    font-size: 2rem;
    font-weight: 300;
    color: #FFF;
    text-align: center;
    max-width: 100%;
    
    transition: .3s ease;

    @media ${device.laptopL}{
        font-size: 2.4rem;
    }

    @media ${device.desktopL}{
        font-size: 3rem;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    width: 50%;
    height: 25rem;
    border: 1px solid #F0F0F0;
    border-radius: 8px;
    padding: 1rem 0;
    
    max-width: 400px;
    min-height: 300px;
    
    transition: .4s ease-in-out;
    box-shadow: 0px 0px 4px #EEEEEE;

    :hover{
        border-color: ${colors.primary_color};
    }
    
    @media ${device.mobileL}, ${device.mobileS}{
        width: 80%;
        box-shadow: 0px 0px 2px #EEEEEE;
        :hover{
            border-color: #F0F0F0;
        }
    }

    @media ${device.tablet}{
        width: 50%;
        box-shadow: 0px 0px 2px #EEEEEE;
        :hover{
            border-color: #F0F0F0;
        }
    }
    
    @media ${device.desktopL}{
        max-width: 100%;
        height: 35rem;
    }
`;

export const FormTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.primary_color};
    transition: .3s ease;

    @media ${device.mobileL}, ${device.mobileS}{
        color: #fff;
    }

    @media ${device.tablet}{
        color: #fff;
    }

    @media ${device.desktopL}{
        font-size: 3rem;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 100%;
    height: 50%;
`;

export const GenericButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    width: 80%;
    height: fit-content;

    background-color: #00131A;

    border: none;
    border-radius: 4px;
    padding: .75rem 1rem;

    color: #FFF;
    font-size: 1rem;
    font-weight: 700;

    cursor: not-allowed;
    transition: .5s ease;
    filter: opacity(.6);
`;

export const ButtonGoogle = styled.button`
    display: grid;
    grid-template-columns: 1fr 8fr;
    align-items: center;
    justify-self: center;
    gap: 0.75rem;

    width: 80%;
    height: fit-content;

    background-color: ${colors.google_button};

    border: none;
    border-radius: 4px;
    padding: .75rem 1rem;

    color: #FFF;
    font-size: 1rem;
    font-weight: 700;

    cursor: pointer;
    transition: .5s ease;

    &:hover{
        /* filter: opacity(.8); */
        box-shadow:  0px 0px 30px ${colors.red_color};
    }

    @media ${device.mobileL}, ${device.mobileS}{
        :hover{
            filter: opacity(.8);
            box-shadow:  0px 0px 0px transparent;
        }   
    }

    @media ${device.tablet}{
        :hover{
            filter: opacity(.8);
            box-shadow:  0px 0px 0px transparent;
        }   
    }
`;