import "./navbar.css";
import { useParallax } from "react-scroll-parallax";
const App = () => {
  const parallax = useParallax({
    rotate: [0, 360],
  });
  return (
    <div className="container-body">
      <div ref={parallax.ref} className="spinner"></div>
      
    </div>
  );
};
export default App;