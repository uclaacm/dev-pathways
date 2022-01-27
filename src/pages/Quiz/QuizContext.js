import { createContext, useState } from "react";

export const defaultQuizContext = {
    data: {
        category: "HTML/CSS",
        difficulty: "Beginner",
        type: "Any",
        time: "1 month",
        hours: "2 hours",
    },
    setQuizResults: () => {},
};

const QuizContext = createContext(defaultQuizContext);

export default QuizContext;

export const QuizProvider = (props) => {
    const [quizResults, setQuizResults] = useState(defaultQuizContext.data);
    return (
      <QuizContext.Provider
        value={{
          quizResults, 
          setQuizResults,
        }}
      >
        {props.children}
      </QuizContext.Provider>
    );
};
