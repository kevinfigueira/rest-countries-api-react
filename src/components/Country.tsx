//REACT
import React, { useState, useEffect } from "react";

//COMPONENTS
import CountryHeader from "./CountryHeader";
import { Container } from "../assets/styles/global";

//ROUTES
import { useNavigate, useParams } from "react-router-dom";

//UTILS
import { api } from "../utils/api";

//TYPES
import { countriesAllType } from '../types/countriesAll';

//ICON
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
//STYLES
import {
   Box,
   BoxBorder,
   BoxContent,
   BoxImg,
   Button,
   CountryContainer,
   Content,
   CountryImg,
   Title,
   BoxBnt
} from '../assets/styles/country';


export const Country = () => {
   const params = useParams();
   const navigate = useNavigate();
   const [country, setCountry] = useState<countriesAllType[]>([]);

   useEffect(() => {
      if (params.slug) {
         getCountry(params.slug);
      }
   }, [])


   const getCountry = async (slug: string) => {
      const response = await api.getByCountries(slug);
      setCountry(response)
   }

   return (
      <>
         <CountryContainer>
            <BoxBnt>
               <Button onClick={() => navigate("/")}><HiOutlineArrowNarrowLeft size={20}/> Back</Button>
            </BoxBnt>
            {country.map((e, i) => (
               <Content key={i}>
                  <BoxImg>
                     <CountryImg src={`${e.flags.svg}`} alt={e.name.common} />
                  </BoxImg>
                  <BoxContent>
                     <Title>{e.name?.common}</Title>
                     <Box>
                        <div>
                           <ul>
                              <li>Native name:
                                 <span>
                                    {`${Object.values(e.name.nativeName).map((name: any) => name.common)}`}
                                 </span>
                              </li>
                              <li>Population: <span>{e.population}</span></li>
                              <li>Region: <span>{e.region}</span></li>
                              <li>Sub Region: <span>{e.subregion}</span></li>
                              <li>Capital: <span>{e.capital}</span></li>
                           </ul>
                        </div>
                        <div>
                           <ul>
                              <li>Top Level Domain: <span>{e.tld}</span></li>
                              <li>Currencies: 
                                 <span>
                                    {`${Object.values(e.currencies).map((values: any) => values.name)}`}
                                 </span>
                              </li>
                              <li>Languages: 
                                 <span>
                                    {`${Object.values(e.languages)}`}
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </Box>
                     <BoxBorder>
                        <div>Border Countries: 
                           <ul>
                              {e.borders?.map((border, id) => (
                                 <li key={id}>
                                    {border}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </BoxBorder>
                  </BoxContent>
               </Content>
            ))}
         </CountryContainer>
      </>
   )
}