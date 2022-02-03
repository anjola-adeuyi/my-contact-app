import React from 'react';

const AddContact = () => {
  return <div className='container'>
  <div className="row my-5">
    <h1 className="display-3 text-center">
      Add Contact
    </h1>
    <div className="col-md-6 shadow mx-auto p-5">
      <form>
        <div className="form-group">
          <input type="text" placeholder='Name' className="form-control" />
        </div>
        <div className="form-group my-2">
          <input type="email" placeholder='Email' className="form-control" />
        </div>
        <div className="form-group my-2">
          <input type="number" placeholder='Phone number' className="form-control" />
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
