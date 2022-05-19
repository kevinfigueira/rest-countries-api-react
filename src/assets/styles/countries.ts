import styled from "styled-components";

export const ContryContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 45px;

    a{
        color: #000;
    }
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); */
    /*grid-gap: 40px;
    justify-items: center; */
`;
export const Box = styled.div`
    max-width: 16rem;
    width: 100%;
    box-shadow: ${c => `rgba(${c.theme.colors.shadow}, 0.1) 0 0 11px 0`};
    border-radius: 10px;
    background: ${c => c.theme.colors.bg_1};
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const BoxImg = styled.div`
    width: 100%;
    max-width: 100%;
    flex: 1;
`;

export const ContryImg = styled.img`
    height: 200px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`; 

export const ContryArticle= styled.article`
    padding: 1.5rem 0.5rem 2rem 2rem;
    flex: 1;
`;

export const ContryTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 1rem;
    color: ${c => c.theme.colors.txt_1};
`;

export const ContryList = styled.ul`
    list-style: none;
`;

export const ContryChildren = styled.li`
    padding: 3px 0;
    color: ${c => c.theme.colors.txt_2};
    
    span{
        color: ${c => c.theme.colors.txt_1};
        font-weight: 600;
    }
`;