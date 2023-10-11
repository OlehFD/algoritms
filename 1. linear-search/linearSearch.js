export function linerSearch(array, item) {
  
    for(let i=0; i < array.length; i++){
        if(array[i] === item){       
        let currentItemIndex = array.indexOf(array[i]) 
        console.log(currentItemIndex)
        return
       }   
    }
    console.log('item not finde')
}

