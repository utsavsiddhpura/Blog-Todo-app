# Blog-Todo-app

This is a general blog app with add, delete, edit functinality. We can use this app to add a new blog, edit a current blog, or delete a blog. 

For the front end, I have used HTML (with the help of ejs module) with bootstrap for some styling. In the back-end, NodeJS is used with modules like ExpressJS for better routing, Mongoose for easy interface with the mongDB database. 

In the front end, inside the views folder, we have all the .ejs files required to run this blog app. In the backend, I have used the express router for better and classified handling of routes. When all articles section is opened, the data is fetched from the local mongodb server and passed on to the ejs file. Through the javascript in the ejs file, all the data is displayed to the user. We can connect a remote server and thus, we can fetch our todo list without losing our data. If a user wants to create a new blog, they can input the according values, and a new schema model object will be created and inserted into the database. If the user wants to edit the blog, he can input the new values and thus a new schema model object will be created and replaced by the old one on the bases of object id. Wnen a user wants to delete a blog, that particular document will be deleted from the database on the basis of id extracted from the post request parameters. 

For further improvements, there is a need to implement user authentication and user profile so that different users can post their blogs and also see the blogs from others. Also, some markdown feature can be implementd so that the user can style the blog page according to his/her needs. 
