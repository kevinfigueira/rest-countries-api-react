import React, { useEffect, useState } from 'react';

//ROUTES
import { useParams } from 'react-router-dom';

//ICONS
import { BiSearch } from 'react-icons/bi';

//STYLES
import {
	FormContainer,
	FormField,
	FormInput,
	FormOption,
	FormSelet,
	FormBoxInput
} from '../assets/styles/form';

//COMPONENTS
import { Container } from '../assets/styles/global';
import { Countries } from './Countries';
import { Country } from "./Country";


const CountryForm = () => {
	const [countries, setCountries] = useState<string>('');
	const [region, setRegion] = useState<string>('all');
	return (
		<Container>
			<FormContainer>
				<FormBoxInput>
					<BiSearch size={25} />
					<FormInput
						value={countries}
						onChange={country => setCountries(country.target.value)}
						placeholder="Search for a country..."
					/>
				</FormBoxInput>

				<FormField>
					<FormSelet value={region} onChange={reg => setRegion(reg.target.value)}>
						<FormOption value={'all'}>Filter by Region</FormOption>
						<FormOption value={'africa'}>Africa</FormOption>
						<FormOption value={'america'}>America</FormOption>
						<FormOption value={'asia'}>Asia</FormOption>
						<FormOption value={'europe'}>Europe</FormOption>
						<FormOption value={'oceania'}>Oceania</FormOption>
					</FormSelet>
				</FormField>
			</FormContainer>

			<Countries region={region} search={countries} />
		</Container>
	)
}

export default CountryForm;