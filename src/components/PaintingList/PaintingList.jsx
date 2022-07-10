import { withNaming } from '@bem-react/classname';
import './styles.css';
import PaintingItem from '../PaintingItem/PaintingItem';

const cn = withNaming( { n: '', e: '__', m: '--' } );
const paintingList = cn( 'painting-list' );

const PaintingList = ( { painting, author, location } ) => {
    // console.log( painting );
    return(
        <div className={ paintingList() }>
            { painting?.map( ( item ) => <PaintingItem item = { item } author = { author } location = { location } key = { item.id } /> )
            }
        </div>
    )
}

export default PaintingList;