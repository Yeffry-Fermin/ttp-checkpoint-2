// ============================================================
// PART 3 — Rendering Lists
//
// How to verify your work:
//   Make sure "npm run dev" is still running.
//   Save this file and check the "Part 3 — Rendering Lists" section in the browser.
//   You should see list items appear on the page as you complete each task.
//
// Instructions:
//   - Complete the tasks in order
//   - For EXPLAIN tasks, write your answer as a comment below the prompt
// ============================================================


// ------------------------------------------------------------
// SECTION A — Rendering a List from an Array
//
// Why we learn this:
//   Real data comes in arrays. Instead of writing out each item by hand,
//   React lets you map over an array and return JSX for each item.
//   This is how every feed, search result, and card grid is built.
// ------------------------------------------------------------

// The following array is provided. Do not change it.
const players = [
  { id: 1, name: "LeBron",  score: 42 },
  { id: 2, name: "Curry",   score: 31 },
  { id: 3, name: "Messi",   score: 55 },
  { id: 4, name: "Serena",  score: 18 },
  { id: 5, name: "Brady",   score: 67 },
]

function SectionA() {
  // A1. Complete
  // Use .map() to render each player as a <li> inside the <ul> below.
  // Each item should display the player's name and score.
  // Each <li> needs a 'key' prop — use the player's id.
  //
  // Why: React requires a unique key on each item in a mapped list so it
  //      can track which items changed, were added, or were removed.

  // A2.
  // Add a second list below that shows only players with a score above 30.
  // Use .filter() on the array first, then .map() the result.
  // Add an <h3> above it that says "Score above 30".
  //
  // EXPLAIN: Why does React require a key prop on each list item?
  //          What happens if two items share the same key?
  //
  //          answer:React requires it to keep track of the rendered lists for when they get modified

  const playerAbove30 = players.filter((player) => player.score > 30)
  return (
    <div>
      <h2>Section A — Rendering a List</h2>
      <h3>All Players</h3>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>Name: {player.name} : Score: {player.score}</li>
          )
        })}
      </ul>

      <h3>Score above 30</h3>
      <ul>
        {playerAbove30.map((player) => <li key={player.id}>Name: {player.name} : Score: {player.score}</li>)}
      </ul>
    </div>
  )
}


// ------------------------------------------------------------
// SECTION B — Lists and Components
//
// Why we learn this:
//   Mapping to plain <li> tags works, but in real apps each item
//   is usually its own component. Combining .map() with a component
//   is one of the most common patterns in React.
// ------------------------------------------------------------

// B1.
// Create a component called PlayerRow.
// It should accept props and display a player's name and score inside a <div>.
//
// Write PlayerRow here:
const PlayerRow = ({name, score}) => {
  return <div>Name: {name} : Score: {score}</div>
} 


function SectionB() {
  // B2.
  // Use .map() to render a PlayerRow for each player in the array.
  // Pass the player's name and score as props to each one.
  // Each PlayerRow still needs a key — put it on the PlayerRow itself.
  //
  // Notice how this is cleaner than writing out each player by hand,
  // and reuses the same component structure for every item.
  //
  // EXPLAIN: What is the advantage of rendering a component inside .map()
  //          compared to mapping to a plain HTML element like <li>?
  //
  //          answer: The advantages are code reusability, ease of use and easier to maintain as opposed to mapping plain html elements.

  return (
    <div>
      <h2>Section B — Lists and Components</h2>
      <ul>
        {players.map((player) => {
          return <PlayerRow name={player.name} score={player.score} key={player.id}/>
        })}
      </ul>
    </div>
  )
}


// ------------------------------------------------------------
// Do not edit below this line.
// ------------------------------------------------------------

function Part3() {
  return (
    <section>
      <h1>Part 3 — Rendering Lists</h1>
      <hr />
      <SectionA />
      <hr />
      <SectionB />
    </section>
  )
}

export default Part3
