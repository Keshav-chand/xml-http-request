const newTodo = {
    "userId": 1,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
};
const result=()=>{
fetch(
    'https://jsonplaceholder.typicode.com/posts',
    
)

.then(response => {response.json())}
.then(value => {console.log(value))}
};