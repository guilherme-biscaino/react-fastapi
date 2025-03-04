import axios from "axios"

export const handleDeposit = async (data) =>  {
    
    const { fromAccount, amount, password } = data;

    const requestBody = {
        account_start: fromAccount,
        amount: amount,
        password: password,
    };

    const token = localStorage.getItem('authToken');
    
    try {
        const response = await axios.post("http://localhost:8000/deposit", requestBody, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
        },

    });
        return response.data
    } catch (error) {
        console.log("Erro ao realizar o depósito")
    }
}

export const handleWithdraw = async (data) =>  {
    
    const { fromAccount, amount, password } = data;

    const requestBody = {
        account_start: fromAccount,
        amount: amount,
        password: password,
    };

    const token = localStorage.getItem('authToken');
    
    try {
        const response = await axios.post("http://localhost:8000/withdraw", requestBody, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
        },

    });
        return response.data
    } catch (error) {
        console.log("Erro ao realizar o depósito")
    }
}

export const handleTransfer = async (data) =>  {
    
    const { fromAccount, amount, toAccount, password } = data;

    const requestBody = {
        account_start: fromAccount,
        amount: amount,
        account_end: toAccount,
        password: password,
    };

    const token = localStorage.getItem('authToken');
    
    try {
        const response = await axios.post("http://localhost:8000/transfer", requestBody, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
        },

    });

    return response.data
    } catch (error) {
        console.log("Erro ao realizar o depósito")
    }
}



export const handleAccountCreate = async (data) =>  {
    
    const { password } = data;

    const requestBody = {
        password: password,
    };

    const token = localStorage.getItem('authToken');
    
    try {
        const response = await axios.post("http://localhost:8000/account/create", requestBody, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
        },

    });
        return response.data
    } catch (error) {
        console.log("Erro ao realizar o depósito")
    }
}

export const handleAccountDelete = async (data) =>  {
    
    const {fromAccount, password } = data;

    const token = localStorage.getItem('authToken');
    
    try {
        const response = await axios.delete("http://localhost:8000/account/delete", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
        },
        data: {
            "account" : fromAccount,
            "password": password
        }

    });
        
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const handleAccountHistory = async (data) =>  {
    

    const token = localStorage.getItem('authToken');
    
    try {
        const response = await axios.get("http://localhost:8000/account/history", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
        },

    });
        console.log(response)
        return response.data
    } catch (error) {
        console.log("Erro ao realizar o depósito")
    }
}

export const handleGetAllAccounts = async () =>  {
    

    const token = localStorage.getItem('authToken');
    
    try {
        const response = await axios.get("http://localhost:8000/account/getall", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
        },

    });
        return response.data
    } catch (error) {
        console.log("Erro ao realizar o depósito")
    }
}