import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/slices/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const greetings = useSelector((state) => state.greetings.greetings);
  console.log(greetings);
  return (
    <div>
      <p>{greetings.greeting}</p>
    </div>
  );
};

export default Greeting;
