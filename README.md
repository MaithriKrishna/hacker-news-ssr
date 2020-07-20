
# HACKER NEWS

## Stack

### Tools
 - React
 - Jest unit testing
 - Redux
 - Node.js
 - Express

### CI CD
 - Code Pipeline with source as GitHub
 - CodeBuild runs eslint, test cases as a prebuild commands before build
 - CodeDeploy for deploying the build artifact on EC2 instance

### Approach

- local storage has been used for hide and upvote functionality
- Chart is made as sticky for mobile for better view
- React Router is used for enabling bookmarkable feature

## Demo

https://dc2ftcucso24o.cloudfront.net/hackerNews

![alt text](https://raw.githubusercontent.com/MaithriKrishna/hacker-news-ssr/master/flow.png "Diagram")



## Performance

 - Charts are lazy loaded using `@loadable/components` to improve the performance

 - External CSS used to improve caching

 - SEO for improving user experience and usability of website

 - Cloud Front as a CDN

 - Response is gzipped by CloudFront



 