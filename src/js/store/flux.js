const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		characters: [], // Lista de personajes
		planets: [], // Lista de planetas
		vehicles: [], // Lista de vehículos
		details: null, // Detalles del elemento seleccionado
		favorites: [], // Lista de favoritos
	  },
	  actions: {
		// Cargar datos de la API de Star Wars
		loadStarWarsData: async () => {
		  try {
			const [charactersRes, planetsRes, vehiclesRes] = await Promise.all([
			  fetch("https://www.swapi.tech/api/people"), // Personajes
			  fetch("https://www.swapi.tech/api/planets"), // Planetas
			  fetch("https://www.swapi.tech/api/vehicles"), // Vehículos
			]);
  
			const characters = await charactersRes.json();
			const planets = await planetsRes.json();
			const vehicles = await vehiclesRes.json();
  
			setStore({
			  characters: characters.results || [],
			  planets: planets.results || [],
			  vehicles: vehicles.results || [],
			});
		  } catch (error) {
			console.error("Error loading Star Wars data:", error);
		  }
		},
  
		// Obtener detalles de un elemento específico
		loadDetails: async (type, id) => {
		  try {
			const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
			const data = await response.json();
  
			setStore({ details: data.result || null });
		  } catch (error) {
			console.error(`Error loading ${type} details for ID ${id}:`, error);
		  }
		},
  
		// Agregar a favoritos
		addFavorite: item => {
		  const store = getStore();
		  setStore({
			favorites: [...store.favorites, item]
		  });
		},
  
		// Eliminar de favoritos
		removeFavorite: index => {
		  const store = getStore();
		  setStore({
			favorites: store.favorites.filter((_, i) => i !== index)
		  });
		},
  
		// Ejemplo de acción para cambiar color en un elemento de demo
		changeColor: (index, color) => {
		  const store = getStore();
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  setStore({ demo: demo });
		},
	  },
	};
  };
  
  export default getState;  