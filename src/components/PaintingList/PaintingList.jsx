import { withNaming } from '@bem-react/classname';
import PaintingItem from '../PaintingItem/PaintingItem';

const cn = withNaming( { n: '', e: '__', m: '--' } );
const paintingList = cn( 'painting-list' );

const PaintingList = ( { painting, autor, location } ) => {
    // console.log( painting );
    return(
        <div className={ paintingList() }>
            { painting?.map( ( item ) => <PaintingItem item = { item } autor = { autor } location = { location } key = { item.id } /> )
            }
        </div>
    )
}

export default PaintingList;