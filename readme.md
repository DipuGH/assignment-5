
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:
getElementById(id): Selects a single element based on its unique id attribute.
getElementsByClassName(className):Selects a single element based on its unique id attribute.
querySelector(selector):Selects the first element that matches a specified CSS selector. This allows for flexible selection .
querySelectorAll(selector):Selects all elements that match a specified CSS selector.

2. How do you **create and insert a new element into the DOM**?
Ans:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Create Element & Push</h1>
    <h4 id="text-copy" >Create Element & Push</h4>
    <button id="btn">Click Here</button>
    <div id="container" >

    </div>
    
    <script>
        document.getElementById("btn").addEventListener("click",function(){
            const WriteSomething = document.getElementById("text-copy");
            const text = WriteSomething.innerText;
            
            const parentContainer = document.getElementById("container");

            const heading = document.createElement("h1")
            heading.innerText = text;
            
            parentContainer.appendChild(heading);
        })
    </script>

</body>
</html>

3. What is **Event Bubbling** and how does it work?
Ans: 
Event bubbling is one kind of mechanism. Here, if we click a child element it will trigger the parent element of this child.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
Child element event handeled by using parent element event handeler. It is very useful because sometimes we have multiple child element.For each element using event handler separetly can not possible.It also help for memory optimaization.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
The preventDefault() method cancels the default action that belongs to the event will not occur. and stopPropagation() method is used for closed event bubbling.

# Let's Code and Achieve your Dream 🎯
