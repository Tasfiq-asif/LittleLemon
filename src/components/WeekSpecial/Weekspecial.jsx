import CustomButton from "../CustomButton/CustomButton";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import ItemCard from "../ItemCard/ItemCard";

const Weekspecial = () => {
  const navigate = useNavigate();
  const [menuItems, setmenuItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axiosPublic("/menu");
        setmenuItems(data.slice(0, 3));
        // Now it will log when the data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900">Specials</h2>
          <CustomButton variant="primary" onClick={() => navigate("/order")}>
            Order online
          </CustomButton>
        </div>
        <div className="h-1 w-20 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Menu Items Section */}
      <div className="flex justify-around flex-wrap max-w-7xl mx-auto mt-10 gap-6 px-3">
        {menuItems.map((menuitem) => (
          <ItemCard key={menuitem._id} menuitem={menuitem} />
        ))}
      </div>
    </div>
  );
};

export default Weekspecial;
