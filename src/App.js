import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Home } from './pages/Home/HomePage';
import { Tweets } from './pages/Tweets/TweetsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

// const App = () => {
//   return (
// <div>sdfgh</div>
//   );
// };

export default App;
