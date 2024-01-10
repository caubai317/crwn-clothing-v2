import './categories.styles.scss'
import Home from './routes/home/home.component.jsx'
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx'
import SignIn from './routes/sign-in/sign-in.component.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
