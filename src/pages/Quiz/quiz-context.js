import { createContext } from "react";
import defaultQuizContext from "./default-quiz-context";

const QuizContext = createContext(defaultQuizContext);

export default QuizContext;