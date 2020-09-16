import React from 'react';
import ChatBot from 'react-simple-chatbot';

import { step } from '../../../core/constants';
import Review from '../containers/Review';

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className='body'>
        <div className='row clearfix'>
          <div className='col-md-6'>
            <ChatBot
              width={'40'}
              headerTitle={'Covid19 Self Declaration Form'}
              placeholder={'Type here...'}
              bubbleStyle={{ maxWidth: '80%' }}
              steps={[
                {
                  id: step.intro,
                  message:
                    'For the health and safety of our community, declaration of illness is required. Be sure that the information you will give is accurate and complete. Please get immediate medical attention if you have any of the COVID-19 signs',
                  trigger: step.nameQuestion,
                },
                {
                  id: step.nameQuestion,
                  message: 'please tell me your full name?',
                  trigger: step.name,
                },
                {
                  id: step.name,
                  user: true,
                  trigger: step.genderQuestion,
                },
                {
                  id: step.genderQuestion,
                  message: 'Hi {previousValue}! What is your gender?',
                  trigger: step.gender,
                },
                {
                  id: step.gender,
                  options: [
                    { value: 'Male', label: 'Male', trigger: step.ageQuestion },
                    { value: 'Female', label: 'Female', trigger: step.ageQuestion },
                  ],
                },
                {
                  id: step.ageQuestion,
                  message: 'How old are you?',
                  trigger: step.age,
                },
                {
                  id: step.age,
                  user: true,
                  trigger: step.travelledAbroadQuestion,
                },
                {
                  id: step.travelledAbroadQuestion,
                  message: 'Have you travelled abroad during 2020?',
                  trigger: step.travelledAbroad,
                },
                {
                  id: step.travelledAbroad,
                  options: [
                    { value: 'Yes', label: 'Yes', trigger: step.nameOfAreaVisitedQuestion },
                    { value: 'No', label: 'No', trigger: step.inContactOfCovidPeopleQuestion },
                  ],
                },
                {
                  id: step.nameOfAreaVisitedQuestion,
                  message: 'Tell me the name of areas you have visited?',
                  trigger: step.nameOfAreaVisited,
                },
                {
                  id: step.nameOfAreaVisited,
                  user: true,
                  trigger: step.inContactOfCovidPeopleQuestion,
                },
                {
                  id: step.inContactOfCovidPeopleQuestion,
                  message:
                    'Have you been in contact with people being infected, suspected or diagnosed with COVID-19?',
                  trigger: step.inContactOfCovidPeople,
                },
                {
                  id: step.inContactOfCovidPeople,
                  options: [
                    { value: 'Yes', label: 'Yes', trigger: step.anyDiseaseQuestion },
                    { value: 'No', label: 'No', trigger: step.anyDiseaseQuestion },
                  ],
                },
                {
                  id: step.anyDiseaseQuestion,
                  message: 'Are you suffering from any fever,cough, or any respiratory of distress?',
                  trigger: step.anyDisease,
                },
                {
                  id: step.anyDisease,
                  options: [
                    { value: 'Yes', label: 'Yes', trigger: step.livingInContainmentZoneQuestion },
                    { value: 'No', label: 'No', trigger: step.livingInContainmentZoneQuestion },
                  ],
                },
                {
                  id: step.livingInContainmentZoneQuestion,
                  message: 'Are you residing in any containment zone?',
                  trigger: step.livingInContainmentZone,
                },
                {
                  id: step.livingInContainmentZone,
                  options: [
                    { value: 'Yes', label: 'Yes', trigger: step.testPositiveQuestion },
                    { value: 'No', label: 'No', trigger: step.testPositiveQuestion },
                  ],
                },
                {
                  id: step.testPositiveQuestion,
                  message: 'Do you have tested COVID-19 positive in the last two months ?',
                  trigger: step.testPositive,
                },
                {
                  id: step.testPositive,
                  options: [
                    { value: 'Yes', label: 'Yes', trigger: step.thanks },
                    { value: 'No', label: 'No', trigger: step.thanks },
                  ],
                },
                {
                  id: step.thanks,
                  message: 'Thanks! Your data was submitted successfully!',
                  trigger: step.review,
                },
                {
                  id: step.review,
                  component: <Review />,
                  asMessage: true,
                  end: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
