import { withNaming } from '@bem-react/classname';

const cn = withNaming({ n: '', e: '__', m: '--' });
const fillter = cn('fillter');

const Fillter = () => {
    return(
        <div className={fillter()}>
        </div>
    )
}

export default Fillter;