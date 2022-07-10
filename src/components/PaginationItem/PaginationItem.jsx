import { withNaming } from '@bem-react/classname';
import './styles.css';

const cn = withNaming({ n: '', e: '__', m: '--' });
const paginationItem = cn('pagination-item');

const PaginationItem = ( { page, activePage, totalPages } ) => {
    let classNamePagination = paginationItem();

    if(page === activePage) {
        classNamePagination = paginationItem({active: true});
    } else if( ( activePage === 1 && ( page === '<<' || page === '<' ) ) || ( activePage === totalPages && ( page === '>' || page === '>>' ) ) ) {
        classNamePagination = paginationItem( { disable: true} )
    }
    return(
        <li className={classNamePagination}>{ page }</li>
    )
}

export default PaginationItem;