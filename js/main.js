

axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>{

        res.data.forEach((user)=>{   
            document.getElementById('data').innerHTML += `
            <tr >
            <td class="column1"><a href="postByUser.html?userID=${user.id}&name=${user.username}">${user.name}</a></td>
            <td class="column2">${user.username}</td>
            <td class="column3">${user.email}</td>
            <td class="column4">${user.phone}</td>
            <td class="column6">${user.address.street}</td>
            <td class="column6">${user.website}</td>        
            </tr>
            `;

        }); 
     });

  
                                    
 


     


