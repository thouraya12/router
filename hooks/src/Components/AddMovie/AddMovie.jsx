import React , {useState}from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';

const AddMovie = ({handleData}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[newMovie , setNewMovie]=useState({ })
    const handleChange=e=>{
        setNewMovie({...newMovie ,[e.target.name]: e.target.value })
    }
const handleSubmit =()=>{
handleData(newMovie)
handleClose()
}
return(
    <div>
   


  <>
    <Button variant="primary" onClick={handleShow}>
      AddMovie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> AddMovie</Modal.Title>
      </Modal.Header>

      <Modal.Body></Modal.Body>
      <FormControl type="text" placeholder="enter title" name="title" onChange = {handleChange}/>
      <FormControl type="text" placeholder="enter description" name="description"  onChange = {handleChange}/>
      <FormControl type="text" placeholder="enter posterUrl" name="posterUrl"  onChange = {handleChange}/>
      <FormControl type="number" placeholder="enter rating" name="rating"  onChange = {handleChange}/>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
</div>
);

};

export default AddMovie