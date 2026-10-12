
// import React, { useState } from "react";
// import "./social.css";

// export default function Social() {
//   const [message, setMessage] = useState("");

//   const [messages, setMessages] = useState([
//     { id: 1, text: "Welcome to ToKa Fitness!", sender: "other" },
//     { id: 2, text: "Share your fitness journey here.", sender: "me" },
//     { id: 3, text: "Anyone got workout tips?", sender: "other" },
//     { id: 4, text: "Let's motivate each other!", sender: "me" },
//   ]);

//   function sendMessage(event) {
//     event.preventDefault();

//     if (!message.trim()) return;

//     setMessages((previousMessages) => [
//       ...previousMessages,
//       {
//         id: Date.now(),
//         text: message.trim(),
//         sender: "me",
//       },
//     ]);

//     setMessage("");
//   }

//   return (
//     <main className="chat-page">
//       <aside className="sidebar">
//         <button
//           type="button"
//           className="add-friend"
//           aria-label="Add friend"
//         >
//           ♙+
//         </button>
//       </aside>

//       <section className="chat-main">
//         <div className="chat-window">
//           {messages.map((item) => (
//             <div
//               key={item.id}
//               className={`message-row ${item.sender}`}
//             >
//               {item.sender === "other" && (
//                 <span className="profile-icon">●</span>
//               )}

//               <div className="message-bubble">
//                 {item.text}
//               </div>

//               {item.sender === "me" && (
//                 <span className="profile-icon">●</span>
//               )}
//             </div>
//           ))}
//         </div>

//         <form className="message-form" onSubmit={sendMessage}>
//           <input
//             type="text"
//             value={message}
//             onChange={(event) => setMessage(event.target.value)}
//             placeholder="What would you like to know?"
//             aria-label="Write a message"
//           />

//           <div className="input-actions">
//             <div className="extra-actions">
//               <button type="button" aria-label="Add image">
//                 ▧
//               </button>
//               <button type="button" aria-label="Add attachment">
//                 ‹›
//               </button>
//               <button type="button" aria-label="Record audio">
//                 ♩
//               </button>
//             </div>

//             <button
//               type="submit"
//               className="send-button"
//               aria-label="Send message"
//             >
//               ↑
//             </button>
//           </div>
//         </form>
//       </section>
//     </main>
//   );
// }
export default function Social() {}