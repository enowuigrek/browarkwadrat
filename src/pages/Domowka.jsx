import { BeerDescription } from '../components/BeerDescription/BeerDescription.jsx';
import { Footer } from '../components/common/Footer/Footer.jsx';
import beersData from '../data/beersData.js';

const batchNumber = 93;
const selectedBeer = beersData.find(beer => beer.batchNumber === batchNumber);

export function Domowka() {
    return (
        <>
            <BeerDescription beer={selectedBeer} />
            <Footer />
        </>
    )
}