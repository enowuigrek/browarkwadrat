import { BeerDescription } from '../components/BeerDescription/BeerDescription.jsx';
import beersData from '../data/beersData.js';

const batchNumber = 94;
const selectedBeer = beersData.find(beer => beer.batchNumber === batchNumber);

export function Wolnosypane() {
    return (
        <>
            <BeerDescription beer={selectedBeer} />
        </>
    )
}