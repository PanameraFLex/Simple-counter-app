function NoteInputForm() {
  return (
    <div className="container sticky-top ">
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea
          label="Note textarea"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Author</label>
        <input type="text" className="form-control" id="FormControlInput1" />
      </div>
    </div>
  );
}
export default NoteInputForm;
