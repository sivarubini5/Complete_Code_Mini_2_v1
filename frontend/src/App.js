// perfectly working but commented to check the working of the animation added code 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RoleSelection from './components/modules/RoleSelection';
import WomenModule from './components/modules/WomenModule';
import ChildrenModule from './components/modules/ChildrenModule';
import SelfDefenseTutorials from './components/modules/SelfDefenseTutorials';
import LegalRightsGame from "./components/modules/LegalRightsGuide/LegalRightsGame";

const App = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1 className="text-center mt-10">Welcome to the Safety App</h1>} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/roles" element={<RoleSelection />} />

                <Route path="/women" element={<WomenModule />} />
                <Route path="/children" element={<ChildrenModule />} />

                <Route path="/women/self-defense" element={<SelfDefenseTutorials />} />
                <Route path="/women/legal-rights" element={<LegalRightsGame />} />
                <Route path="/legal-rights-game" element={<LegalRightsGame />} />
            </Routes>
        </Router>
    );
};

export default App;

/*perfectly working without animations but i think so this code is tried to implement animations
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RoleSelection from './components/modules/RoleSelection';
import WomenModule from './components/modules/WomenModule';
import ChildrenModule from './components/modules/ChildrenModule';
import SelfDefenseTutorials from './components/modules/SelfDefenseTutorials';
import LegalRightsGame from "./components/modules/LegalRightsGuide/LegalRightsGame";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1 className="text-center mt-10">Welcome to the Safety App</h1>} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/roles" element={<RoleSelection />} />

                <Route path="/women" element={<WomenModule />} />
                <Route path="/children" element={<ChildrenModule />} />

                <Route path="/women/self-defense" element={<SelfDefenseTutorials />} />
                <Route path="/women/legal-rights" element={<LegalRightsGame />} />
                <Route path="/legal-rights-game" element={<LegalRightsGame />} />

                <Route path="/animations/emergency-signal" element={<EmergencySignal />} />
                <Route path="/animations/bystander-intervention" element={<BystanderIntervention />} />
                <Route path="/animations/escape-plan" element={<EscapePlan />} />
                <Route path="/animations/mental-strength" element={<MentalStrength />} />
                <Route path="/women/emergency-module" element={<WomenEmergencyModule />} />
            </Routes>
        </Router>
    );
};

export default App;*/
