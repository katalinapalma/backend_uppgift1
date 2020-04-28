import React, { Component, Fragment } from 'react';
import styles from '../frontend/Students.module.css';

class Students extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tr className={styles.tableTR}>
              <th className={styles.tableTitle}>Students</th>
              <th className={styles.tableTitle}>Contact</th>
              <th className={styles.tableTitle}>Country</th>
            </tr>
            <tr>
              <td className={styles.tableTitle}>Alfreds Futterkiste</td>
              <td className={styles.tableTitle}>Maria Anders</td>
              <td className={styles.tableTitle}>Germany</td>
            </tr>
            <tr>
              <td className={styles.tableTitle}>Centro comercial Moctezuma</td>
              <td className={styles.tableTitle}>Francisco Chang</td>
              <td className={styles.tableTitle}>Mexico</td>
            </tr>
            <tr>
              <td className={styles.tableTitle}>Aaliyah</td>
              <td className={styles.tableTitle}>Aaliyh@gmail.com</td>
              <td className={styles.tableTitle}>Switzerland</td>
            </tr>
          </table>
        </div>
      </Fragment>
    )
  }
} 

export default Students;

