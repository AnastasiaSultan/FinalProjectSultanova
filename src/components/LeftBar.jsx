import React, {useEffect, useState} from 'react'
import InputTemplate from "./InputTemplate";
import BookList from "./BookList";

export const LeftBar = ({setBook}) => {
    const [list, setList] = useState([]) //Состояние, в которое записываю список книг, которые пришли в ответ с API

    useEffect(() => {
        document.title = list.length > 0 ? `Найдено книг: ${list.length}` : `По запросу ничего не найдено.` //Устанавливаю заголовок документа (текст вкладки)
        if(list.length === 0){ 
            setBook({})   }
    }, [list]) 

   
    return (
     <div className={'left-bar-container'}>
         <InputTemplate setBooks={setList}/>
         {list.length > 0 ? (
                // Если в массиве есть книги, то вывожу список книг
          <BookList list={list} setBook={setBook}/>  ) : ''}
    </div>
    )
}