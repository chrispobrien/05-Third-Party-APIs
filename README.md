# 05-Third-Party-APIs

## Description
Week 5 of Columbia Engineering Coding Bootcamp tasks us with creating "...a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."

For a demonstration please browse to my Github pages:
[https://chrispobrien.github.io/05-Third-Party-APIs/]

Objectives include:

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

* For this exercise, I would have used the blur to save changed event text, but there is a save button, so I use that.
* A side-effect of using the save button, the user can edit more than one event at the same time, and save them in any order
* I chose to use [Moment.js](https://momentjs.com/) library even though it is "legacy."
* I couldn't find an iconic icon matching the demo exactly, I downloaded a public domain svg image instead

## Installation

Using git, issue the command:

```sh
git clone https://github.com/chrispobrien/05-Third-Party-APIs.git
```
This creates the folder 05-Third-Party-APIs within which you will find the project files.  The images folder contains the animated gif supplied by the Bootcamp to demonstrate the intended function of this project.

[![Schedule Demonstration][demo]](./assets/images/05-third-party-apis-homework-demo.gif)

## Usage

Since this is a classroom exercise, I would recommend simply opening the index.html file in a browser on your local machine.

[![Third Party APIs][screenshot]](./assets/images/05-third-party-apis.png)

## Credits

Columbia Coding Bootcamp/Trilogy supplied starter HTML and CSS.  All edits and JS are my own solution to this problem.

## License

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.


<!-- MARKDOWN LINKS & IMAGES -->
[demo]: ./assets/images/05-third-party-apis-homework-demo.gif
[screenshot]: ./assets/images/05-third-party-apis.png

