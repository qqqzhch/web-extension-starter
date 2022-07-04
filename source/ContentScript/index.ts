console.log('helloworld from content script');
import browser from 'webextension-polyfill';
import share from '../share'

const windowOriginAtLoadTime = window.location.origin

let close=false;

export function setconn() {

  let port = browser.runtime.connect({ name: share.EXTERNAL_PORT_NAME })

  port.onDisconnect.addListener(function() {
    // clean up when content script gets disconnected
    // close=true;
  console.log('断开链接')
  })
  //只有我定义的接口可以发送信息
  // window.addEventListener("message", (event) => {
  //   // if (
  //   //   event.origin === windowOriginAtLoadTime && // we want to recieve msgs only from the in-page script
  //   //   event.source === window && // we want to recieve msgs only from the in-page script
  //   //   event.data.target === PROVIDER_BRIDGE_TARGET
  //   // ) {
  //   //   // TODO: replace with better logging before v1. Now it's invaluable in debugging.
  //   //   // eslint-disable-next-line no-console
  //   console.log(
  //     `%c content: inpage > background: ${JSON.stringify(event.data)}`,
  //     "background: #bada55; color: #222"
  //   )

  //   port.postMessage(event.data)
  //   // }
  // })

  port.onMessage.addListener((data) => {
    // TODO: replace with better logging before v1. Now it's invaluable in debugging.
    // eslint-disable-next-line no-console
    console.log(
      `%c content: background > inpage: ${JSON.stringify(data)}`,
      "background: #222; color: #bada55"
    )
    window.postMessage(
      {
        ...data,
        target: share.WINDOW_PROVIDER_TARGET,
      },
      windowOriginAtLoadTime
    )
  })

  // let's grab the internal config
  port.postMessage({ request: { method: "tally_getConfig" } })

  myFunction(port);

}


setconn()

function myFunction(port:any) {


  // Create an "li" node:
  const node = document.createElement("button");
  
  // Create a text node:
  const textnode = document.createTextNode("like");
  //textnode.style="position: fixed;color: red;"
  
  
  // Append the text node to the "li" node:
  node.appendChild(textnode);
  node.style.color='red'
  node.style.position='fixed'
  node.style.left='50%'
  node.style.top='50%'
  node.onclick=function(){
    console.log('点击',port)
    // if('https://opensea.io'==windowOriginAtLoadTime){
    //   let imgurl = (document.querySelector(".Image--image")as HTMLImageElement) .src;
    //   let name = (document.querySelector(".item--collection-detail") as HTMLElement) .innerText;
    if(close){
      return ;
    }
      port.postMessage({
        imgurl:'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_e835568.png',
        name:'test',
        site:'opensea'
      })
    // }
    
  }
  
  // if(['https://opensea.io'].indexOf(windowOriginAtLoadTime)>-1){
    // Append the "li" node to the list:
    setTimeout(()=>{
      console.log('插入元素')
      document.body.appendChild(node);
    },1000*10) 
  // }
  
  
  }


