import React from "react";

export const NumberedList = ({ items, sourceName, ItemComponent }) => {
    return (
      <>
        {items.map((item, i) => (
           <React.Fragment key={i}>
            <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [sourceName]: item }} />
           </React.Fragment>
        ))}
      </>
    );
  };
  