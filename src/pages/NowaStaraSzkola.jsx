import { BeerDescription } from '../components/BeerDescription/BeerDescription.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import beersData from '../data/beersData.js';

const batchNumber = 97;
const selectedBeer = beersData.find(beer => beer.batchNumber === batchNumber);

export function NowaStaraSzkola() {
    return (
        <>
            <BeerDescription beer={selectedBeer} />
            <Footer />
        </>
    )
}
