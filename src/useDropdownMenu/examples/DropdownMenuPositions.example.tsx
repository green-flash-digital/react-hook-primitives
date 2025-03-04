// import { css } from "@linaria/core";
// import { useMemo, useState } from "react";

// import type { DropdownOptionPosition } from "#/useDropdown/index.js";

// import { DropdownMenu } from "../DropdownMenu.js";
// import { useDropdownMenu } from "../dropdown-menu.useDropdownMenu.js";

// const menuClassName = css`
//   opacity: 0;
//   border: none;
//   transform: scale(0.9);
//   filter: drop-shadow(3px 8px 28px rgba(130, 130, 130, 0.3));
//   border-radius: 0.5rem;
//   padding: 0;
//   width: 200px;

//   /* Animation for appearing */
//   @keyframes appear {
//     from {
//       opacity: 0;
//       transform: scale(0.9);
//     }
//     to {
//       opacity: 1;
//       transform: scale(1);
//     }
//   }

//   /* Animation for disappearing */
//   @keyframes disappear {
//     from {
//       opacity: 1;
//       transform: scale(1);
//     }
//     to {
//       opacity: 0;
//       transform: scale(0.9);
//     }
//   }

//   &.open {
//     animation: appear 0.15s forwards;
//   }

//   &.close {
//     animation: disappear 0.15s forwards;
//   }

//   ul {
//     padding: 0;
//     margin: 0;
//     padding: 0.5rem 0;
//     li {
//       padding: 0;
//       list-style-type: none;
//       margin: 0;
//       &:not(:last-child) {
//         border-bottom: 1px solid rgba(239, 239, 239, 0.5);
//       }

//       button {
//         height: 3rem;
//         padding: 0 1rem;
//         background: white;
//         transition: all 0.25s ease-in-out;
//         border: 0;
//         width: 100%;
//         text-align: left;
//         font-family: "Source Sans 3";

//         &:hover {
//           background: rgba(130, 253, 42, 0.3);
//         }
//         &:active {
//           background: rgba(130, 253, 42, 1);
//         }
//       }
//     }
//   }
// `;
// export default () => {
//   const [position, setPosition] =
//     useState<DropdownOptionPosition>("top-center");
//   const positions = useMemo<DropdownOptionPosition[]>(
//     () => [
//       "bottom-center",
//       "bottom-left",
//       "bottom-right",
//       "left-bottom",
//       "left-middle",
//       "left-top",
//       "right-bottom",
//       "right-middle",
//       "right-top",
//       "top-center",
//       "top-left",
//       "top-right",
//     ],
//     []
//   );
//   const { targetProps, dropdownProps } = useDropdownMenu({
//     dxPosition: position,
//     dxArrow: {
//       size: 16,
//       color: "#fff",
//     },
//   });

//   return (
//     <>
//       <label>
//         <div>Select a position</div>
//         <select
//           defaultValue={position}
//           name="select-position"
//           onChange={({ currentTarget: { value } }) =>
//             setPosition(value as DropdownOptionPosition)
//           }
//         >
//           {positions.map((position) => (
//             <option key={position} value={position}>
//               {position}
//             </option>
//           ))}
//         </select>
//       </label>
//       <br />
//       <button {...targetProps}>Toggle dropdown menu</button>
//       <DropdownMenu {...dropdownProps} className={menuClassName}>
//         <ul>
//           <li>
//             <button type="button">Print</button>
//           </li>
//           <li>
//             <button type="button">Send</button>
//           </li>
//           <li>
//             <button type="button">Forward</button>
//           </li>
//           <li>
//             <button type="button">Delete</button>
//           </li>
//         </ul>
//       </DropdownMenu>
//     </>
//   );
// };
