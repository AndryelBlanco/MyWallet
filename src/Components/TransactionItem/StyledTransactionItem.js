import styled from "styled-components";
import { colors } from "../../Helper/StyleSheet";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background: #FFFFFF; 
    box-shadow: 0px 22px 80px rgba(0, 0, 0, 0.1), 0px 9.19107px 33.4221px rgba(0, 0, 0, 0.0718854), 0px 4.91399px 17.869px rgba(0, 0, 0, 0.0596107), 
    0px 2.75474px 10.0172px rgba(0, 0, 0, 0.05), 0px 1.46302px 5.32008px rgba(0, 0, 0, 0.0403893), 0px 0.608796px 2.21381px rgba(0, 0, 0, 0.0281146);
    margin-bottom: 1rem;
    border-radius: 10px;

    @media ${device.laptop}{
        
        padding: 1rem 0;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`

export const TransactionInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 30%;

    padding: 1rem;
    
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 100%;
    user-select: none;
`;

export const ItemTitle = styled.h1`
    font-size: 1.1rem;
    font-weight: bold;
    color: #676767;
`;

export const ItemDate = styled.span`
    font-size: .875rem;
    font-weight: 500;
    color: #949C9F;

    text-align: center;
`;

export const ItemAmmount = styled.span`
    font-size: 1.3rem;
    font-weight: 700;
    color: ${props => (props.ammount >= 0 ? '#42DB29' : "#FF3333")};

    text-align: right;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
    
    /* width: 30%; */
    
    margin-right: 1rem;
    padding: 0rem 1rem;
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

`;

export const Divider = styled.hr`
    width: 1px;
    height: 3rem;
    background-color: #FAFAFA;
`;