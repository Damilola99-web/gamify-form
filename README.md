# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) by Wahab Abdul-Rasheed. Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Damilola99-web/gamify-form)
- Live Site URL: [Add live site URL here](https://gamify.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind Css
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind Css
- [React](https://reactjs.org/) - JS library
- Redux Toolkit

### What I learned

I learnt to used redux-toolkit for state management in the app, also component structure in React.

Example of how redux toolkit can manage state easily and Dispatch actions:

```js
if (error.length === 0) {
			dispatch(setPersonalInfo({ name, email, phoneNumber }));
			setErrors([]);
			dispatch(nextStep());
		}
```

Also it can be used to make state available globally in the code
```js
const { currentStep } = useSelector(getFormData);
```


### Continued development

I want to focus more on learning a cross-platform mobile app development framework (React Native), while working more on mastering my previous skills.


## Author

- Website - [Abdul-Rasheed Wahab](https://wahab-rasheed.vercel.app)
- Frontend Mentor - [@damilola99-web](https://www.frontendmentor.io/profile/Damilola99-web/)
- Twitter - [@rashedwahab](https://www.twitter.com/Rashedwahab)


