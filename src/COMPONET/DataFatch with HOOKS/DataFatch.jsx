
import { useState, useEffect } from 'react'






const loadingMessage = <p> todo is loading </p>


const DataFatch = () => {

    const [todos, setTodos] = useState(null)
    const [isLoding, setIsLoding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")

                .then((res) => {
                    if (!res.ok) {
                        throw Error(" faching is not successFull");
                    }
                    else {
                        return res.json();
                    }

                })

                .then((data) => {
                    setTodos(data);
                    setIsLoding(false);
                    setError(null);
                })
                .case((error) => {
                    setError(error.message);
                    setIsLoding(false);

                })

        }, 1000);



    }, []);


    const todosElement =
        todos && todos.map((todo) => {
            return <p key={todo.id} > {todo.title} </p>
        });



    return (
        <div style={{ padding: "2rem" }} >
            <h1> Todos </h1>
            {error && <p> {error} </p>}
            {isLoding && loadingMessage}
            {todosElement}

        </div>
    )
}

export default DataFatch