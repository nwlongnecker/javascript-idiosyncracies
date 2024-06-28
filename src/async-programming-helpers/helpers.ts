import { dirname, join } from 'path';

const dirName = dirname(require.main!.filename);
export const inFileName = join(dirName, '../../resources/prices.json');
export const outDirName = join(dirName, '../../out');
export const outFileName = join(outDirName, 'pricesWithTax.json');

interface PricedItem {
    name: string
    price: number
}
interface PricedItemWithTax {
    name: string
    price: number
    priceWithTax: number
}

const calculateTotalPrice = (basePrice: number): number => Math.round(basePrice * 1.0625 * 100) / 100;

const createPricedItemWithTax = (pricedItem: PricedItem): PricedItemWithTax => ({
    ...pricedItem,
    priceWithTax: calculateTotalPrice(pricedItem.price)
});

const addTaxToPricedItems = (pricedItems: PricedItem[]): PricedItemWithTax[] =>
    pricedItems.map(createPricedItemWithTax);

export const processFileData = (fileContents: string): string => {
    const pricedItems: PricedItem[] = JSON.parse(fileContents);
    const taxedItems: PricedItemWithTax[] = addTaxToPricedItems(pricedItems);
    return JSON.stringify(taxedItems, null, 2);
}