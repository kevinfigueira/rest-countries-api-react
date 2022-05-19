import styled from "styled-components";

export const Button = styled.button``;

export const CountryContainer = styled.main`
   max-width: 1440px;
   width: 100%;
   height: calc(100vh - 120px);
   margin: 0 auto;
   display: flex;
   flex-direction: column;
`;

export const BoxBnt = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   padding-left: 5rem;

   @media screen and (max-width: 425px){
      padding-left: 2rem;
   }

   Button{
      width: 120px;
      height: 40px;
      border-radius: 5px;
      box-shadow: ${c => `rgba(${c.theme.colors.shadow}, 0.1) 0 0 11px 0`};
      background-color: ${c => c.theme.colors.bg_1};
      color: ${c => c.theme.colors.txt_2};
      font-weight: 600;
      line-height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg{
        margin-right: 10px;
      }
   }
`;

export const Content = styled.div`
   display: flex;
   align-items: center;
   flex: 5;

   @media screen and (max-width: 540px){
      flex-direction: column;
   }
`;

export const BoxImg = styled.div`
   flex: 1;
`;

export const CountryImg = styled.img`
  width: 100%;
  box-shadow: ${c => `rgba(${c.theme.colors.shadow}, 0.1) 0 0 11px 0`};

  @media screen and (max-width: 540px) {
      width: 420px;
      height: 300px;
      width: 100%;
   }

   @media screen and (max-width: 425px) {
      height: 215px;
   }

   @media screen and (max-width: 375px) {
      height: 185px;
   }
   @media screen and (max-width: 320px) {
      height: 150px;
   }
   
`;

export const Title = styled.h1`
   font-size: 2.25rem;
   font-weight: 700;
   padding-bottom: 2rem;
   color: ${c => c.theme.colors.txt_1};
`;

export const BoxContent = styled.div`
   padding-left: 3rem;
   flex: 1;
`;

export const BoxBorder = styled.div`
   padding-top: 2rem;
   color: ${c => c.theme.colors.txt_1};

   div{
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      
      ul{
         display: flex;
         flex-wrap: wrap;
         padding-left: 20px;

         @media screen and (max-width: 375px){
            padding: 10px 0;
         }

         li{
            width: 80px;
            text-align: center;
            background-color: ${c => c.theme.colors.bg_1};
            color: ${c => c.theme.colors.txt_2};
            box-shadow: ${c => `rgba(${c.theme.colors.shadow}, 0.1) 0 0 11px 0`};
            margin-right: 15px;
            margin-bottom: 15px;
            
         }
      }
   }

   @media screen and (max-width: 375px){
      padding: 0;
   }
`;

export const Box = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   padding-right: 50px;

   @media screen and (max-width: 768px) {
      
   }

   div{
      @media screen and (max-width: 768px) {
         margin-bottom: 30px;
      }
   }

   ul{
      li{
         font-weight: 600;
         padding: 5px 0;
         color: ${c => c.theme.colors.txt_1};
         span{
            font-weight: normal;
            padding-left: 10px;
            color: ${c => c.theme.colors.txt_2};
         }
      }
   }
`;