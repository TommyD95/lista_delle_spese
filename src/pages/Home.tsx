import { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Applicativo from "./Applicativo";
import BenvenutoPage from "./BenvenutoPage";
import logo from './logo.svg';
function Home() {

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

    return showLoading ? (
<BenvenutoPage />
  ) : (
    <Applicativo />
    );
    
}



export default Home;