# hq:thyme - The Welcome Frontend Product Exercise (Version: A)

Welcome to my Welcome Frontend Exercise

I decided to go with [exercise A](https://github.com/pineapplehq/hiring-exercises/blob/master/frontend/instructions.md#exercise-a-creating-an-offer) because I believe it showcases the way I think as a programmer and problem solver. Specifically, I enjoyed the two aspects of this exercise; the platform (admin) side, and the candidate (public) side. It was refreshing and fun to build.

## What I built

My goal from the start was to build something that would be fun to use. The user experience is important to me. It is my opinion that great software is software that is pleasing to the eyes and easy to use. My second motivation was to keep the code as clean as I could with every commit. After all, we developers read code more often than we write it so attention to detail is always top of mind. There are a few areas that I would continue to polish and I have outlined those areas in my ROADMAP.md file.

**Okay, moving on!**

To get started, please run `yarn`. Once everything has installed run `yarn start` and you should be good to go from there. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so you should automatically get a new browser tab opened to [http://localhost:3000](http://localhost:3000). From here, you can view the application.

Below are a few screenshots and descriptions about what you are seeing. Please enjoy!

### Job Offers (Admin Views)

The below screens satisfy [these requirements](https://github.com/pineapplehq/hiring-exercises/blob/master/frontend/instructions.md#as-a-hiring-manager-i-want-to).

[![Job Offers Index Page](https://github.com/brandonshowers/hq-thyme/blob/main/resources/hqthyme-job-offers-index.png "Job Offers Index Page")](http://localhost:3000/admin/job-offers)

Here you can see the list of job offers that were created prior to the user logging into the system. From here you would be able to:

1. view a public offer page.
2. edit a job offer.
3. send an offer to a candidate.
4. delete a job offer.
5. [create a job offer](http://localhost:3000/admin/job-offers/new).

#### Job offer actions

![Job Offer Actions](https://github.com/brandonshowers/hq-thyme/blob/main/resources/hqthyme-job-offers-index-actions.png "Job Offer Actions")

#### Send offer modal

![Job Offer Send to Candidate](https://github.com/brandonshowers/hq-thyme/blob/main/resources/hqthyme-job-offers-send-to-candidate.png "Job Offer Send to Candidate")

### Creating a Job Offer

[![Creating a Job Offer](https://github.com/brandonshowers/hq-thyme/blob/main/resources/hqthyme-create-job-offer.png "Creating a Job Offer")](http://localhost:3000/admin/job-offers/new)

Things are a bit busy here on this page. Splitting the form into a multi-step solution would improve the user experience and smooth out the roughness a little.

![Job Offer Form Validation](https://github.com/brandonshowers/hq-thyme/blob/main/resources/hqthyme-create-job-offer-form-validations.png "Job Offer Form Validation")]

A little form validation action.

### The Job Offer (Candidate/Public View)

This screen satisfies [this requirment](https://github.com/pineapplehq/hiring-exercises/blob/master/frontend/instructions.md#as-an-employee-receiving-an-offer-i-want-to).

[![The Job Offer](https://github.com/brandonshowers/hq-thyme/blob/main/resources/hqthyme-job-offer-landing.png "The Job Offer")](http://localhost:3000/jobs/9dfc10e2-11a4-49ec-b076-505e5c6e7b86)

The Job Offer page displays all of the attributes required for a valid job offer. There is so much more that can be done on this page. Everything from interactive charts and graphs to help a candidate understand their compensation details. Questions and answers from the candidate to the hiring manager. And more! Outlined in the ROADMAP.md file.

## Thank You

Thank you for taking the time to read and review this exercise. I am always open to feedback so if you see anything out of place (in a major way or otherwise), have comments (of any kind), or questions (about anything), I am happy to discuss.
