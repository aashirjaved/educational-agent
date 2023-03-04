const apiURL = 'http://localhost:8000/'

export const moduleService = {
    getAll : async () => {
        try {
            const response = await fetch(`${apiURL}modules`, {     
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("JWT")}`
                }
            })
            return await response.json();
        } catch (e) {
            console.log(e)
        }
    }
}

export const auth = {
    login: async() => {
        try{
            const response = await fetch(`${apiURL}auth/sign-in`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email":"something@gmail.com",
                    "password":"123456"
                })
            } )
            return await response.json()
        } catch (error) {
            console.log(error)
        }
    },
}

export const queries = {
    ask: async (query) => {
        try {
            const response = await fetch(`${apiURL}queries/maths`, {     
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("JWT")}`
                },
                body: JSON.stringify({
                    query: query
                })
            })
            return await response.json();
        } catch(e) {
            console.log(e)
        }
    }
}