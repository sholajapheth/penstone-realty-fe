export type Listings = {
    filters? : Filter | []
}

export type Filter = {
    area? : string,
    marketType? : string,
    propertyType? : string,
    price? : Price
}

export type Price = {
    min: number,
    max: number
}