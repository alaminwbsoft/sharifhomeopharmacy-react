// import { useState } from "react";

// const Navbar = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const menuItems = [
//     {
//       title: "Product of Zoha Homeo Hall",
//       dropdown: [
//         "Option 1",
//         "Option 2",
//         "Option 3",
//         "Option 4",
//         "Option 5",
//         "Option 6",
//       ],
//     },
//     {
//       title: "DILUTIONS & POTENCIES",
//       dropdown: [
//         "Regular Biochemic",
//         "Biochemic Combination",
//         "Biochemics (Sealed Pack)",
//       ],
//     },
//     {
//       title: "MOTHERTINCTURES",
//       dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"],
//     },
//     {
//       title: "BIOCHEMICS",
//       dropdown: [
//         "Regular Biochemic",
//         "Biochemic Combination",
//         "Biochemics (Sealed Pack)",
//       ],
//     },
//     {
//       title: "SPECIAL ITEMS",
//       dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"],
//     },
//     {
//       title: "PRODUCTS",
//       dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"],
//     },
//     {
//       title: "DOCTOR'S DIARY",
//       dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"],
//     },
//   ];

//   return (
//     <div className="relative flex justify-center bg-gray-100 border-b w-full max-w-screen-xl mx-auto">
//       {menuItems.map((item, index) => (
//         <div
//           key={index}
//           className="relative px-4 py-2 border-l-2 border-r-2 cursor-pointer text-gray-700 hover:bg-primary hover:text-white"
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <span className="font-semibold" title={item.title}>
//             {item.title}
//           </span>
//           {hoveredIndex === index && (
//             <ul className="absolute left-0 top-full mt-0 bg-white shadow-md border-t w-full  z-50 flex flex-wrap p-4">
//               {item.dropdown.map((option, idx) => (
//                 <li
//                   key={idx}
//                   className="w-full px-4 py-2 hover:bg-gray-200 cursor-pointer text-primary"
//                 >
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Navbar;

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className=" flex justify-center">
        <ul className="flex divide-x divide-slate-300">
          <li className="text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3  cursor-pointer">
            ZOHA HOMEO HALL
          </li>
          <li className="text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3 cursor-pointer">
            DILUTIONS & POTENCIES
          </li>
          <li className="text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3  cursor-pointer">
            MOTHERTINCTURES
          </li>
          <li className="text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3  cursor-pointer">
            BIOCHEMICS
          </li>
          <li className="text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3  cursor-pointer">
            SPECIAL ITEMS
          </li>
          <li className="text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3  cursor-pointer">
            PRODUCTS
          </li>
          <li className="text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3  cursor-pointer">
            DOCTOR'S DIARY
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
