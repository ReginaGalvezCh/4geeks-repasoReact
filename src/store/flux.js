const getState = ({ getStore, setStore }) => {
	return {
		store: {
            productList: [],
            brandList: [],
            shopList: []
		},
		actions: {

            getProducts: async () => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				 const response = await fetch(
				 	"http://localhost:3001/products",
				 	config 
                 );
               
				const json = await response.json();
				setStore({ productList: json });
			},
			
		}
	};
};

export default getState;
