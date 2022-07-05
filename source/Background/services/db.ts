import Dexie from "dexie"

interface IContact {
    id?: number,
    first: string,
    last: string
}

interface Iartblock{
    id?: number,
    tokenid:string
}



export class ProviderBridgeServiceDatabase extends Dexie {
    contacts!: Dexie.Table<IContact, number>; // number = type of the primkey
    artblock!: Dexie.Table<Iartblock, number>; // number = type of the primkey
    constructor() {
        super("test/provider-bridge-service")

        this.version(1).stores({
            contacts: "++id,first,last",
          })
          this.version(2).stores({
            artblock:"++id,tokenid"
          })

    }
   async addaddartList(list:string[]){
       let _this=this;
       let result:any[]=[]
    list.forEach( async (item)=>{
       let rt = await  _this.addartblock(item)
       result.push(rt)
    })
    return result

   }
   async addartblock(tokenID:string): Promise<string | number>{
       let havedata = await this.artblock.filter((item)=>{
        return  item.tokenid==tokenID
       }).toArray()
       if(havedata.length==0){
        let obj:Iartblock={
            tokenid:tokenID
        }
        return this.artblock.put(obj)

       }else{
           return ''
       }

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
    async artlist():Promise<Iartblock[]>{
      return  this.artblock.toArray()

    }
    

}

export async function getOrCreateDB(): Promise<ProviderBridgeServiceDatabase> {
    return new ProviderBridgeServiceDatabase()
  }