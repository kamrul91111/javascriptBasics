// //////////This example is just to fetch data//////////
// //fetch is promise based so we can implement async await
// //dummy api
// fetch('https://reqres.in/api/user')
//     //promises
//     .then(res => {
//         if (res.ok) {
//             console.log('success')
//         }
//         else {
//             console.log('error')
//         }
//         res.json()
//     }) //specifying it to be json data

//     .then(data => console.log(data)) //actual data
//     .catch(error => console.log('error')) //catching the error





//////////This example is to POST data//////////
//fetch is promise based so we can implement async await
//dummy api
//we do actions other than get by applying options section of the fetch method
fetch('https://reqres.in/api/user', {
    //the action being done by the api reuqest
    method: 'POST',
    //essentially stating the data is in json
    headers: {
        'Content-Type': 'application/json'
    },
    //actual data passing through the api request
    body: JSON.stringify({
        //name: 'User 1'
        id : 44
    })
}).then(res => {
    return res.json()
})
  .then(data => console.log(data)) //actual data
  .catch(error => console.log('error')) //catching the error