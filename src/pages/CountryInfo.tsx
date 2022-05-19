
//PAGES
import CountryHeader from "../components/CountryHeader";
import { Country } from "../components/Country";

type Prop = {
   toggleTheme(): void;
}

export const CountryInfo = ({toggleTheme}: Prop) => {
   
   return (
      <>
         <CountryHeader toggleTheme={toggleTheme}/>
         <Country/>      
      </>
   )
}