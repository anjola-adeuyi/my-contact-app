import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/reducers/contactReducer';

const Home = () => {
  const contacts = useSelector( (state: RootState ) => state.contacts );

  return <div className='container'>
    <div className="row">
      <div className="col-md-12 my-5 d-flex justify-content-end">
        <Link to="/add" className="btn btn-outline-dark"> Add Contact </Link>
      </div>
      <div className="col-md-10 mx-auto">
        <table className='table table-hover'>
          <thead className='text-white bg-dark text-center'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact: any, id: any) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary mx-2'>Edit</Link>
                    <button className='btn btn-small btn-danger my-2'>Delete</button>
                  </td>
                </tr>
              ) )
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>;
};

export default Home;
