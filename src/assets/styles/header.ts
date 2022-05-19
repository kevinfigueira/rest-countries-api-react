import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Box = styled.div`
    box-shadow: ${ c => `2px 2px 10px 0 rgba(${c.theme.colors.shadow}, 0.4)`};
    position: relative;
    top: 0;
    left: 0;
    background: ${c => c.theme.colors.bg_1};
`;

export const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: 800;
    color: ${c => c.theme.colors.txt_1};

    @media screen and (max-width: 320px){
        font-size: 16px;
    }
`;

export const HeaderButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    color: ${c => c.theme.colors.txt_1}; 

    svg{
        margin-right: 5px;
    }

    @media screen and (max-width: 320px){
        font-size: 14px;
    }
`;