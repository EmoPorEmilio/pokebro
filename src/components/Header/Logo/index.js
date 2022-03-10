import logo from '../../../resources/logo.png';
import { LogoContainer, LogoIMG } from './Logo.styles';

export const Logo = () => {
    return <LogoContainer>
        <LogoIMG src={logo}/>
    </LogoContainer>
}