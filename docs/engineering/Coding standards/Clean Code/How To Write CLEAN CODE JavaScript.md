

Do you know how to write clean code? If not, you have come to the right place! Writing clean code is one of the most challenging things for software developers. You will have to deal with messy and unstructured codes every day as a software engineer or programmer. The challenge lies in figuring out how to structure your code so that it is easy to read and understand by other engineers and yourself in the future when you need to make changes. The good news is that some universal practices and principles help us write clean code. In Doc, we will take an in-depth look at what makes code “clean” and share some tips on how you can start writing cleaner code from today onwards.

# **What is a Clean Code?**

Clean code is code that is easy to read, easy to understand, and easily manageable by other software engineers. It does not matter if you are writing a simple web app or large-scale software for NASA — you will have to follow some basic rules to write clean code. If you do not, your code will be unreadable to others. You will have to keep fixing it every day, and you cannot scale it properly. When you are writing clean code, you are following best practices that help you organise your code in a better way. You are also writing code that is easy to read and understand for both you and others. It is difficult to follow these rules, especially as a software engineer. But do not worry. Once you have learned the principles and followed the best practices, you will find it easier to write clean code.

## A Solid Understanding of Behaviour-Based Design

Behaviour-based design is about writing code whose behaviour is easily testable and predictable. In simpler terms, you should be able to write code that performs the tasks you want it to do reliably and consistently. You should also be able to evaluate your code to make sure it is working correctly. With a solid understanding of behaviour-based design, you can quickly write code that meets the following criteria:

- Well-factored code
- Easily testable 
	- Code is properly unit evaluated
- Consistent behaviour 
	- Code performs the tasks you want it to do in a reliable and consistent way
- Easy to read 
	- Code is easy to read and easy to understand
- Easy to maintain 
	- Code is easy to maintain. You can quickly fix bugs or add new features without rewriting large chunks of code
* Easy to reuse 
	* Code is easy to reuse.

You can use it in other projects seamlessly.

## **Destructuring**

JavaScript Object Destructuring is a technique that allows you to extract or modify the properties or data of an object using its name. Object Destructuring is commonly used when working with objects with dynamic data fields, such as JSON objects.

Let us look at an example of JavaScript Object Destructuring. In this example, we will be retrieving the value of the text property of an object named person :

```javascript


const person = { firstName: "Joe", lastName: "Blow", age: 35 };

const {firstName, lastName, age}= person;

console.log(firstName, lastName, age)

// Joe Blow 35_

```


As you can see in this example, JavaScript Object Destructuring is straightforward. You need to know how to access and manipulate objects in JavaScript through their properties and values.

## **Guard Clauses**

Let us assume you are writing code for a web application and want to create a new route. You are now at a point where you want to use a guard clause. You can use guard clauses while executing code that calls external APIs or performing database operations requiring you to manage errors. Guard clauses are an excellent way to handle mistakes because they halt the execution of the code at the point where the error is detected and then show a user-friendly error message for the user. With a guard clause, you can write your code in the following way:

```javascript

const fetch = (_url_) => {

  if (!url) Promise.reject(new Error('url is required'));

  return Promise.resolve('fetching data');

}
```


## **Objects and Guard Clauses**
```js
const sendEmail = ( to ,  subject ,  body ) => {

  if(to){

    _// send email_

  }

  else{

    throw new Error('please enter email address);

  }

}

Send email("abc@gmail.com", "test", "We are testing");
```

Using the example above, another developer must know **all** the boundaries' orders **to** use this function correctly. It is a good idea to consider errors when creating a function. This can be achieved like this:

```js

const sendEmail = ({_to_, _subject_, _body_}) => {

  if(!to || !subject || !body) Promise.reject(new Error('missing required fields'));

  return Promise.resolve(

    _// sending email_

    );

}

sendEmail( {

  to:"abc@gmail.com",

  subject: "test",

  body: "we are testing"});

```

## **Default Arguments**

Named function parameters can be initialised with default values if executed without parameters.
```js

const colour = (_colour_ = 'red',) => {

  return `${colour}`;

}
```



## **Conditional Shorthand**

Conditional shorthand is one of the best JavaScript features developers can use to write clean code. With conditional shorthand, you can write code in the following way:
```js
if(isAdmin){
  _//do something_
}
if (!isAdmin) {
  _//do something_
}
```


If the first condition is invalid, the code within the scope will not run, and the same applies to the second condition.

## **Template Literals**

Templatization is another way to clean up your code. If you have ever written code, you would know that “strings” may be used while defining variables, functions, etc. The challenge with strings is that they can be difficult to read. Templatization solves this problem by defining strings in a more structured way. Instead of writing code like this:

```js

const userName= "Eddy";

const userAge= "25";

const userLocation= "Bogota";

const greeting= "Hello, my name is " + userName + " and I am " + userAge + " years old. I live in " + userLocation + ".";

```
You can write it in a more structured way using template literals, like so:

```js

const userName= "Eddy";

const userAge= "25";

const userLocation= "Bogota";

const greeting= `Hello, my name is ${userName} and I am ${userAge} years old. I live in ${userLocation}.`;
```

## **Write linear code**

Linear code is easy to read and understand. It follows a chronological order and is structured so that you can easily predict the outcome. Whether you are writing code for a web application or a mobile app, you should always write linear code. While writing linear code, you should avoid “side effects” or methods that perform more than one task. You should also avoid writing “ad-hoc code,” or methods that are unstructured and poorly written like so

```js
const sharePost = () => {

  getPost().then(_post_ => {

   sendTweet(post.url, `

   A post from ${post.author}

   Title: ${post.title}`).then(() => {

     console.log('Tweet sent');

   })

  })}
  ```

Here is a better way:

```js
const sharePost = _async_ () => {

  const post = await getPost();

  const tweet= await sendTweet(post.url,

    `A post from ${post.author}

    Title: ${post.title}

 `

  );

  console.log("Tweet sent");

}
```

## **Avoid side effects**

When you are writing code, you should avoid writing methods that perform “side effects.” A side effect occurs when a way performs multiple tasks or writes something to the disk or the database (either intentionally or not). When you are writing methods that perform side effects, it gets difficult to track where the side effects are taking place. This leads to unstructured code and makes the code difficult to read and modify. When you write code with side effects, you make your code harder to read and maintain. As a result, engineers must spend more time debugging and fixing bugs, which increases the time and cost of the project.

%%## **Spread Operator**

Storing and accessing data in JavaScript is easy. You can use variables to store data and objects to keep.%%

%%Todo%%