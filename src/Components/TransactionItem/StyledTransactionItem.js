import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-end;
    justify-content: space-between;

    width: 38rem;

    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;

    background: #FFFFFF;
    box-shadow: 0px 22px 80px rgba(0, 0, 0, 0.1), 0px 9.19107px 33.4221px rgba(0, 0, 0, 0.0718854), 0px 4.91399px 17.869px rgba(0, 0, 0, 0.0596107), 
    0px 2.75474px 10.0172px rgba(0, 0, 0, 0.05), 0px 1.46302px 5.32008px rgba(0, 0, 0, 0.0403893), 0px 0.608796px 2.21381px rgba(0, 0, 0, 0.0281146);
`;

export const ItemTitle = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    color: #00131A;
    
    max-width: 10rem;
`;

export const ItemDate = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: #949C9F;

    text-align: center;
`;

export const ItemAmmount = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: ${props => (props.ammount >= 0 ? '#42DB29' : "#FF3333")};

    text-align: right;
`;