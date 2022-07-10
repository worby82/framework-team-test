import { withNaming } from '@bem-react/classname';

const cn = withNaming({ n: '', e: '__', m: '--' });
const header = cn('header');

const Header = () => {
    return(
        <header className={header()}>

        </header>
    )
}

export default Header;