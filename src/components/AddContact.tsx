import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from '../store/actions/actionCreator';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/reducers/contactReducer';

const AddContact = () => {
  const contacts = useSelector( (state: RootState ) => state.contacts );
  const dispatch = useDispatch();

  const navigate = useNavigate()

  console.log(contacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = ( e: React.SyntheticEvent ) => {
    e.preventDefault();

    const checkEmail = contacts.find( contact => contact.email === email && email );
    const checkNumber = contacts.find( contact => contact.number === parseInt(number) && number );

    if (!name || !number || !email) {
      return toast.warning("Input field is empty!")
    }

    if (checkEmail) {
      return toast.error("This email already exists")
    }
    if (checkNumber) {
      return toast.error("This number already exists")
    }

    dispatch(addContact(name, parseInt(number), email));
    toast.success("Contact Added");

    navigate("/");
  }


  return <div className='container'>
  <div className="row my-5">
    <h1 className="display-3 text-center">
      Add Contact
    </h1>
    <div className="col-md-6 shadow mx-auto p-5">
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <input type="text" placeholder='Name' className="form-control" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <input type="email" placeholder='Email' className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <input type="number" placeholder='Phone number' className="form-control" value={number} onChange={e => setNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="submit" value="Add Contact" className="btn btn-block btn-dark" />
        </div>
      </form>
    </div>
  </div>
</div>;
};

export default AddContact;
