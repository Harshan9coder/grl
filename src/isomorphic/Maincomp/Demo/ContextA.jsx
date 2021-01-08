import React from "react";
import ContextB from "./ContextB";
export const UserContext = React.createContext();
function ContextA() {
  return (
    <UserContext.Provider value={"harshan"}>
      <div>
        <ContextB />
      </div>
    </UserContext.Provider>
  );
}
export default ContextA;
