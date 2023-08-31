const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
        {
          contactName: "Gordo",
          contactAddress: "Caracas",
          contactPhone: "1231234123",
          contactEmail: "roasd@gmail.com"
        },
        {
          contactName: "Rolando",
          contactAddress: "Guayaquil",
          contactPhone: "0424123123",
          contactEmail: "rolando@gmail.com"
        }
      ]
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
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire contacts array to look for the respective index
        //and change its color
        const contacts = store.contacts.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ contacts: contacts });
      }
    }
  };
};

export default getState;
