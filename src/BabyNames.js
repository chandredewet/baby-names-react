import babyNamesData from "./babyNamesData";
// import "./App.css";

function BabyNames() {
  return (
    <div className="App">
      <div className="babyNames">
        {babyNamesData
          .sort((a, b) => {
            const nameA = a.name;
            const nameB = b.name;
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          })
          .map((el) => {
            return (
              <p
                key={el.id}
                className={
                  el.sex === "f" ? "female nameStyle" : "male nameStyle"
                }
              >
                {" "}
                {el.name}{" "}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default BabyNames;
