import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function Home() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <p>{counter}</p>
        <button type="button" onClick={() => dispatch({type: 'Hello'})}>Click Me!</button>

      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Home;