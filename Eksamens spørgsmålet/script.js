function findes(array){
    for(let i = 0; i < array.length; i++){

        for(let j = 0; j < array.length; j++){

           if(i < j){

                if(array[i] === array[j]){
                    return array[i];
                }

           }
        }
    }
    return false;
}


class undersog {

    constructor(array){
        this.array = array;
    }

    findes(){
        for(let i = 0; i < this.array.length; i++){
    
            for(let j = 0; j < this.array.length; j++){
    
               if(i < j){
    
                    if(this.array[i] === this.array[j]){
                        return this.array[i];
                    }
    
               }
            }
        }
        return false;
    }

}

