import { Box, Button, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import uploadImage from "../../utils/uploadImage";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const AddItem = () => {

    const [foodName,setFoodName] = useState('')
    const [foodDescription,setFoodDescription] = useState('')
    const [foodPrice,setFoodPrice] = useState('')
    const [foodImage,setFoodImage] = useState(null)
    const [items,setItems] = useState([])
    const [editingItemId,setEditingItemId] = useState(null)
    const fileInputRef = useRef(null);

    const fetchItems = async ()=>{
        const {data}= await axiosPublic('/menu')
        setItems(data)
    }

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
      await axiosPublic.post("/menuitem", newItem);
    }
    // Reset form and refresh item list
    setFoodName("");
    setFoodDescription("");
    setFoodPrice("");
    setFoodImage(null);
    setEditingItemId(null);
    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    fetchItems();
  }

  useEffect(()=>{
    fetchItems();
  },[])

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
            marginTop: 10,
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
            onChange={(e) => setFoodPrice(Number(e.target.value))}
            fullWidth
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoodImage(e.target.files[0])}
            required={!editingItemId} // Image upload is required when adding a new item
            ref={fileInputRef}
          />

          <Button variant="contained" type="submit">
            {editingItemId ? "Update item" : "Add item"}
          </Button>
        </Box>

        {/* List of items */}
        <Box mt={4}>
          <Typography
            variant="h6"
            sx={{ mx: "auto", textAlign: "center", marginTop: 10 }}
          >
            All Food Item
          </Typography>
          {items.map((item) => (
            <Box
              key={item._id}
              sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
            >
              <img src={item.imageUrl} alt={item.name} width={50} height={50} />
              <Box>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body1">{item.description}</Typography>
                <Typography variant="body1">${item.price}</Typography>
              </Box>
              <Tooltip title="Edit">
                <IconButton onClick={() => handleEdit(item)} color="primary">
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => handleDelete(item._id)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          ))}
        </Box>
      </div>
    );
};

export default AddItem;