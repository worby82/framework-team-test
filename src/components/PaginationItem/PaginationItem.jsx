import { withNaming } from '@bem-react/classname';
import './styles.css';

const cn = withNaming({ n: '', e: '__', m: '--' });
const paginationItem = cn('pagination-item');

const PaginationItem = ( { page, activePage, totalPages, changePage } ) => {
    let classNamePagination = paginationItem();
    let linkPage = null;

    if( page === activePage ) {
        classNamePagination = paginationItem( { active: true } );
    } else if( ( activePage === 1 && ( page === '<<' || page === '<' ) ) || ( activePage === totalPages && ( page === '>' || page === '>>' ) ) ) {
        classNamePagination = paginationItem( { disable: true } )
    }
    
    if ( page === '<<' && activePage > 1 ) {
        linkPage = 1;
    } else if( page === '<' && activePage > 1 ) {
        linkPage = activePage - 1;
    } else if( page === '>' && activePage < totalPages ) {
        linkPage = activePage + 1;
    } else if( page === '>>' && activePage < totalPages ) {
        linkPage = totalPages;
    } else if( typeof(page) === 'number' ) {
        linkPage = page;
    }
    // console.log(typeof(page));


    return(
        <li className={ classNamePagination } onClick={ linkPage !== null ? () => changePage( linkPage ) : undefined } >{ page }</li>
    )
}

export default PaginationItem;