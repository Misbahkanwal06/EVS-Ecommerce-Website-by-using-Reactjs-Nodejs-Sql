

export const getStorageItem = async (key) => {
    try {
        const storageResponse = await localStorage.getItem(key);
        let customer = await JSON.parse(storageResponse);
        console.log("customer in storage", customer);
        return customer;
    } catch (error) {
        console.log("Error in getting Storage data", error);
    }
};

export const setStorageItem = async (key, obj) => {
    try {
        const storageResponse = await localStorage.setItem(key, JSON.stringify(obj));
        return true;
    } catch (error) {
        console.log("Error in setting data in storage", error);
    }
};
