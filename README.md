# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](https://drive.google.com/uc?export=view&id=18uxgpx0ACDNyMVQ8rmzmy9bV8rEBGljQ)
![Mobile](https://drive.google.com/uc?export=view&id=16yDHzkko12yTd8zSEUkBC1PT7AZ-joEC)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/Newsletter-Sign-Up-Form-With-Success-Message-React.git)
- Live Site URL: [Live](https://demarcus11.github.io/Newsletter-Sign-Up-Form-With-Success-Message-React/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

State Variable to hold current status of modal

```js
const [showThankYouModal, setShowThankYouModal] = useState(false);
```

Function to update state variable to show modal

```js
const onSubmit = () => {
  setShowThankYouModal(true);
};
```

Popup Modal

```js
{
  showThankYouModal && (
    <ThankYouModal email={email} setShowThankYouModal={setShowThankYouModal} />
  );
}
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus11)
