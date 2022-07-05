{
 tokens(first: 5,  where:{
  	owner:"0xe18fc96ba325ef22746ada9a82d521845a2c16f8"
}) {
   
    tokenId 
      id
      contract {
        id
      }
      hash
      owner {
        id
        
      }
  		uri
   
  }
}

{
 accountProjects(first: 2,  where:{
  	account:"0xe18fc96ba325ef22746ada9a82d521845a2c16f8"
}) {
   
    id
  	count
    account {
   		id,
      tokens {
        id 
        tokenId
        hash
      }
		}
  	
   
  }
}
  

  {
 projectScripts (first: 2,  where:{
  	id:"0x010be6545e14f1dc50256286d9920e833f809c6a-0-0"
}) {
   
    id
  	index
  	script
  	
   
  }
}
  