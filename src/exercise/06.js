// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

// solution 1
// function UsernameForm({onSubmitUsername}) {
//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(event.target.elements.username.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Username:</label>
//         <input id="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// extra 1
// function UsernameForm({onSubmitUsername}) {
//   const usernameInputRef = React.useRef(null)
//
//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(usernameInputRef.current.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Username:</label>
//         <input ref={usernameInputRef} id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// extra 2
// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)
//   const usernameInputRef = React.useRef(null)

//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(usernameInputRef.current.value)
//   }

//   function handleChange(event) {
//     const value = event.target.value
//     const isValid = value === value.toLowerCase()
//     setError(isValid ? null : 'Username must be lower case')
//   }

//   function Error({error}) {
//     return <div style={{color: 'red'}}>{error}</div>
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Username:</label>
//           <input
//             ref={usernameInputRef}
//             id="usernameInput"
//             type="text"
//             onChange={handleChange}
//           />
//         </div>
//         {error && <Error error={error} />}
//         <button type="submit" disabled={error}>
//           Submit
//         </button>
//       </form>
//     </>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// extra 3
function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            value={username}
            id="usernameInput"
            type="text"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
