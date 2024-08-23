import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../modules/table.module.scss";

export const Table = () => {
  const [array, setArray] = useState<string[][]>([]);
  const [page, setPage] = useState(1);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.data);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const handlePreviousPage = () => {
    setPage((page > 0) ? page - 1 : 0);
  }

  const handleNextPage = () => {
    setPage(page + 1);
  }

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
          {array.map((item, index) => (
            (index < page * 25 && index > (page - 1) * 25) &&
            <tr key={index}>
              {item.map((str, index) => (
                <td className={styles.table_data} key={index}>{str}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttons_container}>
        <button onClick={handlePreviousPage}>Предыдущая страница</button>
        <button onClick={handleNextPage}>Следующая страница</button>
      </div>
    </div>
  );
}