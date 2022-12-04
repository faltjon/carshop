import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

{/* export default function Addcar({addCar}) */} 
export default function Addcar(props) {


const [open, setOpen] = React.useState(false);
const [car, setCar] = React.useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    year:'',
    price: ''

});

const handleClickOpen = () => {
    console.log("Handleclick openissa")
  setOpen(true);
};

const handleClose = () => {
console.log("handleClosessa, ")
   {/*} addCar(); */}
   props.addCar(car);

  setOpen(false);
};

const handleCancel = () => {
    console.log("painettiin cancel");
    setOpen(false);
}

const inputChanged = (event) => {
    console.log("yritetään tallentaa autoon arvoa")
    setCar({...car, [event.target.name] : event.target.value})
}


return (
    <div>
<Button variant="outlined" onClick={handleClickOpen}>
    Add car
</Button>

<Dialog open={open} onClose={handleClose}>
<DialogContent>
          <DialogContentText>
            Add new car
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            value={car.brand}
            label="Brand"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => inputChanged(e)}
          />
          <TextField
            margin="dense"
            name="model"
            value={car.model}
            label="Model"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
                    <TextField
            margin="dense"
            name="color"
            value={car.color}
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
                    <TextField
            margin="dense"
            name="fuel"
            value={car.fuel}
            label="Fuel"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
                    <TextField
            margin="dense"
            name="price"
            value={car.price}
            label="Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
                    <TextField
            margin="dense"
            name="year"
            value={car.year}
            label="Year"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
        </Dialog>
        </div>
        )
}

