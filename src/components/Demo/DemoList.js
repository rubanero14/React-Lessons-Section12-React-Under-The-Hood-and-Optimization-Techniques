import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  // using destructuring method to pull out items object from props and use it as dependency for useMemo() below
  const { items } = props;

  console.log("DemoList RUNNING");

  // useMemo() is similar to useCallback, but only used to store other data types other than function which useCallback does.
  // useMemo() is useful to store data that is performance intensive such as sort method down here, otherwise overusing useMemo() also cab cost performance since
  // it uses machine memory to store the data that its wrapping
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

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
