import Contact from './Contact';

export default function Contacts() {
  return (
    <>
      <div className="container">
        <div className="card mt-2">
          <div className="card-header">
            <div className="card-title">
              <h1 className="text-primary">Contact App</h1>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <form className="d-flex justify-content-between mb-3">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter Contact name"
                />
                <input type="checkbox" class="mx-2" />
                <input
                  className="btn btn-primary mx-1"
                  type="submit"
                  value="Add Contact"
                />
              </form>
            </div>
            <h3 class="mb-4">Contacts</h3>
            {/* Add code below this line */}
            <h1>Pinned</h1>
            <Contact />
            <hr />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
