export const getUserDetails = async (jwt) => {
    try{
        const res = await fetch('http://localhost:5454/api/user/profile',{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${jwt}`,
            },
        });
        if(!res.ok){
            console.log("Error when fetch data");
        }
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error)
    }
}

export const getResaurantDetial = async (jwt) => {
    try{
        const res = await fetch('http://localhost:5454/api/food/allFoods',{
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