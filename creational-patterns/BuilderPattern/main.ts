import { PropertyBuilder } from "./propertyBuilder";
import { TransactionType, PropertyType } from "./property";

const main = ()=>{
    var property1 = new PropertyBuilder()
    .SetAddress("123 Main st.")
    .SetPrice(400_000)
    .SetPropertyType(PropertyType.House)
    .SetTotalBathrooms(4)
    .SetFloorArea(190.0)
    .SetTotalBathrooms(3)
    .SetHasParking(true)
    .SetHasPlayground(true)
    .build();
     
    console.log(property1.Print());


} 