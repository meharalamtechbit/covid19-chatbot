import React, { useState, useEffect } from 'react';

const Review = ({ steps }) => {
  const [covidData, setCovidData] = useState(steps);

  useEffect(() => {
    debugger;
    if (steps) {
      setCovidData(steps);
    }
  }, [steps]);

  return (
    <div style={{ width: '100%' }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{covidData.name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{covidData.gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{covidData.age.value}</td>
          </tr>

          <tr>
            <td>Travel History</td>
            <td>{covidData.travelledAbroad.value}</td>
          </tr>
          <tr>
            <td> Visited city/area</td>
            {covidData.nameOfAreaVisited && <td>{covidData.nameOfAreaVisited.value}</td>}
            {!covidData.nameOfAreaVisited && <td>Not visited</td>}
          </tr>
          <tr>
            <td>In Contact of Covid people</td>
            <td>{covidData.inContactOfCovidPeople.value}</td>
          </tr>
          <tr>
            <td>Suffering from fever,cough, or any respiratory of distress</td>
            <td>{covidData.anyDisease.value}</td>
          </tr>
          <tr>
            <td>Living in containment zone</td>
            <td>{covidData.livingInContainmentZone.value}</td>
          </tr>
          <tr>
            <td>Tested Covid-19 Positive in last two months</td>
            <td>{covidData.testPositive.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Review;
