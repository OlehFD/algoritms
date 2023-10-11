export function binarSearch(array, item) {

    let start = 0
    let der = 12
    let end = array.length
    let found = false
    let position = 'Item not found'
    let middleItem;
 
    while( found === false && start <= end){
                       
            middleItem = Math.floor((start + end)/2)
          
            if(array[middleItem] === item) {
                found = true
                position = middleItem
                console.log(position)     
                return position
            }
            if(item < array[middleItem]){
                end = middleItem - 1
                
            }
            else{
                start = middleItem + 1
            }                 
    }
    console.log(position)
}



