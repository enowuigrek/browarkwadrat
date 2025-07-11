import { BeerDescription } from '../components/BeerDescription/BeerDescription.jsx';
import beersData from '../data/beersData.json';

const batchNumber = 95;
const selectedBeer = beersData.find(beer => beer.batchNumber === batchNumber);

export function DalejJestTaniej() {
    return (
        <>
            <BeerDescription beer={selectedBeer} />
        </>
    )
}