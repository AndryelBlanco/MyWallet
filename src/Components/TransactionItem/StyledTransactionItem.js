import styled from "styled-components";
import { colors, device } from "../../Helper/StyleSheet";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 20%;

    background: #FFFFFF; 
    box-shadow: 0px 22px 80px rgba(0, 0, 0, 0.1), 0px 9.19107px 33.4221px rgba(0, 0, 0, 0.0718854), 0px 4.91399px 17.869px rgba(0, 0, 0, 0.0596107), 
    0px 2.75474px 10.0172px rgba(0, 0, 0, 0.05), 0px 1.46302px 5.32008px rgba(0, 0, 0, 0.0403893), 0px 0.608796px 2.21381px rgba(0, 0, 0, 0.0281146);
    margin-bottom: 1rem;
    border-radius: 10px;

    transition: .3s ease;

    @media ${device.mobileS}{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        height: 60%;
    }
    
    @media ${device.mobileL}{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        height: 60%;
    }

    @media ${device.tablet}{
        height: 38%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        height: 38%;
        /* min-height: 110px; */
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 30%;

    }

    @media ${device.laptop}{
        height: 30%;
    }

    @media ${device.laptopM}{
        height: 30%;
    }

    @media ${device.laptopL}{
        height: 24%;
        min-height: 110px;
    }

    @media ${device.desktop}{
        height: 20%;
        min-height: 110px;
    }

   
`;

export const DataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    @media ${device.mobileS}{
        flex-direction: column;
        align-items: flex-start;
        padding: 0 1px;
    }
    
    @media ${device.mobileL}{
        flex-direction: column;
        align-items: flex-start;
        padding: 0 1px;
    }
`

export const TransactionInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 30%;

    padding: 1rem;
    
    @media ${device.mobileS}{
        width: 100%;    
    }

    @media ${device.mobileL}{
        width: 100%;    
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    user-select: none;
`;

export const ItemTitle = styled.h1`
    font-size: 1.1rem;
    font-weight: bold;
    color: #676767;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media ${device.mobileS}{
        width: 165px;
    }

    @media ${device.mobileL}{
        width: 200px;
    }

    @media ${device.tablet}{
        width: 200px;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 200px;
    }

    @media ${device.laptop}{
        font-size: 1rem;
    }

    @media ${device.laptopM}{
        font-size: 1.1rem;
    }

    @media ${device.laptopL}{
        font-size: 1.2rem;
    }

    @media ${device.desktop}{
        font-size: 2rem;
    }

`;

export const ItemDate = styled.span`
    font-size: .875rem;
    font-weight: 500;
    color: #949C9F;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    text-align: center;

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        font-size: 1rem;
    }

    @media ${device.laptopL}{
        font-size: 1rem;
    }

    @media ${device.desktop}{
        font-size: 1.6rem;
    }
`;

export const ItemAmmount = styled.span`
    font-size: 1.3rem;
    font-weight: 700;
    color: ${props => (props.ammount >= 0 ? '#42DB29' : "#FF3333")};

    text-align: right;

    @media ${device.mobileS}{
        width: 100%;
        text-align: center;
        padding: 8px;
        background-color: #f7f7f7;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;  
    }

    @media ${device.mobileL}{
        width: 100%;
        text-align: center;
        padding: 8px;
        background-color: #f7f7f7;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
    }

    @media ${device.desktop}{
        font-size: 2rem;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
    
    /* width: 30%; */
    
    margin-right: 1rem;
    padding: 0rem 1rem;

    @media ${device.mobileS}{
        width: 100%;
        margin-right: 0rem;
        margin-bottom: 16px;
        padding: 0 8px;
    }

    @media ${device.mobileL}{
        width: 100%;
        margin-right: 0rem;
        margin-bottom: 16px;
        padding: 0 8px;
    }
`;

export const EditButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 3rem;
    width: 3rem;

    border-radius: 4px;
    background-color: ${colors.primary_color};

    cursor: pointer;
    transition: .3s ease;

    &:hover{
        filter: opacity(.8);
    }

    @media ${device.mobileS}{
        height: 2.4rem;
        width: 2.4rem;
    }

    @media ${device.mobileL}{
        height: 2.4rem;
        width: 2.4rem;
    }

    @media ${device.laptop}{
        height: 2.5rem;
        width: 2.5rem;
    }

    @media ${device.laptopL}{
        height: 3rem;
        width: 3rem;
    }

    @media ${device.desktop}{
        height: 4rem;
        width: 4rem;
    }
`;

export const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 3rem;
    width: 3rem;

    border-radius: 4px;
    border: 2px solid ${colors.red_color};

    cursor: pointer;
    transition: .3s ease;

    &:hover{
        filter: opacity(.8);
    }

    @media ${device.mobileS}{
        height: 2.4rem;
        width: 2.4rem;
    }

    @media ${device.mobileL}{
        height: 2.4rem;
        width: 2.4rem;
    }


    @media ${device.laptop}{
        height: 2.5rem;
        width: 2.5rem;
    }

    @media ${device.laptopL}{
        height: 3rem;
        width: 3rem;
    }

    @media ${device.desktop}{
        height: 4rem;
        width: 4rem;
    }
`;

export const Divider = styled.hr`
    display: flex;
    width: 1px;
    height: 3rem;
    background-color: #FAFAFA;

    @media ${device.mobileS}{
        display: none;
    }

    @media ${device.mobileL}{
       display: none;
    }

    @media ${device.laptop}{
        height: 2.5rem;
    }

    @media ${device.laptopL}{
        height: 3rem;
    }

    @media ${device.desktop}{
        height: 4rem;
    }
`;