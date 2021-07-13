const BookList = ({list, setBook}) => {
    const updateBook = (item) => { //По клику на название книги записываю книгу в состояние
        setBook(item); //чтобы книга отобразилась в RightBar
    }


    return (
      <ol>
         {list.map((item, index) => {
     return (
      <li  key={`list_item_${index}`}>
          <span
             className={'list-item'}
             onClick={() => updateBook(item)}  >
                            
           {`${item.title !== undefined //Делаю проверки на undefined потому что не у всех одинаковые поля
              ? item.title : ''} (${item.first_publish_year !== undefined
              ? item.first_publish_year : ''})`} - {item.author_name !== undefined
              ? item.author_name.join(', ') : ''}
         </span>
    </li>
        )
       })}
      </ol>
    )
}

export default BookList;