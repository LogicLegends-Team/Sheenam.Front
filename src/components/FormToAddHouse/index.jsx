import { useSelector, useDispatch } from "react-redux";
import { addHouse } from "../../features/houses/testSlice";
import { useState } from "react";

function FormToAddHouse() {
  const houses = useSelector((state) => state.houses);
  const dispatch = useDispatch();
  const initialValues = {
    location: "",
    cost: 0,
  };
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = () => {
    // Send
    dispatch(
      addHouse({
        location: formData.location,
        cost: formData.cost,
      })
    );
    // Set initial Values
    setFormData(initialValues);
  };

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                location: e.target.value,
              }));
            }}
            value={formData.location}
          />
        </label>

        <label htmlFor="cost">
          Cost
          <input
            type="number"
            id="cost"
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                cost: Number(e.target.value),
              }));
            }}
            value={formData.cost}
          />
        </label>

        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <p>location: {house.location}</p>
            <p>Cost: {house.cost}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default FormToAddHouse;
