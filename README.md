# Quiz - Best Workout for You

This project is designed to help personal trainers. So that they can add this quiz to their apps or websites.  
Some of the test questions are just for the fitness professional to be aware of the customer, so that they can project more specific exercises and look for the best way to work with their customers (questions about the number of times the client can train per week, preference for exercising in a group or individually, preference for indoor or outdoor exercises and type of equipment).  
The answers to the quiz are based on the questions about the fitness goal and the type of activity the client prefers.  

**WIREFRAME**  

![wireframe](doc/images/wireframesmall.webp)  

This quiz is a fully responsive JavaScript quiz that will allow users (clients or future clients of the personal trainer) to choose the alternatives that they most identify with. At the end, they will be given some options for personalized physical activities.  
Website to show responsiveness: https://ui.dev/amiresponsive  

![amiresponsive](doc/screenshots/screenshot00responsive.png)

## FEATURES  

There are different parts to this quiz project.  
Initially the page have a title, a small image and a sentence directing the user to the quiz.
The quiz consists of 6 questions and at the end there is the result informing about the ideal physical activity and a personal trainer contact.

### Existing Features

- __Heading, Image and Paragraph__  

In the first part of the website, the user already has information about the existence of the quiz. The title itself also demonstrates the purpose of the quiz.  
The image chosen is of a simple dumbbell, as my intention is to make the quiz clean, light, minimalist and open to new future ideas (more in line with personal style).  
In the paragraph below the image, the user is directed to the quiz.

![firstpart](doc/screenshots/screenshot01title.png)  

- __The Quiz Area__  

Within the quiz area, the questions are displayed as they are answered.  
After the first question, the "Back" button in black appears.  
If the user wants to answer a different alternative, by clicking on the "back" button and selecting another answer, the java script has been configured to replace the previous answer.  
At the end, the user will have a result, the personal trainer's contact information and the "Back to Home" button.  

**Quiz Questions**  

![firstquestion](doc/screenshots/screenshot02question1.png)  

![secondquestion](doc/screenshots/screenshot03question2.png)  

![thirdquestion](doc/screenshots/screenshot04question3.png)  

![fourthquestion](doc/screenshots/screenshot05question4.png)  

![fifthquestion](doc/screenshots/screenshot06question5.png)  

![sixthquestion](doc/screenshots/screenshot07question6.png)  

**Some Possible Answers**  

![possibleanwers](doc/screenshots/screenshot08answer.png)

![possibleanwers1](doc/screenshots/screenshot09answer.png)

![possibleanwers2](doc/screenshots/screenshot10answer.png)

![possibleanwers3](doc/screenshots/screenshot11answer.png)


### Features Left to Implement

- More personal resources related to the Personal Trainer's work can be implemented in the future. For example, an advertisement detailing the good work of the physical educator at the end of the quiz.  

## BUGS  

- Right at the beginning of the quiz, the results of the questions were together with the questions appearing right at the beginning of the quiz.  
- I had problems with button styles, because I ended up confusing the button classes, I mixed CSS and JS, but I fixed it after the mental confusion, I managed to get it right.  
- Almost at the end of the project I realized that the title was not clear. I changed the HTML and consequently I needed to replace the images in the README.  

Mistakes, confusions and corrections (correcting initialization function on page load in java script, for example) in the project helped me learn more.  

## TESTING  

- I tested that this quiz works in different browsers: Chrome, Safari, Microsoft Edge and Firefox.    
- I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the devtools device toolbar.  
- I confirm that the questions, chosen answers and final selected workouts are printed in the devtools Console.  
- I confirmed that the title, paragraph, questions, options, results are all readable and easy to understand.  
- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through Wave and Lightouse devtools.  

### Validator Testing 

- HTML  
The first check on the W3C HTML Validator identified these problems:  

![w3c1](doc/screenshots/screenshot12w3c.png)  

From number 1 to 10 the problems were the same.  

![w3c3](doc/screenshots/screenshot14w3c.png)  

After I fixed the tags and put information in h2 (No errors or warnings anymore):

![w3c4](doc/screenshots/screenshot15w3c.png)  

[Click here to view the result in the W3C validator website](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjulianazani.github.io%2Fcodeinstituteproject2%2F)  

- CSS  
Because I use Font Awesome, the W3C CSS validator presented these errors and warnings:  

![w3ccss](doc/screenshots/screenshot16cssvalidator.png)  

When researching these errors on several websites, the conclusion was: The errors found in the W3C CSS validator are related to the imported Font Awesome CSS file. These errors are not caused by the CSS itself, but by the CSS of the external library. In summary, the best approach is to ignore these errors in the CSS validator as they do not affect your site's functionality.  

[Click here to view the result in the W3C CSS Validator (Jigsaw) website](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjulianazani.github.io%2Fcodeinstituteproject2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)  

- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)  
![jsvalidator](doc/screenshots/screenshot17jshint.png)  

- Wave and Lighthouse Testing

**WAVE**  

Result after Wave analysis:  

![wavetest](doc/screenshots/screenshottesting00.png)  

**LIGHTHOUSE**  

Result after Lighthouse analysis:

**Mobile result**  
![lighthousemobile](doc/screenshots/screenshottesting01.png)  

**Desktop result**  
![lighthousedesktop](doc/screenshots/screenshottesting02.png)  


## DEPLOYMENT  

- The site was deployed on GitHub Pages. The steps for deployment were:
    - GitHub Repository, settings tab;
    - Source section dropdown, master branch selected;
    - Once the master branch was selected, the page started to refresh automatically.

The active link can be found here - https://julianazani.github.io/codeinstituteproject2/

## CREDITS  

- The content of the text was prepared by me based on my experiences with some physical activities. Throughout my life I have always sought to study a little about this subject. I also have personal trainer friends from whom I have always learned and continue to learn. I also did some research on the internet. Some sites:  
https://longevity.technology/lifestyle/the-ultimate-list-of-endurance-exercises-for-a-stronger-you/  
https://www.verywellfit.com/cardio-and-weight-training-and-fat-loss-3498325  
- The structuring of the Quiz was essential thanks to the collaboration of my mentor David Bowers, the research I did on the internet (YouTube, Google, ChatGPT, Copilot and GitHub) and the classes at Code Institute.