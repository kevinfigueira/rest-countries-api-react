export type countriesAllType = {
	name: {
		common: string;
		nativeName: {};
	},
	population: number;
	region: string;
	subregion: string;
	capital: string[];
	demonyms: [];
	currencies: {};
	languages: {};
	borders?: string[];
	flags: {
		svg: string;
	};
	tld: string;
}