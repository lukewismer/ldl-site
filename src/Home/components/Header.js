import { Title, HeadImage, HeaderContainer } from '../styles/Header.style'
import Navbar from './Navbar';

const Header = () => {
    return (
        <HeaderContainer>
            <Title>
                Lister Dodgeball League
            </Title>
            <HeadImage src={require("../../assets/Target-logo.png")} />
        </HeaderContainer>
    );
}

export default Header;