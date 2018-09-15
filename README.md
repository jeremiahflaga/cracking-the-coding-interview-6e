# Solutions to Exercises in ["Cracking the Coding Interview 6th Edition" of Gayle Laakmann McDowell](https://www.bookdepository.com/Cracking-Coding-Interview-Gayle-Laakmann-McDowell/9780984782857?a_aid=jflaga)



<br />


------------------------------

# C#

#### to create console project

0. create folder `console`

1. `cd console`

2. `dotnet new console`

#### to create test project

0. create folder `test`

1. `cd test`

2. `dotnet new xunit`

#### to run project

`dotnet run`


#### to run test

`dotnet test`




------------------------------

# Java


## How to make Java project with JUnit tests in VS Code then run it

Found this project template: https://github.com/kasecato/vscode-javadebug-sample

To run it, install the ["Java Extension Pack"](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack). Refer to ["Java in Visual Studio Code"](https://code.visualstudio.com/docs/languages/java) for more details

To run JUnit tests, install the ["Java Test Runner" extension](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)



## How to compile then run single file Java code in this repository

I decided to prefix my filenames with the date I first created that file. For example `2018-09-15_1.1-is-unique.java`. Because of that your Java compiler might complain that your class (`public class Main`) does not have the same name as the file containing it.

I found a solution to it [here](https://www.geeksforgeeks.org/myth-file-name-class-name-java/): _"The myth about the file name and class name should be same only when the class is declared in public."_

So what I do is just remove the `public` modifier in my classes:

``` java
class Main
```

Then compile the Java file:

```
javac 2018-09-15_1.1-is-unique.java
```

Then run Main:

```
java Main
```



<br />

------------------------------

# NOTES:

## Sept 15, 2018

**"Copying masters is the first step to mastery"**<sup id="footnote-indicator-1">[[1]](#footnote-1)</sup> --- so I decided to just read the solutions (at least during this first reading), starting from page 192, then reimplement/rewrite the code in the solutions in JavaScript, C# and/or perhaps in F# also because I want to learn F#.

I will also try to do write tests for the existing code in the solutions part of the book (Michael Feathers calls this kind of tests _"characterization tests"_ in his book ["Working Effectively with Legacy Code"](https://www.bookdepository.com/Working-Effectively-with-Legacy-Code-Michael-Feathers/9780131177055?a_aid=jflaga), page 186).

I determined that writing charaterizations tests for the existing code in the book can be helpful when the question in the exercises is ambiguous. For example, the first exercise question on page 90 was somewhat ambiguous to me. It says, _"Implement an algorithm to determine if a string has all unique characters."_ On first reading, I understood it to mean, _"Write code to determine if a string contains all characters in the alphabet"_ (and that understanding is what drives me when I was writing my solution in [ch1-arrays-and-strings/2018-04-07_1.1-is-unique.js](/blob/master/ch1-arrays-and-strings/2018-04-07_1.1-is-unique.js)) --- which means that that solution is wrong :) .










<br />
<br />
<br />

------------------------------

<sup id="footnote-1">[[1]](#footnote-indicator-1)</sup> <small>I googled for this quote and found this better, more poetic words by Michael Minkoff in his article ["Three Stages of Learning: How to Become a Master"](https://renewthearts.org/three-stages-of-learning-how-to-become-a-master/): _"Imitation is the beginning of any learning process. The first step in becoming a master is imitating the masters."_</small>
