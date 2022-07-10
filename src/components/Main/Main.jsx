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
    const [author, setAuthor] = useState( [] );
    const [location, setLocation] = useState( [] );

    const [totalPages, setTotalPages] = useState( 0 );
    const [page, setPage] = useState( 1 );
    const limit = 12;
    
    const [name, setName] = useState( undefined );
    const [selectedAuthor, setSelectedAuthor] = useState( undefined )
    const [selectedLocation, setSelectedLocation] = useState( undefined )

    async function fetchPaintings() {
        const painting = await Api.getPaintings( limit, page, name, selectedAuthor, selectedLocation );
        setPainting( painting.data );
        const totalCount = painting.headers[ 'x-total-count' ];
        setTotalPages( getPageCount( totalCount, limit ) )
    }

    let pagesArray = getPagesArray( totalPages );

    const changePage = (linkPage) => {
        setPage(linkPage);
    }

    async function fetchAuthors() {
        const author = await Api.getAuthors();
        setAuthor(author);
    }

    async function fetchLocations() {
        const location = await Api.getLocations();
        setLocation(location);
    }

    useEffect( () => {
        fetchPaintings();
    }, [ fetchPaintings, page, name, selectedAuthor, selectedLocation ])

    useEffect( () => {
        fetchAuthors();
        fetchLocations();
    }, [])

    return(
        <main className={main()}>
            <Fillter
                name = { name }
                setName = { setName }
                author = { author }
                selectedAuthor = { selectedAuthor }
                setSelectedAuthor = { setSelectedAuthor }
                location = { location }
                selectedLocation = { selectedLocation }
                setSelectedLocation = { setSelectedLocation }
            />
            <PaintingList
                painting = { painting }
                author = { author }
                location = { location }
            />
            <PaginationList
                pagesArray = { pagesArray }
                activePage = { page }
                totalPages = { totalPages }
                changePage = { changePage }
            />
        </main>
    )
}

export default Main;