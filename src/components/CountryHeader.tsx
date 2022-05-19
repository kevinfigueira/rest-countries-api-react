//REACT
import { useContext } from 'react';

//ICONS
import {BsMoonFill, BsMoon} from 'react-icons/bs'

//STYLES
import { HeaderContainer, Box, HeaderTitle, HeaderButton} from '../assets/styles/header';
import { Container } from '../assets/styles/global';
import { ThemeContext } from 'styled-components';

//TYPES
type Prop = {
    toggleTheme(): void;
}

const CountryHeader = ({toggleTheme}: Prop) => {
    const { title } = useContext(ThemeContext);

    return (
        <Box>
            <Container>
                <HeaderContainer>
                    <div>
                        <HeaderTitle>Where in the world?</HeaderTitle>
                    </div>
                    <div>
                        <HeaderButton onClick={() => toggleTheme()}>
                           { title === 'light' ? <BsMoonFill/> : <BsMoon />}
                           { title === 'light' ? 'Dark Mode' : 'Lgiht Mode'}
                        </HeaderButton>
                    </div>
                </HeaderContainer>
            </Container>
        </Box>
    )
}

export default CountryHeader;