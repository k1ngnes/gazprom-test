import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../modules/table.module.scss";

export const Table = () => {
  const [array, setArray] = useState<string[][]>([]);
  const [page, setPage] = useState(25);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.data);
    const filteredArray = array.map((item) => item.filter((str, index) => index < 5));
    setArray(filteredArray);
    console.log(array);
  }

  useEffect(() => {
    fetchAPI();
  }, []);



  return(
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Article id</th>
            <th>Subarticle id</th>
            <th>Article name</th>
            <th>External string id</th>
            <th>Ecrlong name</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item, index) => (
            <tr key={index}>
              {item.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}