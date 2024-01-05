var productList = [
    {id : 1 , name : 'REDMI NOTE 13' , desc : "Brief description of Product 1.", img : 'images/images.jpg' , type : '4G'},
    {id : 2 , name : 'VIVO Y16' , desc : "Brief description of Product 2.", img : 'images/images1.jpg' , type : '4G' },
    {id : 3 , name : 'REDMI NOTE 1' , desc : "Brief description of Product 2.", img : 'images/images2.jpg' , type : '5G'},
    {id : 4 , name : 'REDMI NOTE 14' , desc : "Brief description of Product 2.", img : 'images/images3.jpg' , type : '4G'},
    {id : 5 , name : 'REDMI NOTE 12' , desc : "Brief description of Product 2.", img : 'images/images.jpg' , type : '4G'},
    {id : 6 , name : 'REDMI NOTE 2' , desc : "Brief description of Product 2.", img : 'images/images1.jpg' , type : '5G'},
    {id : 7 , name : 'REDMI NOTE 3' , desc : "Brief description of Product 2.", img : 'images/images2.jpg' , type : '5G'},
    {id : 8 , name : 'REDMI NOTE 4' , desc : "Brief description of Product 2.", img : 'images/images3.jpg' , type : '5G'}
];

var selectedProduct = {id : 1 , name : 'Dummy phone' , desc : "Good Product", img : 'images.jpg' , type : '4G'}

function getProductById(id) {
    selectedProduct = productList.filter(p => p.id == Number(id))[0];
    return selectedProduct;
}