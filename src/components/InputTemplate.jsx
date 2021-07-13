import {useState} from "react";

const InputTemplate = ({setBooks}) => {
    const titleURL = 'http://openlibrary.org/search.json?title=' 
    const [value, setValue] = useState('') //Значение из поля ввода
    const [message, setMessage] = useState(''); //Состояние для сообщений о загрузке, ошибках или успехе

    const getList = () => { //Функция для обращения к серверу
        setMessage('Загрузка...') 
        if (value.length > 0) { 
            
        fetch(`${titleURL + value}`) //передаю по умолчанию GET-запрос
         .then((response) => response.json()) 
         .then((data) => { 
          if (data.docs.length > 0) {             
              setBooks(data.docs); 
              setMessage(`Найдено книг: ${data.docs.length}`) //Устанавливаю сообщение о количестве полученных книг
           } else { 
               setBooks([]) //Вводится в состояние пустой массив
               setMessage('Ничего не найдено...') 
                    }
                })
                .catch((err) => setMessage(err.message)) //Проверяю на ошибки
        } else { 
            setMessage('Введите название книги') 
        }
    }

    return (
     <div className={'input-container'}>
         <h1>Укажите название книги</h1>
         <input 
           type={'text'}
           onInput={(e) => setValue(e.target.value)}
                // При вводе пользователя записываю данные в состояние
           readOnly={message === 'Загрузка...'}  />
    
          <button
              className={'btn'}
              disabled={value.length === 0 || message === 'Загрузка...'}
              onClick={() => getList()}>
              Найти
         </button> 
     {message ? <p>{message}</p> : ''} 
     </div>
    )
}

export default InputTemplate