This project is from a tutorial of NextJS 14.

The aim of this is to learn NextJS 14 features. For sake of simplicity using regular JavaScript. 
I hope to make this a reference piece to myself or others or a sandbox to try new things. 


This is Maximillian Schwarzmuller course.

This is the last notes for up to section 4. The later version would have the backend. This version has the data in a static file.
# Bookmark

# Learnings / Review
## The find method:
The find method in JavaScript is used to search for and return the first element in an array that satisfies a provided testing function. If no elements satisfy the testing function, find returns undefined.

Here we use it to match the params of the slug in our `dummy-news` file. It will return the first element that is matching slug 
and we can use that object.


## Parallel routes and Interceptor
We can use parallel routes and interceptor routes as a way to have modals. Note that it affects the file structure not so much the URL.

parellel routes are initiated by having an '@' 
interceptor routes are initiated by having an () and using . notation similar to import files to access the same level.

## Router Groups
You can make router groups by just having () and then a name in there. For this case we have
(marketing) and (content). The name does not affect the URL. This is just a way to group routes.

## Middleware
Middleware runs on every request we can use to modify data. The `NextResponse` is an object we can use to help us redirect if needed.

## Suspense
If we wish to show loading for granular data, lets say a list we can use suspense by React. This is good for cases where
we don't want to show the whole component loading but just parts of it such as data fetching. It has a `fallback` prop.

Each Suspense does it own thing and does not wait on others.