# passport-boilerplate

This is your passport boilerplate.

## Setup 

1. Clone the repo
2. Rename the folder to your Project
3. Delete the `.git` file, when you are in the root of the file, you can press `ls` and you should see a `.git` file, then go ahead and run `rm -rf .git`

#### Setup your git repo
0. Setup your `.env` file and add all the things you need! (look at mongoose movies for reference!)
1. in the project root `git init`
2. `git add .` to add all the starter code
3. `git commit -m "setup boilerplate"` 
4. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
5. copy the remote address
6. In your terminal add the remote `git remote add origin yourGithubRepo'sAddressGoesHere`
7. `git pull origin main` If a screen pulls up asking you to do something just press `:q` and then `enter` (thats vim btw :) )
8. `git push origin main`

#### Setup your login (THE APP WON'T WORK until you do, no VIEWS are setup, or the landing route)

0. Setup your database connection string
1. Then Setup Your User Model, 
2. Follow the steps from the lesson plan to get your Google login credentials for your `.env` file (create the file if you haven't), or you can just copy the ones from earlier if you want to reuse them.
3. Setup the Code in your config passport 
4. Setup your callback routes in your `routes/index`
5. Setup a view and test your login!

#### Make a commit 

```git commit -m "setup up oauth and User Model"```
 
# App Title: Car-Rentals

# Description
Car-Rentals is a peer to peer car rental web application that allows users to list their cars to rent to other users. Once logged in, users can navigate to the rental page to view cars available for rent. Once a rental request is made, the owner of the car would receive a notification.

# Screenshots
![Alt text](public/screenshots/Screenshot%202023-07-14%20at%2009.11.01.png)

![Alt text](public/screenshots/Screenshot%202023-07-14%20at%2009.11.26.png)

![Alt text](public/screenshots/Screenshot%202023-07-14%20at%2009.11.42.png)


# Technology Used
 MongoDB, Moongoose, Express.js, Node.js, EJS, CSS, Javascript, Google cloud, Cyclic, Rapidcar API.

# Getting Started

# Trello link - https://trello.com/invite/b/nKUWorSi/ATTIc3ad06da9462f2d79faa85af7ac4cca5F7761598/ga-project2-carmaster

# Figma - https://www.figma.com/file/o7rstEn7HTC4AHl3Vgsqa9/Untitled?type=design&node-id=0%3A1&mode=design&t=U4IO5tXL7ZwBVcIU-1

# App link - https://nice-puce-lizard-slip.cyclic.app/

# Next Steps

1. Add more features to the app
  - Add cars to favourites
  - Add reviews
  - Messaging
  - Payment gateway

2. Improve on the UI and user experience
