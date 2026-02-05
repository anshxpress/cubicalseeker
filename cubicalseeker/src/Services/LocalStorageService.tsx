const setItem=(key:string, value:string)=>{
    localStorage.setItem(key,JSON.stringify(value));
}
const getItem=(key:string)=>{
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error("Error parsing localStorage key:", key, error);
        localStorage.removeItem(key); // Clear invalid data to fix the crash
        return null;
    }
}
const removeItem=(key:string)=>{
    localStorage.removeItem(key);
}
export {setItem,getItem,removeItem};