import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
    flex-wrap: wrap;

`;

export const FormBoxInput = styled.div`
    width: 26rem;
    height: 2.5rem;
    display: flex;
    border-radius: 5px;
    padding: 1.5rem 0;
    align-items: center;
    border: 0 solid #e5e7eb;
    box-shadow: ${c => `0 4px 6px -1px rgba(${c.theme.colors.shadow}, 0.1),
            0 2px 4px -2px rgba(${c.theme.colors.shadow})`};
    background-color: ${c => c.theme.colors.bg_1};

    svg{
        margin: 0 10px;
        color: ${c => c.theme.colors.txt_2};
    }

    @media screen and (max-width: 700px){
        margin-bottom: 30px;
    }
`;

export const FormInput = styled.input.attrs({ type: 'text' })`
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    color: ${c => c.theme.colors.txt_2};

    ::placeholder{
        color: ${c => c.theme.colors.txt_2};
    }
`;

export const FormField = styled.div`
    width: 18rem;
    height: 3rem;
    border-radius: 5px;
    box-shadow: ${c => `0 4px 6px -1px rgba(${c.theme.colors.shadow}, 0.1),
            0 2px 4px -2px rgba(${c.theme.colors.shadow})`};
`;

export const FormSelet = styled.select`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    padding: 0 1rem;
    cursor: pointer;
    outline: none;
    background-color: ${c => c.theme.colors.bg_1};
    color: ${ c => c.theme.colors.txt_2};

`;

export const FormOption = styled.option`
    
    padding: 5rem 0;

    :hover{
        cursor: pointer;
    }
`;