import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomepageWrapper from "@app/layout/homepage/HomepageWrapper";
import HomePage from "@modules/homepage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageWrapper />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
