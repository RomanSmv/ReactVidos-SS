import React, {useState} from 'react'
import styles from "./Paginator.module.css";

let Paginator = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;


    return (
        <div className={styles.paginator}>
            {// если номер показываемой порции больше 1, то показать кнопку Prev с онкликом изменить номер показываемой порции на -1
                portionNumber > 1
                    ? <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
                    : null}
            {pages
                //находим нужную порцию по пограничным страницам порции
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p =>
                    <span key={Math.random()} className={props.currentPageNumber === p ? styles.selectedPage : styles.page}
                          onClick={() => {
                              props.onPageChanged(p)
                          }}>{p}</span>
                )}
            {//если общее количество порций больше, чем текущая порция, то показать кнопку Next
                // с онкликом изменить номер показываемой порции на +1
                portionCount > portionNumber
                    ? <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
                    : null}
        </div>
    )
}

export default Paginator