import Navbar from './Navbar';
import Main from './Main';
import { useState } from 'react';

export default function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};
	return (
		<div className="container">
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
		</div>
	);
}
