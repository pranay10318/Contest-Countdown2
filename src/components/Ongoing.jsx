import React from 'react';
import Card from './Card';

function Ongoing({ contests }) {
    const ongoing = contests.filter(contest =>
        contest.status === "CODING" && parseInt(contest.duration) < 14401
    );
    function getTimeUntilEnd(end_time) {
      const now = new Date();
      const endTime = new Date(end_time);
      const timeDiff = endTime - now;
  
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  
      return `ends in ${hours} hrs ${minutes} mins`;
  }

    return (
        <div>
            <ul>
                {
                    (ongoing.length === 0) ? <p>No Ongoing Contests..</p> :
                        ongoing.map((contest, index) => (
                            <li key={index}>
                                <Card contest={contest} duration={getTimeUntilEnd(contest.end_time)} />
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}

export default Ongoing;
