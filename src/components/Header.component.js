import React from "react";
import { formatDate, getOrdinalSuffix } from "../utils/formatDate";
import useScroll from '../hooks/useScroll';
import styles from './Header.component.module.css';

const Header = () => {
  const today = new Date();
  const formattedDate = formatDate(today);
  const day = today.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);
  const { scrollToEvents } = useScroll();

  // Split the formatted date to insert the ordinal suffix
  const [monthAndDay, year] = formattedDate.split(',');
  const [month, dayWithoutSuffix] = monthAndDay.split(' ');
  return (
    <div className="row justify-content-center">
      <h3 className={`text-center ${styles.headerText}`}>
        This is your AJF Live-re-Wire Music Calender for{' '}
        {`${month} ${dayWithoutSuffix}${ordinalSuffix},${year}`}
      </h3>
      <div className={styles.scrollCircle}>
        <div
          className={styles.scrollDown}
          onClick={(e) => {
            e.preventDefault();
            scrollToEvents();
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
