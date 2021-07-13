import {useEffect} from "react";

const RightBar = ({book}) => {
    

    useEffect(() => {
        if (book) { 
            if(book.title !== undefined) 
                document.title = `${book.title} (${book.author_name !== undefined ? book.author_name : ''})`
        }
    }, [book]) //Слежу за объектом выбранной книги

    return (
      <div className={'right-bar-container'}>
          {book ? (
          <>
              <div className={'image-container'}>
              <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}/>
                        
      </div>
                    
       <h2>{book.title !== undefined ? book.title : ''}</h2>
        {book.author_name !== undefined ?
        <p>Авторы книги: {book.author_name.join(', ')}</p> : ''}
        {book.language !== undefined ?
        <p>Языки книги: {book.language.join(', ')}</p> : ''}
         {book.publish_year !== undefined ?
        <p>Года публикации: {book.publish_year.join(', ')}</p> : ''}
         {book.publish_place !== undefined ?
         <p>Место публикации: {book.publish_place.join(', ')}</p> : ''}
         {book.subject_facet !== undefined ?
         <p>Ключевые слова: {book.subject_facet.join(', ')}</p> : ''}
         {book.publisher !== undefined ?
          <p>Книга была опубликована: {book.publisher.join(', ')}</p> : ''}
          </>
            ) : ''}
        </div>
    )
};

export default RightBar