import { withNaming } from '@bem-react/classname';
import PaginationItem from '../PaginationItem/PaginationItem';
import './styles.css';

const cn = withNaming({ n: '', e: '__', m: '--' });
const paginationList = cn('pagination-list');

const PaginationList = ( { pagesArray, activePage, totalPages } ) => {
    return(
        <ul className={ paginationList() }>
            {pagesArray?.map( page => 
                <PaginationItem 
                    page = { page } 
                    activePage = { activePage }
                    totalPages = { totalPages }
                />
            )}
        </ul>
    )
}

export default PaginationList;