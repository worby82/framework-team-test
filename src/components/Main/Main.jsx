import { withNaming } from '@bem-react/classname';
import { useEffect, useState } from 'react';
import Api from '../../utils/api';
import { getPageCount, getPagesArray } from '../../utils/pages';
import Fillter from '../Fillter/Fillter';
import PaginationList from '../PaginationList/PaginationList';
import PaintingList from '../PaintingList/PaintingList';

const cn = withNaming({ n: '', e: '__', m: '--' });
const main = cn('main');

const Main = () => {
    const [painting, setPainting] = useState( [] );
    const [autor, setAutor] = useState( [] );
    const [location, setLocation] = useState( [] );
    const [totalPages, setTotalPages] = useState( 0 );
    const [limit, setLimit] = useState( 12 );
    const [page, setPage] = useState( 1 );

    async function fetchPaintings() {
        const painting = await Api.getPaintings( limit, page );
        // console.log( painting.headers );
        setPainting( painting.data );
        const totalCount = painting.headers[ 'x-total-count' ];
        setTotalPages( getPageCount( totalCount, limit ) )
    }

    let pagesArray = getPagesArray( totalPages );

    async function fetchAuthors() {
        const autor = await Api.getAuthors();
        setAutor(autor);
    }

    async function fetchLocations() {
        const location = await Api.getLocations();
        setLocation(location);
    }

    useEffect( () => {
        fetchPaintings();
        fetchAuthors();
        fetchLocations();
    }, [])

    return(
        <main className={main()}>
            <Fillter />
            <PaintingList
                painting = { painting }
                autor = { autor }
                location = { location }
            />
            <PaginationList
                pagesArray = { pagesArray }
                activePage = { page }
                totalPages = { totalPages }
            />
        </main>
    )
}

export default Main;