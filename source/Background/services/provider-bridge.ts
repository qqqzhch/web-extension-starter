import browser, { Runtime } from "webextension-polyfill"
import share from '../../share'

import {emitter} from "./event"
import {ProviderBridgeServiceDatabase} from './db'

let channel:string='channel'


export {channel}

export class providerbridge{
    openPorts: Array<Runtime.Port> = []
    db:ProviderBridgeServiceDatabase
    constructor(db:ProviderBridgeServiceDatabase){
       this.db=db
        browser.runtime.onConnect.addListener(async (port) => {
            if (port.name === share.EXTERNAL_PORT_NAME && port.sender?.url) {
              port.onMessage.addListener((event) => {
                this.onMessageListener(port as Required<browser.Runtime.Port>, event)
              })
              port.onDisconnect.addListener(() => {
                this.openPorts = this.openPorts.filter(
                  (openPort) => openPort !== port
                )
              })
              this.openPorts.push(port)
            }
          })

    }
    onMessageListener(port: Required<browser.Runtime.Port>,
        event: any){
          console.log(port,event)
          this.db.add()
          emitter.emit(channel,event)

    }
}


      
      