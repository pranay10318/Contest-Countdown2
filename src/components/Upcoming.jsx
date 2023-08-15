import React from 'react';
import Card from './Card';

function Upcoming({ contests }) {
    const upcoming = contests.filter((contest) => {
        const now = new Date();
        const startTime = new Date(contest.start_time);
        return contest.status === "BEFORE" && now < startTime  && parseInt(contest.duration) < 14401; 
    });
    function getTimeUntilStart(start_time) {
      const now = new Date();
      const startTime = new Date(start_time);
      const timeDiff = startTime - now;
  
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  
      return `starts in ${days} days ${hours} hrs ${minutes} mins`;
  }

    return (
        <div>
            <ul>
                {
                    (upcoming.length === 0) ? <p>No Upcoming Contests..</p> :
                        upcoming.map((contest, index) => (
                            <li key={index}>
                                <Card contest={contest} duration={getTimeUntilStart(contest.start_time)} />
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}

export default Upcoming;
