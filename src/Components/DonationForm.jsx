import React, { useState } from 'react';
import { GiToaster } from 'react-icons/gi';


const DonationForm = () => {


    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Donation Data:", formData);
        alert("Donation submitted successfully!");
      };


    return (
        <div>
            
            <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
    <h2 className="text-3xl font-bold text-center mb-6">Donate Items</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Quantity Input */}
        <div className="w-full max-w-md mx-auto">
            <label className="block text-lg text-start font-semibold mb-1">Quantity</label>
            <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                placeholder="Enter quantity (e.g., 2)"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
            />
        </div>

        {/* Item Type Dropdown */}
        <div className="w-full max-w-md mx-auto">
            <label className="block text-lg text-start font-semibold mb-1">Item Type</label>
            <select
                name="itemType"
                value={formData.itemType}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
            >
                <option value="">Select an item</option>
                <option value="blanket">Blanket</option>
                <option value="jacket">Jacket</option>
                <option value="sweater">Sweater</option>
            </select>
        </div>

        {/* Pickup Location Input */}
        <div className="w-full max-w-md mx-auto">
            <label className="block text-lg text-start font-semibold mb-1">Pickup Location</label>
            <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Enter location (e.g., House 12, Road 5, Dhanmondi)"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
            />
        </div>

        {/* Additional Notes (Optional) */}
        <div className="w-full max-w-md mx-auto">
            <label className="block text-lg text-start font-semibold mb-1">Additional Notes</label>
            <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional details (optional)"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                rows="3"
            ></textarea>
        </div>

        {/* Submit Button */}
        <div className="w-full max-w-md mx-auto">
            <button
                type="submit"
                className="w-60 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
            >
                Submit Donation
            </button>
        </div>

    </form>
</div>



        </div>
    );
}
export default DonationForm;