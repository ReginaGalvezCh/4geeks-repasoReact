// const urlAPI = 'https://3001-ba220300-3d3c-4573-83ff-47ec6566b625.ws-us02.gitpod.io';
const urlAPI = 'http://localhost:3001';

const getState = ({ getStore, setStore }) => {
	return {
		store: {
            productList: [],
            brandList: [],
            shopList: [],
			featuredList: [],
		},
		actions: {
			getFeatured: async () => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
                const response = await fetch(
					`${urlAPI}/featured`,
					config
				);
				const json = await response.json();
				setStore({ featuredList: json });
			},
            getProducts: async () => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				// const response = await fetch(
				// 	"http://localhost:3001/products",
				// 	config
                // );
                const response = await fetch(
					"https://3001-ba220300-3d3c-4573-83ff-47ec6566b625.ws-us02.gitpod.io/products",
					config
				);
				const json = await response.json();
				setStore({ productList: json });
			},
			getBrands: async () => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(
					`${urlAPI}/marcas`,
					config
				);
				const json = await response.json();
				setStore({ brandList: json });
			},
		}
	};
};

export default getState;
