import { withNaming } from '@bem-react/classname';
import './styles.css';

const cn = withNaming( { n: '', e: '__', m: '--' } );
const paintingItem = cn( 'painting-item' );

const PaintingItem = ( { item, autor, location } ) => {
    const autorName = autor.find(autor => autor.id === item.authorId).name;
    const locationName = location.find(location => location.id === item.locationId).location;
    // console.log( autor.find(autor => autor.id === item.authorId) );
    return (
        <div className={ paintingItem() } >
            <img src={ `https://test-front.framework.team${ item.imageUrl }` } loading="lazy" alt={ item.name } />
            <div className={ paintingItem( 'info' ) }>
                <p className={ paintingItem( 'name' ) }>
                    { item.name }
                </p>
                <p className={ paintingItem( 'description' ) }>
                    <span className={ paintingItem( 'description-title' ) }>Author: </span>
                    { autorName }
                </p>
                <p className={ paintingItem( 'description' ) }>
                    <span className={ paintingItem( 'description-title' ) }>Created: </span>
                    { item.created }
                </p>
                <p className={ paintingItem( 'description' ) }>
                    <span className={ paintingItem( 'description-title' ) }>Location: </span>
                    { locationName }
                </p>
            </div>
        </div>
    )
}

export default PaintingItem;