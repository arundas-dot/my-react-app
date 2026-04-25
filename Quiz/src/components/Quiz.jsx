// import React, { useState } from 'react';
// import { quizData } from './Data';
// import "./Quiz.css";

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleAnswerClick = (option) => {
//     setSelectedOption(option);
//     if (option === quizData[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }
//     setTimeout(() => {
//       setSelectedOption("");
//       const next = currentQuestion + 1;
//       if (next < quizData.length) {
//         setCurrentQuestion(next);
//       } else {
//         setShowScore(true);
//       }
//     }, 800);
//   };

//   const progressWidth = ((currentQuestion + 1) / quizData.length) * 100;

//   return (
//     <div className="quiz-container">
//       <div className="quiz-card">
//         <h2 className="quiz-title">React Quiz App</h2>
//         <div className="progress-bar-container">
//           <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
//         </div>
//         {showScore ? (
//           <div className="final-score"> Score: {score} / {quizData.length}</div>
//         ) : (
//           <>
//             <div className="quiz-question">{quizData[currentQuestion].question}</div>
//             {quizData[currentQuestion].options.map((option, index) => {
//               let className = "quiz-option";
//               if (selectedOption) {
//                 if (option === quizData[currentQuestion].correctAnswer) {
//                   className += " correct";
//                 } else if (option === selectedOption) {
//                   className += " wrong";
//                 }
//               }
//               return (
//                 <button
//                   key={index}
//                   className={className} 
//                   onClick={() => handleAnswerClick(option)}
//                   disabled={selectedOption !== ""}
//                 >
//                   {option}
//                 </button>
//               );
//             })}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Quiz;




import React, { useState } from 'react';
import { quizData } from './Data';
import "./Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const letters = ["A", "B", "C", "D"]; // labels for options

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
    if (option === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedOption("");
      const next = currentQuestion + 1;
      if (next < quizData.length) {
        setCurrentQuestion(next);
      } else {
        setShowScore(true);
      }
    }, 800);
  };

  const progressWidth = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2 className="quiz-title">React Quiz App</h2>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
        </div>

        {showScore ? (
          <div className="final-score"> Score: {score} / {quizData.length}</div>
        ) : (
          <>
            {/* Question */}
            <div className="quiz-question">{quizData[currentQuestion].question}</div>

            {/* Options Grid */}
            <div className="options-grid">
              {quizData[currentQuestion].options.map((option, index) => {
                let className = "quiz-option";

                if (selectedOption) {
                  if (option === quizData[currentQuestion].correctAnswer) {
                    className += " correct";
                  } else if (option === selectedOption) {
                    className += " wrong";
                  }
                }

                return (
                  <button
                    key={index}
                    className={className}
                    onClick={() => handleAnswerClick(option)}
                    disabled={selectedOption !== ""}
                  >
                    <strong>{letters[index]}.</strong> {option}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;