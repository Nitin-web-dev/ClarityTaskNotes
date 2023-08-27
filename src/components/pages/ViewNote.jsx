import React from "react";
import { useParams, NavLink ,useNavigate} from "react-router-dom";
import Layout from "../layout/Layout";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { viewNote } from "../../store/slices/UserSlice";
import { useDispatch } from "react-redux";
import { removeNote } from "../../store/slices/UserSlice";

const ViewNote = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const card = useSelector(state => {
    let data = viewNote(state, id)
       return data.payload.users[id]
  })
  const dispatch = useDispatch();

  const deleteNote = (payload) => {
 
    dispatch(removeNote(payload));
    navigator('/')

  }

  if (!card) {
    return <div>card not found</div>;
  }
  return (
    <Layout>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center align-middle flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <NavLink to='/' className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">
                Back
              </NavLink>
             
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
                {card.title}
              </h2>
              <p className="leading-relaxed mb-8">
               {card.desc}
              </p>
              <div className="flex items-center gap-3 flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                {/* <NavLink to={`/editcard/${id}`} className="text-indigo-400 inline-flex items-center">
                  Edit
                </NavLink> */}
                <button onClick={() => deleteNote(id)} className="text-indigo-400 inline-flex items-center">
                  Delete
                </button>

                
               
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ViewNote;
