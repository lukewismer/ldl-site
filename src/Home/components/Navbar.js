import { NavContainer, NavItem } from '../styles/Navbar.style'

const Navbar = () => {
    return (
        <NavContainer>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/standings">Standings</NavItem>
            <NavItem href="/schedule">Schedule</NavItem>
        </NavContainer>
    );
}

export default Navbar;