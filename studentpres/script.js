
let button = document.getElementById('myButton');


// button.addEventListener('click', function() {
//   alert('Button was clicked!');
  
// });


  //when working with event listeners, they occur in the order that they are defined in the javascript
  //file. we could create 2 event listeners for grandparent and they would log one after the other.




button.addEventListener('click', function(event) {
    console.log(event); 
  });
  //gives tons of information about the event that just occurred when you performed the event 'click'
  //shows us the event target, and this is the element that triggered the event
  //there are also elements called currentTargets, referring to the element that the listener is currently
  //attached to. The current target changes as the event moves up or down the DOM tree. 

  //what i mean by this is that when an event occurs, the event can also trigger listeners
  //on other elements before and after it reaches the target element. This is known as Event Propagation
  //and it occurs in two phases: bubbling and capturing.

  
  //to showcase these phases we can look at our div elements right here.


  const grandparent = document.querySelector(".grandparent")
  const parent = document.querySelector(".parent")
  const child = document.querySelector(".child")


  //here out callback function is going to just be an arrow function where the event object 
  //is just called e



  // grandparent.addEventListener("click", e => {
  //   console.log('Grandparent 1')
  // })




  //with parent and child listeners, and when clicking on elements you recieve the events of all 
  //parent elements because you are technically clicking on all of them. They are all layered, 
  //going back to the document itself.


//we can see this in action when we add in eventListeners for the other elements.

  // parent.addEventListener("click", e => {
  //   console.log('Parent 1')
  // })

  // child.addEventListener("click", e => {
  //   console.log('Child 1')
  // })

  // document.addEventListener("click", e => {
  //   console.log("Document 1")
  // })



  //bubbling is the process of going from the closest element to the furthest away, this is one half
  //of how events work, and it is the default phase of most eventListeners in Javascript
  //the other half is called capturing. Capturing always happens before bubbling and it is the process 
  //of going in towards the element, starting from the furthest away element.
  

  //to make something a capture event, rather than bubble, you can set the event this way (add above three bubble events, comment this out)

  // grandparent.addEventListener("click", e => {
  //   console.log('Grandparent 1')
  // }, {capture: true})




    //let's give all the elements capture and bubble eventListeners so that we can clearly see 
    //these processes of Event Propagation

  // grandparent.addEventListener("click", e => {
  //   console.log('Grandparent Capture')
  // }, {capture: true})


  // grandparent.addEventListener("click", e => {
  //   console.log('Grandparent Bubble')
  // })



  // parent.addEventListener("click", e => {
  //   console.log('Parent Capture')
  // }, {capture: true})





  // parent.addEventListener("click", e => {
  //   console.log('Parent Bubble')
  // })




  // child.addEventListener("click", e => {
  //   console.log('Child capture')
  // }, {capture: true})


  // child.addEventListener("click", e => {
  //   console.log('Child Bubble')
  // })


  // document.addEventListener("click", e => {
  //   console.log('Document Capture')
  // }, {capture: true})


  // document.addEventListener("click", e => {
  //   console.log('Document Bubble')
  // })

  
  //overall, when it comes to working with these phases of Event Propagation the bubbling phase 
  //is more common to use by developers than the capturing phase because it allows for Event Delegation
  //Event delegation basically is the process of a parent element handling event triggered by child
  //elements, and it is efficient for handling events on multiple elements.
  //Event delgation is a big part of event listening however due to time I am going to move onto 
  //the last key aspects of event listeners.




  //in order to stop the phases of Event Propagation there are different ways you can interrupt 
  //the process or remove the listener altogether.

  //To entirely stop all future propagation, we can use event.stopPropagation.
  //and this will stop all phases from occuring after it is used.
  //For example, we can use it in the parent capture event listener (substitute for parent code above)

  // parent.addEventListener("click", e => {
  //   e.stopPropagation()
  //   console.log('Parent Capture')
  // }, {capture: true})



  //if we want an event to only occur once we could use a third parameter inside the listener
  //and set it as follows (substitute for parent code above)

  // parent.addEventListener("click", e => {
  //   console.log('Parent Bubble')
  // }, {once: true})





  //As an alternative approach, we could just simply omit the event listener.
  //going back to our original button, we could adjust our code as follows:


  //we create our function here, with the alert, but also include a removeEventListener function
  //so this event listener would only work once, and then it would be removed. 

  //this removes the listener after the first click and also adds the event listener to the button


function handleClick() {
    alert('Button clicked!');
    
    
    button.removeEventListener('click', handleClick);
}


button.addEventListener('click', handleClick);


//removing and adjusting the processes of Event Propagation is key to eventListeners, it enhances our code
//maintainability, helps with debugging, and prevents possible memory leaks. 


//Overall, event listeners in Javascript are fudamental when communicating with the DOM of a browser, and 
//when creating an interactive and dynamic web page. Here I covered the basics of how event listeners 
//work, but there are many practices which are good to know when it comes to understanding and 
//writing the best event listeners.