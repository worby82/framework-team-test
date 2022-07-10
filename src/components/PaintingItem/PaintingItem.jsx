import { withNaming } from '@bem-react/classname';
import './styles.css';

const cn = withNaming( { n: '', e: '__', m: '--' } );
const paintingItem = cn( 'painting-item' );

const PaintingItem = ( { item, author, location } ) => {
    const authorName = author.find(author => author.id === item.authorId).name;
    const locationName = location.find(location => location.id === item.locationId).location;
    return (
        <div className={ paintingItem() } >
            {/* <picture> */}
                <img src={ `https://test-front.framework.team${ item.imageUrl }` } loading="lazy" alt={ item.name } />
            {/* </picture> */}
            <div className={ paintingItem( 'info' ) }>
                <p className={ paintingItem( 'name' ) }>
                    { item.name }
                </p>
                <p className={ paintingItem( 'description' ) }>
                    <span className={ paintingItem( 'description-title' ) }>Author: </span>
                    { authorName }
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