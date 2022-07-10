import { withNaming } from '@bem-react/classname';
import './styles.css';

const cn = withNaming({ n: '', e: '__', m: '--' });
const fillter = cn('fillter');

const Fillter = ( { name, setName, author, selectedAuthor, setSelectedAuthor, location, selectedLocation, setSelectedLocation } ) => {
    return(
        <div className={fillter()}>
            <input
                type = 'text'
                placeholder = 'Name'
                value = { name }
                onInput = { e => setName( e !== '' ? e.target.value : undefined ) }
            />
            <select
                defaultValue = { selectedAuthor }
                onChange = { e => setSelectedAuthor( e.target.value !== '' ? e.target.value : undefined ) }
            >
                <option value = '' >Author</option>
                {author?.map(item =>
                    <option
                        value = { item.id }
                        key = { item.id }
                    >{ item.name }</option>
                )}
            </select>
            <select
                defaultValue = { selectedLocation }
                onChange = { e => setSelectedLocation( e.target.value !== '' ? e.target.value : undefined ) }
            >
                <option value = '' >Location</option>
                {location?.map(item =>
                    <option
                        value = { item.id }
                        key = { item.id }
                    >{ item.location }</option>
                )}
            </select>
        </div>
    )
}

export default Fillter;