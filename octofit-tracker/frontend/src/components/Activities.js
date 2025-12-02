import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities:', data);
        setActivities(data.results || data);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title h4 mb-3 text-primary">Activities</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{activity.date || 'N/A'}</td>
                <td>{activity.type || 'N/A'}</td>
                <td>{activity.duration || 'N/A'}</td>
                <td>{activity.calories || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">Add Activity</button>
      </div>
    </div>
  );
};

export default Activities;
