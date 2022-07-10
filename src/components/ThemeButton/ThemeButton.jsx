import { withNaming } from '@bem-react/classname';

const cn = withNaming({ n: '', e: '__', m: '--' });
const themeButton = cn('theme-button');

const ThemeButton = () => {
    return(
        <div className={themeButton()}>
        </div>
    )
}

export default ThemeButton;