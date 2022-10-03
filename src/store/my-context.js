import React from "react";
export const MyContext = React.createContext({
  users: [],
});

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function ContextProvider(props) {
  return (
    <MyContext.Provider value={{ users: DUMMY_USERS }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
