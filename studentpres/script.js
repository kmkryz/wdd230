
let button = document.getElementById('myButton');


button.addEventListener('click', function() {
  alert('Button was clicked!');
});


  //when working with event listeners, they occur in the order that they are defined in the javascript
  //file. we could create 2 event listeners for grandparent and they would log one after the other.




button.addEventListener('click', function(event) {
    console.log(event); 
  });
  //gives tons of information about the event that just occurred when you performed the event 'click'
  //shows us the event target, and this is the element that triggered the event
  //there are also elements called currentTargets, referring to th element that the listener is currently
  //attached to. The current target changes as the event moves up or down the DOM tree. 

  //what i mean by this is that when an event occurs, the event can also trigger listeners
  //on other elements before and after it reaches the target element. This is known as Event Propagation
  //and it occurs in two phases: bubbling and capturing.

  //showcasing bubbling and capturing


  const grandparent = document.querySelector(".grandparent")
  const parent = document.querySelector(".parent")
  const child = document.querySelector(".child")


  //here out callback function is going to just be an arrow function where the event object 
  //is just called e



//   grandparent.addEventListener("click", e => {
//     console.log('Grandparent 1')
//   })






  //with parent and child listeners, and when clicking on elements you recieve the events of all 
  //parent elements because you are technically clicking on all of them. They are all layered, 
  //going back to the document itself.





//   parent.addEventListener("click", e => {
//     console.log('Parent 1')
//   })

//   child.addEventListener("click", e => {
//     console.log('Child 1')
//   })

//   document.addEventListener("click", e => {
//     console.log("Document 1")
//   })

  //bubbling is the process of going from the closest element to the furthest away, this is one half
  //of how events work.
  //the other half is called capturing. This happens before bubbling and it is the process of going in 
  //towards the element, starting at the furthest away element.
  

  //to make something a capture event you can set the event this way (add above three bubble events, comment this out)

//   grandparent.addEventListener("click", e => {
//     console.log('Grandparent 1')
//   }, {capture: true})




  //you could make all the events to clearly see these things
  //all captures occur first before going through to do bubbles

  grandparent.addEventListener("click", e => {
    console.log('Grandparent Capture')
  }, {capture: true})


  grandparent.addEventListener("click", e => {
    console.log('Grandparent Bubble')
  })



  parent.addEventListener("click", e => {
    console.log('Parent Capture')
  }, {capture: true})





  parent.addEventListener("click", e => {
    console.log('Parent Bubble')
  })



  child.addEventListener("click", e => {
    console.log('Child capture')
  }, {capture: true})


  child.addEventListener("click", e => {
    console.log('Child Bubble')
  })


  document.addEventListener("click", e => {
    console.log('Document capture')
  }, {capture: true})


  document.addEventListener("click", e => {
    console.log('Document Bubble')
  })

  //now when you click on the child, you get the actual order in which the events would occur.
  //overall the bubbling phase is more common to use by developers than the capturing phase
  //and it is the default phase for most event listeners in javascript.




  //in order to stop these phases there are different ways you can interrupt the process

  //stop propagation, for example, will stop all phases from occuring after it is used
  //like if we used it in the parent capture event listener (substitute for parent code above)

//   parent.addEventListener("click", e => {
//     e.stopPropagation()
//     console.log('Parent Capture')
//   }, {capture: true})



  //if we want an event to only occur once we could used the third parameter inside the listener
  //and set it as follows (substitute for parent code above)

//   parent.addEventListener("click", e => {
//     console.log('Parent Bubble')
//   }, {once: true})

  // l