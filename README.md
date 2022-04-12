##
<p align="center">
<img src="./public/images/Quotivation.gif" width="900" height="300">
</p>

## Table of Contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Plans](#plans)
* [Learning](#learning)
* [Setup](#setup)

## General info 
This project is a resource to find the quotes that speak to your source of motivation!

## Technologies
This Project was created with:
* JavaScript
* React
* PostgreSQL
* Express.js
* Node.js
* [Programming Quotes API](https://github.com/skolakoda/programming-quotes-api)


## Learning
This project was a great experience to improve my React skills. I got more familiar with the basic structure of React and the flow of passing props to other components. One issue I ran into was with creating Intervals for the site to iterate through the arrays of Quotes, I was initially creating a new interval and leaving the old interval in the background which created an issue where quotes from both categories would display on the screen, I got around this by using clearInterval() and passing the id of each Interval from the state of the App Component

## Setup
To run this applications:
Fork and Clone the Repo, then simply cd into the directory and run "npm run dev"
