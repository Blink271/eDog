import { useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);
  const [amount, setAmount] = useState(4);

  const fetchDogs = async () => {
    try {
      const res = await fetch(`https://dog.ceo/api/breeds/image/random/${amount}`);
      const data = await res.json();
      setImages((pre) => [...pre, ...data.message]);
    } catch (error) {
      console.error("Error fetching dog images:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <input
          type="number"
          min={1}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={fetchDogs} className="bg-blue-500 text-white px-4 py-2 rounded">LOAD</button>
        <button onClick={() => setImages([])} className="bg-pink-500 text-white px-4 py-2 rounded">CLEAR</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="border rounded-lg p-2 shadow-md">
            <img src={img} alt="Dog" className="w-full h-48 object-cover rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
