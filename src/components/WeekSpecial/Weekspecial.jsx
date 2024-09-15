import { Button } from "@mui/material";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import ItemCard from "../ItemCard/ItemCard";


const Weekspecial = () => {
    const navigate = useNavigate()
    const [menuItems,setmenuItems] = useState([])

    useEffect(() => {
      const fetchItems = async () => {
        const { data } = await axiosPublic("/menu");
        setmenuItems(data.slice(0,3));
      };
      fetchItems();
    }, []);
    console.log(menuItems)
    return (
      <div className="mt-24">
        <div className="max-w-7xl px-10 md:pl-20 mx-auto flex justify-between gap-6">
          <Header text={"Specials"} />
          <Button onClick={() => navigate("/order")} color="primary">
            Order online
          </Button>
        </div>

          <div className="flex justify-around flex-wrap max-w-7xl mx-auto mt-10">
            {menuItems.map((menuitem) => (
              <ItemCard key={menuitem._id} menuitem={menuitem} />
            ))}
          </div>
      </div>
    );
};

export default Weekspecial;