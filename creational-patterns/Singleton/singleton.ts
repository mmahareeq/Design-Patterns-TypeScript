/*
Singleton is a type of creational design pattern that allows the creation of one instance of the class.
if a class has an instance that will be returned, if not will be created new one.

- use the Singleton Pattern when a class should have a single object such as : 
 - Services :  store a state ,  configuration, and provide access to resources
 - DataBase :   when connection with database;
 - Configraution : if there is an object with a specific configuration in our program, we don't need every time createing 
    new instance from this object.  
*/
//import mongoose from 'mongoose';
class DataBase {

   private static instance: DataBase;

    // constructor should  be private until preventing direct accessing by a new keyword
    private constructor(){
        console.log("hello");

        // example
        /*
        
            mongoose.connect(process.env.DB_ENDPOINT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }).then(() => console.log('MongoDB connection established successfully'))
        .catch((e: mongoose.Error) => console.log(`MongoDB connection failed with error: ${e}`));
        
        */
    }
    
    // static means you can call this method without creating instance of a class
    // this method keep just retruned one instance. 
    public static getInstance(): DataBase{

        if(!this.instance){
            this.instance = new DataBase();
        }

        return this.instance;
    }
   
}

function ClientCode(){
   const obj1 = DataBase.getInstance();
   const obj2 = DataBase.getInstance();

   if(obj1 === obj2)
     console.log('Singleton works');
    else
      console.log('Singleton failed')
}

ClientCode();