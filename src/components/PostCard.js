// import React, { useState } from "react";
// import axios from "axios";
// import { EditOutlined } from "@ant-design/icons";
//
// const PostCard = (props) => {
//   const [edit, setEdit] = useState(props.product);
//
//   const handleChange = (e) => {
//     setEdit({ ...edit, [e.target.name]: e.target.value });
//   };
//
//   const [modal, setModal] = useState(false);
//
//   const remove = (id) => {
//     axios.delete(`/api/workouts/${id}`).then((res) => {
//       props.fetchData();
//     });
//   };
//
//   return (
//     <>
//       <div className="content">
//         <div className="card" key={props.product._id}>
//           <h2>
//             Title:<strong> {props.product.title}</strong>
//           </h2>
//           <h3>Load :{props.product.load} (kg)</h3>
//           <h3>Reps :{props.product.reps}</h3>
//           <div>
//             <button
//               onClick={() => remove(props.product._id)}
//               className=" btn-danger"
//             >
//               Delete
//             </button>
//             <EditOutlined className="edit" onClick={() => setEdit(!edit)} />
//           </div>
//         </div>
//       </div>
//
//       <div>
//         <form>
//           <input
//             type="text"
//             name="title"
//             value={edit.title}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="load"
//             value={edit.load}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="reps"
//             value={edit.reps}
//             onChange={handleChange}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };
//
// export default PostCard;
