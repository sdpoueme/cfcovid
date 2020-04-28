# Description
Code repository for http://cameroon-fights.covid.org - a public information page to help citizens of cameroon figthing covid19.
The page features a self-assessment link, a reference to the official covid19 page at minsante.cm, stats, line charts and public alerts. 


# App Sketching
https://projects.invisionapp.com/freehand/document/qA7X5Dph6'

# Tools used
* Node.js
* Vue.js

# Demo Screen
![](cfcovid_landing_page.png)

# How to run

## Locally
* npm install
* npm run serve

## On k8s
* docker build -t sdpoueme/cfcovid:latest .
* docker push  dpoueme/cfcovid:latest 
* kubectl apply -f cfcovid.yml

