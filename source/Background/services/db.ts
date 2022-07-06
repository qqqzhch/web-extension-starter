import Dexie from "dexie"

interface IContact {
    id?: number,
    first: string,
    last: string
}

interface Iartblock{
    id?: number,
    tokenid:string,
    address?:string,
}

interface Iaddress{
    id?: number,
    address:string
}



export class ProviderBridgeServiceDatabase extends Dexie {
    contacts!: Dexie.Table<IContact, number>; // number = type of the primkey
    artblock!: Dexie.Table<Iartblock, number>; // number = type of the primkey
    address!: Dexie.Table<Iaddress, number>;
    constructor() {
        super("test/provider-bridge-service")

        this.version(1).stores({
            contacts: "++id,first,last",
          })
          this.version(2).stores({
            artblock:"++id,tokenid"
          })
          this.version(3).stores({
            address:"++id,address"
          })
          this.version(4).stores({
            artblock:"++id,tokenid,address"
          })

    }
   async addaddartList(list:string[],address:string){
       let _this=this;
       let result:any[]=[]
    list.forEach( async (item)=>{
       let rt = await  _this.addartblock(item,address)
       result.push(rt)
    })
    return result

   }
   async addartblock(tokenID:string,address:string): Promise<string | number>{
       let havedata = await this.artblock.filter((item)=>{
        return  item.tokenid==tokenID&&item.address==address
       }).toArray()
       if(havedata.length==0){
        let obj:Iartblock={
            tokenid:tokenID,
            address:address
        }
        return this.artblock.put(obj)

       }else{
           return ''
       }

   }
   async addaddress(addr:string): Promise<string | number>{
    let havedata = await this.address.filter((item)=>{
        return  item.address==addr
       }).toArray()

       if(havedata.length==0){
        let obj:Iaddress={
            address:addr
        }
        return this.address.put(obj)

       }else{
           return ''
       }
   }
   async getaddress(): Promise<string|null>{
    let list = await this.address.toArray();
    console.log('getaddress',list)
    if(list.length==0){
        return null
    }
    let address = list[list.length-1]
    return address.address

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
    async artlist(addr:string):Promise<Iartblock[]>{
      return  this.artblock.filter((item)=>{
       console.log('',item.address)
        return  item.address==addr
       }).toArray()

    }
    

}

export async function getOrCreateDB(): Promise<ProviderBridgeServiceDatabase> {
    return new ProviderBridgeServiceDatabase()
  }