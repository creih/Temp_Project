import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDisplay from './profile/profileDisplay';
import ProfilePage from './profile/profilePage';

const App = () => {
    const [user, setUser] = useState({
      name: 'Jane doe',
      email: 'johndoe@gmail.com',
    });

    return (
      <Router>
        <Routes>
          <Route path='/display' element={<ProfileDisplay user={user} />} />
          <Route path='/edit' element={<ProfilePage user={user} setUser={setUser} />} />
        </Routes>
      </Router>
    );
};
export default App;
