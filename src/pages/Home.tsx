//COMPONENTS
import CountryHeader from "../components/CountryHeader";
import CountryForm from "../components/CountryForm";


type Prop = {
   toggleTheme(): void;
}

export const Home = ({toggleTheme}: Prop) => {
   
   return (
      <>
         <CountryHeader toggleTheme={toggleTheme}/>
         <CountryForm />
      </>
   )
}