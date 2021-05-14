
    //mag aadd kayo nang upto 50 questions
    let whackamoleQuestion = [{
        questions: "What are people who write computer code?",
        choice1: " Programmers",
        choice2: " Cryptographers",
        choice3: " Manufacturers",
        choice4: " Professors",
        answer: 1
    },
    {
        questions: "What is Computer Coding ?",
        choice1: " A list of function.",
        choice2: " Telling Computer what todo.",
        choice3: " A radio show.",
        choice4: " A TV Show",
        answer: 2
    },
    {
        questions: "Which of these does NOT run using a computer program ?",
        choice1: " Car",
        choice2: " Rocket",
        choice3: " Bicycle",
        choice4: " Train",
        answer: 3
    },
    {
        questions: "What word describes character that can be moved in a Scratch program ?",
        choice1: " Goblin",
        choice2: " Pixie",
        choice3: " Imp",
        choice4: " Sprite",
        answer: 4
    },
    {
        questions: "Which of these is NOT a programming language ?",
        choice1: " Python",
        choice2: " Java",
        choice3: " Ruby",
        choice4: " Banana",
        answer: 4
    },
    {
        questions: "Which of these is NOT a scripting langguage ?",
        choice1: " Javascript",
        choice2: " Php",
        choice3: " Groovy",
        choice4: " C#",
        answer: 4
    },
    {
        questions: "Which of these id a Programming Langguage ?",
        choice1: " Itch",
        choice2: " Bite",
        choice3: " Gnaw",
        choice4: " Scratch",
        answer: 4
    },
]
//end here


let htmlQuestions = [{
    questions: "What does HTML stand for ?",
    choice1: " Home Tool Markup Langguage.",
    choice2: " Hyper Text Markup Language.",
    choice3: " Happy Text Manufacturers Language",
    choice4: " HyperLinks and Text Markup Language",
    answer: 2
},
{
    questions: "Who is making the Web standards ?",
    choice1: " Microsoft",
    choice2: " The World Wide Web Consortium.",
    choice3: " Mozilla",
    choice4: " Chrome",
    answer: 2
},
{
    questions: "Choose the correct HTML element for the largest heading:",
    choice1: " <h1>",
    choice2: " <head>",
    choice3: " <h6>",
    choice4: " <heading>",
    answer: 1
},
{
    questions: "What is the correct HTML element for inserting a line break ?",
    choice1: " <lb>",
    choice2: " <break>",
    choice3: " <line break>",
    choice4: " <br>",
    answer: 4
},
{
    questions: "What is the correct HTML for adding a background color ?",
    choice1: ' <body style="background-color: yellow;">',
    choice2: ' <body> style=:"background-color: yellow;" </body>',
    choice3: ' <body bg="yellow">',
    choice4: " <background>yellow</background>",
    answer: 1
},
{
    questions: "Choose the correct HTML element to define important text ?",
    choice1: " <important>",
    choice2: " <impt>",
    choice3: " <strong>",
    choice4: " <b>",
    answer: 3
},
{
    questions:" Choose the correct HTML element to define emphasized text ?",
    choice1: " <br>",
    choice2: " <i>",
    choice3: " <em>",
    choice4: " <italic>",
    answer: 3
},]







let cssQuestions = [
    {
        questions: "What does CSS stand for ?",
        choice1: " Colorful Style Sheets.",
        choice2: " Cascading Style Sheets.",
        choice3: " Creative Style Sheets.",
        choice4: " Computer Style Sheets.",
        answer: 2
    },
    {
        questions: "What is the correct HTML for referring to an external style sheet ?",
        choice1: " <stylesheet> mystyle.css </stylesheet>",
        choice2: ' <link rel="stylesheet" type="text/css" href="mystyle.css">',
        choice3: ' <link> style:mystyle.css </link> ',
        choice4: ' <style src ="mystyle.css">',
        answer: 2
    },
    {
        questions: "Where in an HTML document is the correct place to refer to an external style sheet ?",
        choice1: " Inside the body tag.",
        choice2: " Closing of body tag.",
        choice3: " <head> section",
        choice4: " At the end of the document",
        answer: 3
    },
    {
        questions: "Which HTML tag is used to define an internal style sheet ?",
        choice1: " <style>",
        choice2: " <script>",
        choice3: " <css>",
        choice4: " <css/style>",
        answer: 1
    },
    {
        questions: "Which HTML attribute is used to define inline styles ?",
        choice1: " css",
        choice2: " class",
        choice3: " font",
        choice4: " style",
        answer: 4
    },
    {
        questions: "Which is the correct CSS syntax ?",
        choice1: ' {body="color:black"}',
        choice2: ' body{color=black;} ',
        choice3: ' color=body:"black" ',
        choice4: ' body{color:black;} ',
        answer: 4
    },
    {
        questions: "How do you insert a comment in a CSS file ?",
        choice1: " /* this is a comment */" ,
        choice2:  " //this is a comment",
        choice3: " 'this is a comment' ",
        choice4: " // this is a comment//",
        answer: 1
    },
]



let scriptQuestions = [
    {
        questions: " Inside which HTML element do we put the JavaScript ?",
        choice1: " <js>",
        choice2: " <script>",
        choice3: " <javascript>",
        choice4: " <scripting>",
        answer: 2
    },
    {
        questions: " Where is the correct place to insert a JavaScript ?",
        choice1: " In the middle of body tag.",
        choice2: " The head section.",
        choice3: " The body section.",
        choice4: " Both the body and head section are correct.",
        answer: 4
    },
    {
        questions:' What is the correct syntax for referring to an external script called "xxx.js"?',
        choice1: ' <script src="xxx.js">',
        choice2: ' <script href="xxx.js">',
        choice3: ' <script source="xxx.js">',
        choice4: ' <script name="xxx.js">',
        answer: 1
    },
    {
        questions: "The external JavaScript file must contain the <script> tag.",
        choice1: " true",
        choice2: " with or without both ok.",
        choice3: " false",
        choice4: " true",
        answer: 3
    },
    {
        
        questions: 'How do you write "Hello World" in an alert box ?',
        choice1: ' alertBox("Hello World")',
        choice2: ' alert("Hello World")',
        choice3: ' msgBox("Hello World")',
        choice4: ' msg("Hello World")',
        answer: 2

    },
    {
        questions: "How do you create a function in JavaScript ?",
        choice1: " function myFunction()",
        choice2: " function:myFunction()",
        choice3: " function = myFunction()",
        choice4: " function(){} : function",
        answer: 1
    },
    {
        questions: 'How do you call a function named "myFunction"?',
        choice1: " call function myFunction()",
        choice2: " myFunction()",
        choice3: " call myFunction",
        choice4: " myFunction() run",
        answer: 2
    },
]


let completeTheCode = [
    {
        mainQuestion : `Print Hello World.`,
        question:` console.log\(" <input type="text" class="questionInput" /> "\); `,
        answer : "Hello World"
    },
    {
        mainQuestion :`How to make switch statement .`,
        question:`<input type="text" class="questionInput" />\(expression){} `,
        answer : `switch`
    },
    {
        mainQuestion : `How to change textColor in h2 in css ? `,
        question: ` h2 \{<input type="text" class="questionInput" />  : "#f6f6f6" \} `,
        answer : 'color'
    },
    {
        mainQuestion : `What is right syntax when changing the background color`,
        question:` body\{ <input type="text" class="questionInput" />  : "#f6f6f6" \}`,
        answer : "background-color"
    },
    {
        mainQuestion : `How to change font family in css `,
        question:` h2 \{<input type="text" class="questionInput" /> : "#f6f6f6" \} `,
        answer : "font-family"
    },
    {
        
        mainQuestion : `How to make a loop in javscript?`,
        question:`\<input type="text" class="questionInput" \/\>\( data in array \){ } `,
        answer : "for"

    },
]

