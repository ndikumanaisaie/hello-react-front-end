import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetings } from "../redux/slices/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch])

  const greetings = useSelector((state) => state.greetings.greetings);
 
  const greetingArray = greetings.map((greet) => 
    <li key={greet.id}>
      <p>{greet.greeting}</p>
    </li>
  )

  return (
    <div>
      <ul>{greetingArray}</ul>
    </div>
  )
};

export default Greeting;