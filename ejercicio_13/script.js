const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},   
    {username: 'maria3', age: 36, premium: false},  
    {username: 'abc123', age: 30, premium: false},   
    {username: 'sergio58', age: 30, premium: true},   
    ];

var normal = new Array();

for (const user of users) {
    if (user.premium === true) {
        console.log(`${user.username} es un usuario premium`);
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(`${user.username} es un usuario premium`);
        parrafo.appendChild(texto);
        document.body.appendChild(parrafo);
    } else {
        normal.push(user);
    }
}
console.log(normal);
   

