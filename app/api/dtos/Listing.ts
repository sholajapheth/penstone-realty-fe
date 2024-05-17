export type Listings = {
    filters? : Filter | []
}

export type Filter = {
    area? : string | undefined,
    marketType? : string | undefined,
    propertyType? : string | undefined,
    price? : Price
}

export type Price = {
    min: number | undefined,
    max: number | undefined
}