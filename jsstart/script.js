



function addBasket(){
    var array = []
    return (arr)=>{
        array.push(arr);
        console.log(array);
        return array;
    }
}

const func = addBasket();

func('leyla');
func('huseyn');
func(22)