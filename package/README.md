//Heavily in development

TS-Automap is auto mapping library for Typescript objects.
I'ts main purpose is to take an object and transform/map it to other shape.

#Usage
To use the library you need to have the interfaces of your source and destination objects.
You need to export the interface of your destination object from a file and later specify the file name and the directory.
First import two functions from the library:
import { transform, changePath } from "ts-automap";
Then use changePath function to specify the directory that contains your destination interfaces. For instance if your interfaces are located in the folder named 'interfaces', then use changePath("interfaces").
Then use 'transform' function to map the objects. 'transform' takes interfaces of source and destination object types as generics. The function intself takes source object, the name of the file containing the interface for destination as a string(without extension .ts) and object where keys are the the fields of the destination object and the values are functions that need to be executed on the respective fields. The function itself takes source object and destination object. It does not required to return anything, instead it directly modifies the the destionation object.
For insrtance
transform<Source, Destination>(sourceData, "Destination", {
bio: (src, dest) => {
dest.bio = "Developer".toLocaleLowerCase();
},
names: (src, dest) => {
dest.names = src.names.map((name: string) => name.toUpperCase());
},
})
