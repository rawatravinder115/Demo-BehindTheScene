import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

// useMemo store the all kind of data you want to store.

const DemoList = (props) => {

  const { items } = props;

  const sortedList = useMemo(() => {
      console.log('ITEMS SORTED !');
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DEMOLIST RUNNING");
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);

// use memo to stop the chain of re-evaluating 
