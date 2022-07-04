import Dexie from "dexie"

interface IContact {
    id?: number,
    first: string,
    last: string
}

export class ProviderBridgeServiceDatabase extends Dexie {
    contacts!: Dexie.Table<IContact, number>; // number = type of the primkey
    constructor() {
        super("test/provider-bridge-service")

        this.version(1).stores({
            contacts: "++id,first,last",
            
          })

    }
   async add(): Promise<string | number>{
        let obj:IContact={
            first:'zhang'   ,
            last:'fei'
        }
        return this.contacts.put(obj)
    }
    async list():Promise<IContact[]>{
        return this.contacts.toArray()
    }
    

}

export async function getOrCreateDB(): Promise<ProviderBridgeServiceDatabase> {
    return new ProviderBridgeServiceDatabase()
  }