
import { Property, TransactionType, PropertyType } from "./property";
export class PropertyBuilder {
  
    private _property: Property = new Property();

    public SetAddress(address: string): PropertyBuilder{
        this._property._address = address;

        return this;
        
    }
    public SetPrice(price: Number): PropertyBuilder{
        this._property._price = price

        return this;
        
    }

    public SetHasParking(hasParking: Boolean): PropertyBuilder{
        this._property._hasParking = hasParking;
        return this;
    }

    public SetHasPlayground(hasPlayground: Boolean): PropertyBuilder{
        this._property._hasPlayground = hasPlayground;
        return this;
    }

    public SetTotalBathrooms(totalBathrooms: Number): PropertyBuilder {
        this._property._totalBathrooms = totalBathrooms;
        return this;
    }

    public SetTotalBedrooms(totalBadrooms: Number): PropertyBuilder {
        this._property._totalBedrooms = totalBadrooms;
        return this;
    }
     
    public SetFloorArea(floorArea: Number): PropertyBuilder{
        this._property._floorArea = floorArea;
        return this;
    }


    public SetTransactionType(transactionType: TransactionType): PropertyBuilder{
        this._property._transactionType= transactionType;
        return this;
    }
    public SetPropertyType(propertyType: PropertyType): PropertyBuilder{
        this._property._propertyType= propertyType;
        return this;
    }

    public build(): Property{
        return this._property;
    }

}