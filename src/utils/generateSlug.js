export const generateSlug = (name) => {
    return name.toLowerCase()
        .replace(/\s+/g, '')           // usuń spacje
        .replace(/[^a-z0-9]/g, '');    // usuń znaki specjalne
};

// Mapping dla istniejących stron
export const BEER_SLUG_MAPPING = {
    'domowka': 93,
    'wolnosypane': 94,
    'dalejjesttaniej': 95,
    '50metrowdalejjesttaniej': 95  // alternatywny slug
};

export const getBeerBySlug = (slug, beersData) => {
    const batchNumber = BEER_SLUG_MAPPING[slug];
    if (batchNumber) {
        return beersData.find(beer => beer.batchNumber === batchNumber);
    }

    // Fallback - szukaj po wygenerowanym slug
    return beersData.find(beer =>
        generateSlug(beer.name) === slug
    );
};