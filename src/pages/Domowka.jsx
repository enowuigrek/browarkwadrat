import { BeerDescription } from '../components/BeerDescription/BeerDescription.jsx';
import beersData from '../data/beersData.json';

const batchNumber = 93;
const selectedBeer = beersData.find(beer => beer.batchNumber === batchNumber);

export function Domowka() {
    return (
    <>
            <BeerDescription beer={selectedBeer} />
    </>
    )
}