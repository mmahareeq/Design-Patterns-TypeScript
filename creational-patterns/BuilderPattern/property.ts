class Property{
    _address: String;
    _transactionType: TransactionType;
    _propertyType: PropertyType;
    _totalBedrooms: Number;
    _floorArea: Number;
    _price: Number;
    _totalBathrooms: Number;
    _hasParking: Boolean;
    _hasPlayground: Boolean;
   
    public Print(){

        const information = `Address: ${this._address} ,
        Transaction Type: ${this._transactionType},
        Property Type: ${this._propertyType},
        Total Bedrooms: ${this._totalBedrooms},
        floorArea: ${this._floorArea},
        price: ${this._price},
        total Bathrooms: ${this._totalBathrooms},
        has Parking: ${this._hasParking},
        has Playground: ${this._hasPlayground}
        `
    }
}

enum TransactionType{
    Sale,
    Rent
}

enum PropertyType{
    House,
    Apartment
}

export {TransactionType, PropertyType, Property};