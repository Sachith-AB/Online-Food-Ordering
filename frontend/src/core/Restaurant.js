export const  getRestaurantDetails = async (jwt) => {
    try{
        const res = await fetch('http://localhost:5454/api/resturant',{
            headers:{  
                'Content-Type':'Application/json',
                Authorization:`Bearer ${jwt}`,
            },
            method:'GET'
        })
        if(!res.ok){
            console.log('error when fetch data');
        }
        const data = await res.json();
        return data;

    }catch(error){
        console.log(error)
    }
}

export const getResaurant = async (jwt,id) => {
    try{
        const res = await fetch(`http://localhost:5454/api/resturant/${id}`,{
            headers:{  
                'Content-Type':'Application/json',
                Authorization:`Bearer ${jwt}`,
            },
            method:'GET'
        })
        if(!res.ok){
            console.log('error when fetch data');
        }
        const data = await res.json();
        return data;

    }catch(error){
        console.log(error)
    }
}