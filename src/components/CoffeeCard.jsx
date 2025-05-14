import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ data, allCoffee, setAllCoffee }) => {
  const { _id, photo, name, price, quantity } = data;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //deleting from database
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = allCoffee.filter(
                (coffee) => coffee._id !== id
              );
              setAllCoffee(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm border-2 flex justify-between items-center p-4">
      <figure>
        <img src={photo} alt="Coffee" />
      </figure>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg font-medium">Quantity : {quantity}</p>
        <p className="text-lg font-medium">Price : {price}</p>
      </div>

      <div className="card-actions">
        <div className="join join-vertical space-y-4">
          <Link to={`/coffee/${_id}`}>
            <button className="btn join-item">View</button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
