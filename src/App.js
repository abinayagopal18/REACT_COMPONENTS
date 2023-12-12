// import React from 'react'
// import './App.css';


// export default function App() {
//   return (
//     <div>
//       <h1 style={{textAlign:"center"}}>DATA FORM</h1>
//       <form>
//         <table>
//           <tr></tr>
//           <tr>
//             <td CLASS = "R1">NAME</td>
//             <td CLASS = "R2"><input type = "text" placeholder='ENTER NAME'></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">REG NO</td>
//             <td CLASS = "R2"><input type = "text" placeholder='ENTER REG NO'></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">DATE OF BIRTH</td>
//             <td CLASS = "R2"><input type = "date"></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">EMAIL</td>
//             <td CLASS = "R2"><input type = "email" placeholder='ENTER EMAIL ID'></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">PHONE NUMBER</td>
//             <td CLASS = "R2"><input type = "text" placeholder='ENTER PHONE NUMBER'></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">GENDER</td>
//             <td CLASS = "R2">
//                <input type = "radio" id = "male" name = "GENDER" value="MALE"></input>MALE
//               <input type = "radio" id = "female" name = "GENDER" value="FEMALE"></input>FEMALE
//             </td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">HOBBIES</td>
//             <td CLASS = "R2">
//                <input type = "checkbox" id = "draw" name = "HOBBIES" value="DRAWING"></input>DRAWING
//                <input type = "checkbox" id = "PLAY" name = "HOBBIES" value="PLAYING"></input>PLAYING
//                <input type = "checkbox" id = "SING" name = "HOBBIES" value="SINGING"></input>SINGING
//             </td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">COUNTRY</td>
//             <td CLASS = "R2">
//             <select id="country" name="country">
//               <option value="usa">USA</option>
//               <option value="canada">Canada</option>
//               <option value="uk">UK</option>
//               <option value="australia">India</option>
//               <option value="germany">Germany</option>
//              </select>
//             </td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">COMMENTS</td>
//             <td CLASS = "R2">
//                <textarea placeholder='Type your comments'></textarea>
//             </td>
//           </tr>
//           <tr></tr>
//         </table>
//         <button>SUBMIT</button>
//       </form>
//     </div>
//   )
// }



import ClassCom from "./COMPONENT/ClassCom";
import FunctionalCom from "./COMPONENT/FunctionalCom";
import OneExport from "./COMPONENT/OneExport";
export default function App() {
  return (
    <div>
      <FunctionalCom/>
      <FunctionalCom/>
      <ClassCom/>
      <OneExport/>
    </div>
  )
}
