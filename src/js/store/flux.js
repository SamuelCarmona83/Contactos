const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
        {
          address: "47568 NW 34ST, 33434 FL, USA",
          agenda_slug: "celu",
          email: "rola@gmail.com",
          full_name: "rolando",
          id: 54020484048,
          phone: "0424"
        },
        {
          address: "filadelfia",
          agenda_slug: "celu",
          email: "asdfsd@gmail.com",
          full_name: "jaun",
          id: 9143216526,
          phone: "042423231"
        },
        {
          address: "araguaney",
          agenda_slug: "celu",
          email: "miaud@gmail.com",
          full_name: "mias",
          id: 1944156195,
          phone: "112631"
        },
        {
          address: "gordo",
          agenda_slug: "celu",
          email: "gordo@gmail.com",
          full_name: "gordo",
          id: 12341356195,
          phone: "04124612381"
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
