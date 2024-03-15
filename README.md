# Якщо Redux

---- на прикладі компоненту BALANCE -----
Оголосити стор (store.js - 12 рядок)

1.  Оголосити стан (слайс)
    Стан (слайс) оголошуємо в файлі --nameSlice.js-- у --nameReducer-- (state = { value: 100 })

2.  Використати стан у jsx
    У компоненті BALANCE викликаємо useSelector для того, щоб підписати компонент на стан (13 рядок)

3.  Оголосити екшен (balanceSlice 27-39 рядки )

          export const deposit = (value) => {
           return {
                   type: "balance/deposit", //тип action що трапивсся  (що трапилося і у якому слайсі - deposit у balance)
                  payload: value, //дані що потрібно передати до стору

    };
    };

4.  Відправити екшен при подіі
    У компонент експортуємо із файлу --nameSlice.js-- потрібні екшени
    У компоненті викликаємо const dispatch = useDispatch();
    onClick={() => dispatch(deposit(value))}>

5.  Обробити екшен у редюсері
    --nameReducer-- приймає action, шукає в себе відповідний кейс для обробки action
