//ROUTES
import { useRoutes } from 'react-router-dom';

//PAGES
import { Home } from '../pages/Home';
import { CountryInfo } from '../pages/CountryInfo';

type Prop = {
   toggleTheme(): void;
}

export const Routes = ({toggleTheme}: Prop) => {
   return useRoutes([
      {path: '/', element: <Home toggleTheme={toggleTheme}/>},
      {path: '/:slug', element: <CountryInfo toggleTheme={toggleTheme}/>}
   ])
}