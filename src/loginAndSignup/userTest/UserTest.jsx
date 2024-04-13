import React, { useState } from 'react';
import { mentalHealthQuestions } from '/src/loginAndSignup/userTest/TestQuestions.js';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const UserTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [submit, setSubmit] = useState(false);
  const [score, setScore] = useState(null);
  const [isRetaking, setIsRetaking] = useState(false);

  const handleQuestionResponse = (response) => {
    const updatedResponses = { ...responses, [currentQuestion]: response };
    setResponses(updatedResponses);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < mentalHealthQuestions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setSubmit(true);
      setScore(calculateAssessment());
    }
  };

  const calculateAssessment = () => {
    let totalPoints = 0;
    mentalHealthQuestions.forEach((question, index) => {
      const response = responses[index];
      if (response !== undefined) {
        const optionIndex = question.options.findIndex((option) => option === response);
        if (optionIndex !== -1) {
          totalPoints += pointsPerOption[optionIndex];
        }
      }
    });
    return totalPoints;
  };

  const pointsPerOption = [0, 1, 2, 3];

  const ScoreDisplay = () => {
    const scoreRange = [
      { min: 0, max: 30, label: 'Low', color: 'text-red-500' },
      { min: 31, max: 60, label: 'Moderate', color: 'text-yellow-500' },
      { min: 61, max: 90, label: 'High', color: 'text-green-500' },
    ];

    const scoreRangeInfo = scoreRange.find((range) => score >= range.min && score <= range.max);

    return (
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-500 font-display">Your Score</h2>
        <p className="text-xl font-medium mb-4 text-blue-500 font-body">Total Points: {score}</p>
        {/* <p className={`text-xl font-medium ${scoreRangeInfo.color} font-body`}>
          {scoreRangeInfo.label} Mental Health Risk
        </p>
        {score >= 61 ? (
          <div className="flex items-center justify-center text-green-500 mt-4 font-body">
            <FaCheckCircle className="mr-2" />
            <span className="text-blue-500">Excellent, you're doing well!</span>
          </div>
        ) : (
          <div className="flex items-center justify-center text-red-500 mt-4 font-body">
            <FaTimesCircle className="mr-2" />
            <span className="text-blue-500">We recommend seeking professional help.</span>
          </div>
        )} */}
      </div>
    );
  };

  const handleRetakeTest = () => {
    setCurrentQuestion(0);
    setResponses({});
    setSubmit(false);
    setScore(null);
    setIsRetaking(true);
  };

  return (
    <div
      className=" mx-auto py-8 bg-gradient-to-b from-purple-200 to-purple-400 min-h-screen"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-white font-display">
          Mental Health Assessment
        </h1>
        <p className="text-xl mb-8 text-center text-blue-200 font-body mb-4">
          Answer the following questions to assess your current mental health status.
        </p>
        <form className="space-y-8">
          <div
            className={`bg-white p-8 rounded-lg shadow-lg ${
              currentQuestion === 0 && !isRetaking ? '' : 'hidden'
            }`}
          >
            <p className="text-2xl font-bold mb-4 text-blue-500 font-display">
              {mentalHealthQuestions[currentQuestion].question}
            </p>
            <div className="flex flex-col items-start space-y-3">
              {mentalHealthQuestions[currentQuestion].options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className="inline-flex items-center w-full justify-start font-body"
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={responses[currentQuestion] === option}
                    onChange={() => handleQuestionResponse(option)}
                    className="form-radio h-6 w-6 text-blue-500 mr-3 mt-3"
                  />
                  <span className="text-lg text-blue-900 ml-4">{option}</span>
                </label>
              ))}
            </div>
          </div>
          {submit && <ScoreDisplay />}
          <div className="flex justify-center space-x-4">
            {currentQuestion < mentalHealthQuestions.length - 1 && !submit ? (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="mt-4 bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:shadow-outline font-body m-4 "
              >
                Next Question
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="mt-4 bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:shadow-outline font-body "
              >
                Submit
              </button>
            )}
            {submit && (
              <button
                type="button"
                onClick={handleRetakeTest}
                className="mt-4 bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:shadow-outline font-body"
              >
                Retake Test
              </button>
            )}
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="text-lg text-blue-200 font-body">
            This assessment is not a substitute for professional medical advice. If you are
            experiencing mental health concerns, please seek help from a qualified healthcare
            provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTest;