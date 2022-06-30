import browser, { Runtime } from "webextension-polyfill"
import share from '../../share'

import {emitter} from "./event"

let channel:string='channel'


export {channel}

export class providerbridge{
    openPorts: Array<Runtime.Port> = []
    constructor(){
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
          emitter.emit(channel,event)

    }
}


      
      