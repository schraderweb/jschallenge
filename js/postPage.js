
let baseUrl = (window.location).href; // You can also use document.URL
let id = baseUrl.substring(baseUrl.indexOf('=') + 1);

let username = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
console.log(username);

document.getElementById('user').innerHTML = `${username}'s Posts`;



axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
     .then(res=>{
        res.data.forEach((post)=>{   
            document.getElementById('post').innerHTML += `
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            `;

        }); 
     });