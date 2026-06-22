// ============================================================
// PART 4 — State and Events
//
// useState is already imported at the top — you will need it for every section.
//
// How to verify your work:
//   Make sure "npm run dev" is still running.
//   Save this file and interact with your components in the browser.
//   State means the component updates when something changes —
//   the page should reflect those changes without a full refresh.
//
// Instructions:
//   - Complete each section in order
//   - For EXPLAIN tasks, write your answer as a comment below the prompt
// ============================================================

import { useState } from 'react'


// ------------------------------------------------------------
// A NOTE ON EVENTS
//
// An event is something the user does — clicking a button, typing in a box,
// submitting a form. The browser detects these actions and fires an event.
//
// In React, you respond to events by passing a function directly onto a JSX element.
// That function runs automatically whenever the event fires.
//
// JSX elements have special attributes for this — one for clicks, one for typing,
// and so on. Each attribute takes a function as its value.
// You do not call the function yourself — you hand it over, and React calls it.
// ------------------------------------------------------------


// ------------------------------------------------------------
// SECTION A — useState Basics
//
// Why we learn this:
//   A regular variable resets to its original value every time a component re-renders.
//   State is different — React holds onto it between renders
//   and updates the page automatically when it changes.
//
//   useState is the tool that gives a component its own memory.
// ------------------------------------------------------------

function Counter() {
  // A1.
  // Declare a state variable called count with an initial value of 0.
  //
  // Why: useState gives you two things — the current value, and a function
  //      to update it. When you call the update function, React re-renders
  //      the component and shows the new value on the page.
  const [count, setCount] = useState(0)
  // A2.
  // Add a button that says "Add 1".
  // When clicked, it should increase count by 1.
  const addOne = () => {
    setCount(count + 1)
  }
  // A3.
  // Add a second button that says "Reset".
  // When clicked, it should set count back to 0.
  //
  // Test it: click "Add 1" several times, then click "Reset".
  const resetCount = () => {
    setCount(0)
  }
  return (
    <div>
      {/* A1: remove the hardcoded 0 with the state */}
      <h3>Count: {count}</h3>
      {/* A2: Add 1 button */}
      <button onClick={addOne}>Add +1</button>
      {/* A3: Reset button */}
      <button onClick={resetCount}>Reset</button>

    </div>
  )
}

function SectionA() {
  // EXPLAIN: What is state?
  //          How is a state variable different from a regular variable?
  //          What happens on the page when you call the updater function?
  //
  //          answer: State is a react hook that is very similar to a a variable. Its different from a variable in that it 
  //          when state is updated, react triggers a re-render of the page. When you update the updater function, if its sucessful you get a re-render of the page

  return (
    <div>
      <h2>Section A — useState</h2>
      <Counter />
    </div>
  )
}


// ------------------------------------------------------------
// SECTION B — One Variable, Many Buttons
//
// Why we learn this:
//   In Section A, every click changed count by the same fixed amount.
//   But state can hold more than numbers, and more than one button
//   can update the very same state variable — each one setting it
//   to something different. That idea is the missing piece before
//   we get to inputs in the next section.
// ------------------------------------------------------------

function MoodPicker() {
  // B1.
  // Declare a state variable called mood with an initial value of your choice
  // (a string, like "neutral").
  const [mood, setMood] = useState('')
  // B2.
  // Add three buttons: "Happy", "Sad", and "Excited".
  // Each button needs its own click handler that sets mood to that
  // button's word — clicking "Sad" should set mood to "sad", and so on.
  //
  // Why: All three buttons update the same state variable, just with
  //      a different value each time.

  // B3.
  // Below the buttons, display a sentence that includes the current mood,
  // for example "Current mood: happy".
  //
  // Test it: click each button and watch the sentence change.
  //
  // EXPLAIN: How can three different buttons all update the same state variable?
  //          What is actually different between this component and Counter?
  //
  //          answer:They can all update the same state variable because we use the same setter function. The counter component had
  //          multiple functions to handle click events, this component you can make ur updates without needing them
  //          


  return (
    <div>
      {/* B2: three buttons go here */}
      <button onClick={() => setMood('Happy')}>Happy</button>
      <button onClick={() => setMood('Sad')}>Sad</button>
      <button onClick={() => setMood('Excited')}>Excited</button>
      {/* B3: mood display goes here */}
      <p>Current mood: {mood}</p>
    </div>
  )
}

function SectionB() {
  return (
    <div>
      <h2>Section B — One Variable, Many Buttons</h2>
      <MoodPicker />
    </div>
  )
}


// ------------------------------------------------------------
// SECTION C — Controlled Inputs
//
// Why we learn this:
//   A controlled input means the value displayed in the input box
//   always comes from React state. Every keystroke updates state,
//   and the input re-renders with the new value. This gives you
//   access to whatever the user has typed — which is necessary
//   for forms, search boxes, filters, and most real-world UI.
// ------------------------------------------------------------

function NameInput() {
  // C1.
  // Declare a state variable called inputValue. Choose an appropriate initial value.
  const [inputValue, setInputValue] = useState('')
  // C2.
  // Add an input element.
  // Wire it up so that every keystroke updates the state variable.
  // The input's displayed value should always come from state — not from the browser.
  //
  // Why: The browser's event object gives you access to whatever is currently
  //      typed in the input. You use that to update state on every change.

  // C3.
  // Below the input, add a paragraph that displays what is currently in the state variable.
  // It should update in real time as you type.
  //
  // Test it: type something and watch the paragraph change.
  //
  // EXPLAIN: What is a controlled input?
  //          What would happen if the input's displayed value did not come from state?
  //
  //          answer:Honestly no idea to either of these questions

  return (
    <div>
      {/* C2: input goes here */}
      <input type='text' onChange={(e) => setInputValue(e.target.value)}/>
      {/* C3: display text goes here */}
      <p>{inputValue}</p>
    </div>
  )
}

function SectionC() {
  return (
    <div>
      <h2>Section C — Controlled Inputs</h2>
      <NameInput />
    </div>
  )
}


// ------------------------------------------------------------
// SECTION D — Conditional Rendering
//
// Why we learn this:
//   Not everything should appear on the screen at all times.
//   Conditional rendering lets you show or hide content based on state.
//   This is how alerts, dropdowns, modals, and toggled UI elements
//   work in React.
// ------------------------------------------------------------

function Toggle() {
  // D1.
  // Declare a state variable called isVisible with an initial value of false.
  const [isVisible, setIsVisible] = useState(false)
  // D2.
  // Add a button that toggles isVisible between true and false when clicked.
  // The button label should change based on the current state —
  // one label when the content is visible, a different label when it is not.
  //
  // Hint: you can use a variable above the return to decide what the label should be.

  // D3.
  // Below the button, render a paragraph that says "Now you see me!" —
  // but only when isVisible is true. Use the && operator to do this.
  //
  // Test it: clicking the button should show and hide the message.

  // D4.
  // Replace D3 with a ternary instead of &&.
  // ternary structure: 
  // -> condition ? if condition is true : if condition is false
  // When isVisible is false, show a paragraph that says "I am hidden." instead.
  // A ternary has three parts: a condition, a value if true, and a value if false.
  //
  // EXPLAIN: What does the && operator do in JSX?
  //          What is the difference between && and a ternary?
  //          When would you use one over the other?
  //
  //          answer: The && checks if the whole expression evals to true.
  //          The tenary operator allows you to return jsx if true or false, && only evaluates

  return (
    <div>
      {/* D2: button goes here */}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      {/* D3 / D4: conditional message goes here */}
      <p>{isVisible ? "Now you see me" : "I am hidden"}</p>
    </div>
  )
}

function SectionD() {
  return (
    <div>
      <h2>Section D — Conditional Rendering</h2>
      <Toggle />
    </div>
  )
}


// ------------------------------------------------------------
// SECTION E — Callback Props
//
// Why we learn this:
//   Props can carry more than text and numbers — they can carry a
//   function. This is how a child component tells its parent that
//   something happened, without the child needing any state of its own.
//   Data flows down through props; events flow back up through a
//   function passed down the same way.
// ------------------------------------------------------------

function LightSwitchButton({toggle}) {
  // E3.
  // This component should accept o{toggle} — a function.
  // Render a single button. When clicked, it should call that function.
  // Do not declare any state in this component — it doesn't need any.

  return (
    <div>
      <button onClick={toggle}>Toggle Light</button>

    </div>
  )
}

function LightSwitch() {
  // E1.
  // Declare a state variable called isOn with an initial value of false.
  const [isOn, setIsOn] = useState(false)
  // E2.
  // Write a function that flips isOn to the opposite value.
  const toggleOn = () => {
    setIsOn(!isOn)
  }
  // E4.
  // Render LightSwitchButton below, passing your flip function from E2
  // to it as a prop.

  // E5.
  // Display a sentence showing whether the light is currently on or off.
  //
  // Test it: click the button. The sentence in LightSwitch should update,
  // even though the click happened inside LightSwitchButton.
  //
  // EXPLAIN: How is passing a function as a prop similar to passing a string
  //          or number as a prop? What's different about it?
  //          Why doesn't LightSwitchButton need its own state to make this work?
  //
  //          answer: Props are just variables, so you can pass them as such they are similar. 
  //          the difference is. The buttond doesnt need its own state because the parent component handles it. 

  return (
    <div>
      {/* E5: on/off sentence goes here */}
      <p>The light switch is {isOn ? "On" : "Off"}</p>
      {/* E4: LightSwitchButton goes here */}
      <LightSwitchButton toggle={toggleOn} />

    </div>
  )
}

function SectionE() {
  return (
    <div>
      <h2>Section E — Callback Props</h2>
      <LightSwitch />
    </div>
  )
}


// ------------------------------------------------------------
// SECTION F — Forms and preventDefault
//
// Why we learn this:
//   By default, submitting a form reloads the entire page — which would
//   wipe out any React state you've built up. Every React form needs to
//   stop that default behavior before doing anything else.
// ------------------------------------------------------------

function GreetingForm() {
  // F1.
  // Declare a state variable called nameInput, starting as an empty string.
  // Declare a second state variable called greeting, starting as an empty string.
  const [nameInput, setNameInput] = useState('')
  const [greeting, setGreeting] = useState('')
  // F2.
  // Add a <form> containing a controlled text input wired to nameInput,
  // and a submit button.

  // F3.
  // Write a function that runs when the form is submitted. It should:
  //   - Call preventDefault() on the event object, as the very first line
  //   - Set greeting to a message that includes whatever was in nameInput
  //     (for example, "Hello, Sam!")
  //
  // Why: preventDefault() stops the browser's default reload-the-page
  //      behavior, so your state survives the submit.

  // F4.
  // Wire your function from F3 to the form's submit event.

  // F5.
  // Below the form, display greeting. It should be blank until the form
  // has been submitted at least once.
  //
  // Test it: type a name and submit. The page should not reload, and the
  // greeting should appear below the form.
  //
  // EXPLAIN: What happens if you submit a form without calling preventDefault()?
  //          Why does that matter for a component that holds state?
  //
  //          answer: Submitting a form without prevendingDefault will cause the page to refresh.
  //          It matters because the page refresh will most likely clear the state value
  
  function handleSubmit (e) {
    e.preventDefault()
  }
  return (
    <div>
      {/* F2: form goes here */}
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
      </form>
      {/* F5: greeting goes here */}
      <div>Hello, {nameInput}</div>
    </div>
  )
}

function SectionF() {
  return (
    <div>
      <h2>Section F — Forms and preventDefault</h2>
      <GreetingForm />
    </div>
  )
}


// ------------------------------------------------------------
// SECTION G — Adding and Removing from Array State
//
// Why we learn this:
//   Arrays in state work the same way as any other state — you cannot
//   change them directly. array.push() and array.splice() modify the
//   existing array in place, which React won't notice. Instead, you create
//   a brand new array using tools like the spread operator (...) and
//   array.filter().
// ------------------------------------------------------------

function SnackList() {
  // G1.
  // Declare a state variable called snacks, an array starting with two
  // or three snack name strings of your choice.
  const [snacks, setSnacks] = useState(['cookies', 'chips', 'protein bar'])
  // G2.
  // Add a button labeled "Add Pretzels". When clicked, it should add the
  // string "Pretzels" to the snacks array — without mutating the original
  // array. Look into the spread operator for this.

  // G3.
  // Display each snack using .map(). Each one needs a key, and its own
  // "Remove" button that removes just that snack from the array.
  //
  // Hint: array.filter() lets you build a new array that excludes one
  //       specific item.

  // G4.
  // If snacks is empty, display "No snacks left." instead of the list.
  //
  // Test it: click "Add Pretzels" a couple of times, then remove snacks
  // one by one until the empty message appears.
  //
  // EXPLAIN: Why can't you use array.push() or array.splice() directly on
  //          state? What do the spread operator and .filter() let you do
  //          instead?
  //
  //          answer: State is immutable so using the methods is not allowed as they mutate data. Spread operator and filter do not mutate the array so its allowed.

  function addPretzels () {
    setSnacks([...snacks, 'pretzels'])
  }
  return (
    <div>
      {/* G2: Add Pretzels button goes here */}
      <button onClick={addPretzels}>Add Pretzels</button>
      {/* G3 / G4: snack list or empty message goes here */}
      {snacks.length === 0 ? "No snacks left" : snacks.map((snack) => <div>{snack}</div>)}
    </div>
  )
}

function SectionG() {
  return (
    <div>
      <h2>Section G — Array State</h2>
      <SnackList />
    </div>
  )
}


// ------------------------------------------------------------
// Do not edit below this line.
// ------------------------------------------------------------

function Part4() {
  return (
    <section>
      <h1>Part 4 — State and Events</h1>
      <hr />
      <SectionA />
      <hr />
      <SectionB />
      <hr />
      <SectionC />
      <hr />
      <SectionD />
      <hr />
      <SectionE />
      <hr />
      <SectionF />
      <hr />
      <SectionG />
    </section>
  )
}

export default Part4
