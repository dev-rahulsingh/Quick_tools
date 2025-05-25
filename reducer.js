const mega = { roll: 101, name: "Rahul" };
const defaultMega = { roll: 101, name: "Rahul" };
// localStorage.setItem("mega", JSON.stringify(mega));
// export const initialValue = JSON.parse(localStorage.getItem("mega"));
const localData = localStorage.getItem("mega");
export const initialValue = localData ? JSON.parse(localData) : defaultMega;

export const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      const newState = { ...state, ...action.payload };
      localStorage.setItem("mega", JSON.stringify(newState));
      return newState;
    case "remove":
      newState = { ...state };
      for (const key of action.payload.keys) {
        delete newState[key];
        localStorage.setItem("mega", JSON.stringify(newState));
        return newState;
      }
    default:
      return state;
  }
};
