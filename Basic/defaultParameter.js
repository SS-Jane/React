// Default Parameter

getDataCustomer = (customerName, customerAddress='Bangkok') => {    
    const address = `Customer name : ${customerName};
    Address : ${customerAddress}`

    return address;
}

console.log(getDataCustomer('a', 'b'));
console.log(getDataCustomer('a'));

