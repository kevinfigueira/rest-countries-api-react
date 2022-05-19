//REACT
import { useEffect, useState } from "react"

//ROUTES
import { Link } from "react-router-dom";

//UTILS
import { api } from '../utils/api';

//TYPES
import { countriesAllType } from '../types/countriesAll';

//STYLES
import {
	ContryContainer,
	Box,
	ContryImg,
	ContryArticle,
	ContryTitle,
	ContryList,
	ContryChildren,
	BoxImg
} from '../assets/styles/countries';

type Prop = {
	region: string;
	search: string;
}
export const Countries = ({ region, search }: Prop) => {
	const [allCountries, setAllCountries] = useState<countriesAllType[]>([])

	useEffect(() => {
		const get = async () => {

			try {
				const data = region === 'all'
					? await api.getAllcountries()
					: await api.getByCountriesRegions(region)

				setAllCountries(data)
			} catch (error) { 
				setAllCountries([]) 
			}
		}

		get();
	}, [region])

	const countryFilter = allCountries.filter(( coutries: any ) => {
		return coutries.name.common.toLowerCase().includes(search.toLowerCase())
	})

	return (
		<ContryContainer>
			{countryFilter.map((e, i) => (
				<Link to={`/${e.name.common.toLowerCase()}`} key={i}>
					<Box>
						<BoxImg>
							<ContryImg src={e.flags.svg} alt={e.name.common} />
						</BoxImg>
						<ContryArticle>
							<ContryTitle>{e.name.common}</ContryTitle>
							<ContryList>
								<ContryChildren><span>Population: </span>{e.population}</ContryChildren>
								<ContryChildren><span>Region: </span>{e.region}</ContryChildren>
								<ContryChildren><span>Capital: </span>{e.capital}</ContryChildren>
							</ContryList>
						</ContryArticle>
					</Box>
				</Link>
			))}
		</ContryContainer>
	)
}