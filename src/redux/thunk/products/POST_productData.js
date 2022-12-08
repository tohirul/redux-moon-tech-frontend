import { addProduct } from "../../actions/productAction";

const POST_productData = (product) => {
	return async (dispatch, getState) => {
		const res = await fetch(
			"http://localhost:5000/upload_product_details",
			{
				method: "POST",
				body: JSON.stringify(product),
				headers: { "Content-type": "application/json" },
			}
		);
		const data = await res.json();
		if (data.result.acknowledged) {
			dispatch(
				addProduct({
					_id: data.result.insertedId,
					...product,
				})
			);
		}
	};
};

export default POST_productData;

/* 

 {
			"model": "",
    "image": "https://live.staticflickr.com/65535/52522584794_4a9898a992_o.jpg",
    "status": true,
    "brand": "amd",
    "keyFeature": [
      "Gigabyte B5000M DS3H AM8 AMD Micro ATX Motherboard",
      "PNY GeForce RTX 9070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card",
      "AMD RYZEN 11 6090X PROCESSOR",
      "160GB 64000MHz DDR8 RAM+ 128TB M.2 PCIe SSD"
    ],
    "price": 128200,
    "rating": 5,
    "spec": [
      {
        "processor": "AMD RYZEN 5 5600X PROCESSOR"
      },
      {
        "motherboard": "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard"
      },
      {
        "ram": "Corsair Vengeance LPX 16GB DDR4 DRAM 3200MHz RAM"
      },
      {
        "graphics": "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card"
      },
      {
        "storage": "Team MP33 128GB M.2 PCIe SSD Toshiba P300 1TB Desktop PC Internal Hard Drive"
      },
      {
        "casing": "Antec NX420 Mid Tower ARGB Gaming Case"
      },
      {
        "psu": "Antec CUPRUM STRIKE CSK 650W 80 Plus Bronze Power Supply"
      },
      {
        "cooler": "Gamdias Boreas M1-610 ARGB CPU Cooler"
      }
    ]
		}

*/