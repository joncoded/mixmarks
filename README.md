# MixMarks

a Next.js platform for "marks" (i.e. mini-apps like calculators and generators)

![screenshot of a MixMarks home page](./images/screenshot1.png)

## Demo

Run the demo on 
* [mixmarks.joncoded.com](https://mixmarks.joncoded.com) 
* [mixmarks-joncoded.vercel.app](https://mixmarks.vercel.app)(backup)

## Motivation

The focus of this project lies not on the "marks" themselves, but their _container_ as a _portfolio_ (the classic "list and item" solution!)

I made this to help others learn about the inner workings of Next.js and for any web developer who wants a quick non-CMS portfolio platform!

## Features

* fixed header
* light / dark / system themes
* home page has an infinite "show more" button
  * you can adjust the threshold when this button shows
* simple folder structure for items: `/mark`
  * each "mark" has its own: 
    * subfolder: 
      * a `page.tsx` file
      * a `metadata.ts` file 
* 4 sample "marks" included for inspiration

Sample of a "mark":

![screenshot of a mark](./images/screenshot2.png)

## Specifications

* front-end frameworks: `next.js` and `tailwind`
* no back-end: just pure front-end!

## Setup (for developers)

### clone repo

Run the following command on your command line:

```bash
% git clone https://github.com/joncoded/mixmarks.git mixmarks && cd mixmarks
```

### install packages
```
% npm install
```

### run time! 
```
% npm run dev
```

The app will run on `http://localhost:3000`

(if port 3000 is already used, it will host the app on `:3001` or on the next available port)

## Contribute

Make changes by following this procedure:

* clone the repository as mentioned above
* create a feature branch
  * `git checkout -b feature/branch`
* make and commit your changes
  * `git commit -m "what you changed"`
* push your changes
  * `git push origin feature/branch`
* open pull request
  * https://github.com/joncoded/mixmarks/pulls

Also, feel free to [raise any issues](https://github.com/joncoded/mixmarks/issues)!



