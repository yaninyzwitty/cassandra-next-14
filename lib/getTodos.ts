export const getTodos = () => fetch('/api/todos').then((res) => res.json()).catch((err) => console.log(err))