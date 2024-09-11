import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import uploadImage from "../../utils/uploadImage";
import { axiosPublic } from "../../hooks/useAxiosPublic";


const AddItem = () => {

    const [foodName,setFoodName] = useState('')
    const [foodDescription,setFoodDescription] = useState('')
    const [foodPrice,setFoodPrice] = useState('')
    const [foodImage,setFoodImage] = useState(null)
    const [items,setItems] = useState([])
    const [editingItemId,setEditingItemId] = useState(null)

  const handleSubmit = async (e) =>{
    e.preventDefault();

    let imageUrl = "";

    //Upload image to imgbb if a new image is available

    if (foodImage) {
      imageUrl = await uploadImage(foodImage);
    }

    const newItem = {
      name: foodName,
      description: foodDescription,
      price: foodPrice,
      imageUrl,
    };

    if (!editingItemId) {
      axiosPublic.post("/menuitem", newItem);
    }
    // Reset form and refresh item list
    setFoodName("");
    setFoodDescription("");
    setFoodPrice("");
    setFoodImage(null);
    setEditingItemId(null);
  }

    return (
      <div>
        {/* Form */}
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 500,
            margin: "0 auto",
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            marginTop: 10
          }}
        >
          <Typography variant="h6" textAlign={"center"}>
            Add food item
          </Typography>
          <TextField
            label="Item Name"
            value={foodName}
            variant="outlined"
            onChange={(e) => setFoodName(e.target.value)}
            fullWidth
            required
          />

          <Typography variant="h6" textAlign={"center"}>
            Add food item
          </Typography>
          <TextField
            label="Item Description"
            value={foodDescription}
            variant="outlined"
            onChange={(e) => setFoodDescription(e.target.value)}
            multiline={true}
            rows={4}
            fullWidth
            required
          />

          <Typography variant="h6" textAlign={"center"}>
            Add food Price
          </Typography>
          <TextField
            label="Item Price"
            value={foodPrice}
            variant="outlined"
            type="number"
            onChange={(e) => setFoodPrice(e.target.value)}
            fullWidth
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoodImage(e.target.files[0])}
            required={!editingItemId} // Image upload is required when adding a new item
          />

          <Button variant="contained"  type="submit">
            { editingItemId ? 'Update item': 'Add item'}
          </Button>
        </Box>
      </div>
    );
};

export default AddItem;