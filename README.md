# A Clean And Modern Starter

<img src="/Users/Pope/stormcloud/bitbucket/boilerplate/hood.jpg">

"Clean and Modern" is a boilerplate for making beautiful, quick, lean, tidy web applications. To accomplish this we stole the best development experiences available (Vue, Bulma, Koa, and Mongodb) and put them in one place. So pour yourself a glass of 18 year old scotch and build something epic. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them:

> Clean and Modern uses Nodejs for execution and MongoDB for storage... so you'll be needing both

Install with home brew 

```bash
#node
brew install node

# mongo
brew install mongodb
```

### Installing

Other than node and mongo "Clean and Modern" contains almost everything you'll need to build out a service with a *light* front end.

Clone the repo

```bash
# clone the repo
git clone https://github.com/jppope/clean-and-modern.git
# Change Directories
cd clean-and-modern
# install
npm install # or yarn install
```

You can find configuration details located here:

``` bash
/backend/config/env
```

> if you want to hookup sendgrid for email verification (my default currently) add their env file to your backend directory. (what? You thought minimal meant no duct tape?)

```bash
# backend
npm run dev
# frontend
npm run dev

# sip your scotch for a moment
```

(I'll update the rest as people tell me where I forgot stuff)

## Built With

* [Vue.js](http://vuejs.org) - The Progressive JavaScript Framework
* [Koa](http://koajs.com/) - A Next Generation Framework for Node.js
* [Bulma](https://rometools.github.io/rome/) - CSS Framework based on Flexbox
* [Mongodb](https://mongodb.com) - #1 NoSQL datastore

## Planned Improvements:

* Nginx installation instructions for all that reverse proxy stuff
* Docker integration
* OAuth 2.0 w/ SSO
* and other eventually broken promises.

## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## ChangeLog

* **Initial Commit** - *v0.0.01*

## Author

* **@JpPope** - *v0.0.01* - [jonpauluritis.com](http://jonpauluritis.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


### Acknowledgments/ Thank You to the following People:
* Evan You (Vuejs)
* TJ Holowaychuk (Koa)
* Adrian Obelmejias (API boilerplate)
* Daniel Supernault (Bulma template)
* Mike Roth (API boilerplate/ Mentoring)
* Steve House (Mentoring/ Code Review)
* Eric Tucker (Mentoring/ Code Review)
* Ray Carrender (Mentoring/ Code Review)
* Chad Peppers (Code Review)
