// import React,{useState} from "react";
// import {  useNavigate, useParams } from "react-router-dom";
// import Layout from "../layout/Layout";
// import {  useSelector } from "react-redux/es/hooks/useSelector";
// import { viewNote } from "../../store/slices/UserSlice";
// import { useDispatch } from "react-redux";



// const EditTask = () => {
//   const navigator = useNavigate();
//   const dispatch  = useDispatch();

//   const [newNoteData, setNewNoteData] = useState({

//     title: '',
//     desc: ''
//   });
//   const [noteTitle, setNoteTitle] = useState(title);
//   const [noteDesc, setNoteDesc] = useState(desc);
//   const { id } = useParams();
//   const card = useSelector(state => {
//     let data = viewNote(state, id)
//        return data.payload.users[id]
//   })
  
//   if(!card){
//     return <h1>data not found</h1>
//   }
//   const {title, desc} = card;


//   const  handleChange = (e) => {
//     const {name, value } = e.target;
//     setNewNoteData(val => ({...val, [name]: value}));
// }

// const saveCurrentNote = () => {

//     dispatch();

//   navigator('/');

// }

// const handleSubmit = (e) => {
//   e.preventDefault();

// }

//   return (
//     <Layout>

   
// <section className=" text-white body-font relative bg-gray-900">
//       <div className="container px-5 py-24 mx-auto ">
//         <div className="flex flex-col text-center w-full mb-12 ">
//           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
//             Add New Note 
//           </h1>
     
//         </div>
//         <div className="lg:w-1/2 md:w-2/3 mx-auto">
//           <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
//             <div className="p-2 w-full">
//               <div className="relative">
//                 <label
//                   htmlFor="name"
//                   className="leading-7 text-sm text-gray-300"
//                 >
//                   Title for Note
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="title"
//                   value={newNoteData.title || ''}
//                   onChange={(e) => handleChange(e)}
//                   className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//             </div>
       
//             <div className="p-2 w-full">
//               <div className="relative">
//                 <label
//                   htmlFor="message"
//                   className="leading-7 text-sm text-gray-300"
//                 >
//                   description of Note
//                 </label>
//                 <textarea
//                   id="message"
//                   name="desc"
//                   value={newNoteData.desc || ''}
//                   onChange={(e) => handleChange(e)}
//                   className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                   placeholder="enter task description"
//                 />
//               </div>
//             </div>
//             <div className="p-2 w-full">
//               <button type="submit" onClick={()=> saveCurrentNote()}className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 save
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </section>
//     </Layout>
//   );
// };

// export default EditTask;
