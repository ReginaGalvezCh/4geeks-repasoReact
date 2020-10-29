const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			pokemonesList: [],
			userList: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			fetchPokemones: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				const additionalSettings ={
					"headers": {
					"method": "GET",
					"Content-Type": "application/json",
					// "body": JSON.stringify(someObject)
					}
				}
				const res = await fetch(
					"https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
					additionalSettings
				)
				const json = await res.json();
				console.log('-json-', json);

				// const dataResul = await res
				// const data = await dataResul.resul;

				// const json = await res.json();
				// const data = json.data;
				// console.log('-fetchUser-', dataResul);

		
			setStore({ pokemonesList: json.results });

			},
			fetchUsers: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				const additionalSettings ={
					"headers": {
					"method": "GET",
					"Content-Type": "application/json",
					// "body": JSON.stringify(someObject)
					}
				}
				const res = await fetch(
					"https://reqres.in/api/users?page=2",
					additionalSettings
				);

				const json = await res.json();
				const data = json.data;
				console.log('-fetchUser-', data);

		
			setStore({ userList: data });

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
