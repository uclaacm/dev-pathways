import teachla from "../img/teachla.svg";
import hack from "../img/hack.svg";
import design from "../img/design.svg";
import studio from "../img/studio.svg";
import ai from "../img/ai.svg"

const bulletpoints = [
    {
        category: "Ai",
        icon: ai,
        resource_page_link: "https://uclaacmai.github.io/resources/",
        color: '#28B2FF',
        bullets1: 
        [
            'What is AI?',
            'What is ML?',
            'Plotting data',
            'Supervised learning framework',
            'Machine learning math',
            'Gradient descent',
            'Linear regression',
            
        ],
        bullets2:
        [
            'Logistic regression',
            'Bayes\' theorem and normal distribution',
            'Introduction to fully-connected neural networks',
            'Optimization and regularization',
            'Introduction to convolutional neural networks',
            'AI ethics and self-driving cars',
            'MNIST classification using CNNs implemented in Keras',
        ]
    },
    {
        category: "Hack",
        icon: hack,
        resource_page_link: "https://hack.uclaacm.com/archive",
        color: '#C960FF',
        bullets1: 
        [
            'Javascript',
            'HTML/CSS',
            'Python',
            'Mobile Dev',
        ],
        bullets2:
        [

        ]
    },
]

export default bulletpoints;