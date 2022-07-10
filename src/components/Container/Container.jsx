import { withNaming } from '@bem-react/classname';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './styles.css';

const cn = withNaming({ n: '', e: '__', m: '--' });
const container = cn('container');

const Container = () => {
    return(
        <div className={container()}>
            <Header/>
            <Main/>
        </div>
    )
}

export default Container;