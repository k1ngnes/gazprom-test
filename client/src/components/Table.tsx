import { useState, useEffect } from "react";
import styles from "../modules/table.module.scss";
import {TTableData, TTableState} from "../types/types.ts";
import {fetchTable} from "../redux";
import {useDispatch, useSelector} from "react-redux";

export const Table = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()
  const { loading, table, error, errorMessage } = useSelector((state: TTableState) => state);
  const entireStore = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchTable())
    console.log(loading, table, error, errorMessage);
  }, [dispatch]);

  useEffect(() => {
    console.log("Entire Redux store:", entireStore);
  }, [table]);

  const handlePreviousPage = () => {
    setPage((page > 1) ? page - 1 : 1);
  }

  const handleNextPage = () => {
    setPage(page + 1);
  }

  const itemsPerPage = 25;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedTable = table ? table.slice(startIndex, startIndex + itemsPerPage) : [];

  return(
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table_data}>Article id</th>
            <th className={styles.table_data}>Subarticle id</th>
            <th className={styles.table_data}>Article name</th>
            <th className={styles.table_data}>External string id</th>
            <th className={styles.table_data}>Ecrlong name</th>
          </tr>
        </thead>
        <tbody>
        {loading &&
         <tr>
           <td className={styles.table_data}>Loading...</td>
         </tr>
        }
        {error &&
          <tr>
            <td className={styles.table_data}>An error occured: {errorMessage}</td>
          </tr>
        }
        {table &&
          paginatedTable.map((item: TTableData, index: number) => {
            console.log("That's how the item looks: ",item)
            console.log("The article id here is typed correctly, but it doesn't show on the page", item.articleid);
            console.log("Item keys:", Object.keys(item));
            return (
            <tr key={index}>
              <td className={styles.table_data}>{item["articleid"]}</td>
              <td className={styles.table_data}>{item["subarticleid"]}</td>
              <td className={styles.table_data}>{item["articlename"]}</td>
              <td className={styles.table_data}>{item["external_str_id"]}</td>
              <td className={styles.table_data}>{item["ecrlongname"]}</td>
            </tr>
          )
        })
        }
        </tbody>
      </table>
      <div className={styles.buttons_container}>
        <button className={styles.button} onClick={handlePreviousPage}>Предыдущая страница</button>
        <button className={styles.button} onClick={handleNextPage}>Следующая страница</button>
      </div>
    </div>
  );
}



