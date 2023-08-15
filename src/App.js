import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS if needed
import MainBody from './components/MainBody';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        fetchContests();
    }, []);

    const fetchContests = async () => {
        try {
            const res = await fetch("https://kontests.net/api/v1/all");

            if (!res.ok) {
                throw new Error('Error in fetching contest details');
            }

            const fetchedContests = await res.json();
            setContests(fetchedContests);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <Header />
            <div className="inner-container">
                <MainBody contests={contests} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
