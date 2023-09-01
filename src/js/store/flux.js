const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
        {
          address: "47568 NW 34ST, 33434 FL, USA",
          agenda_slug: "celu",
          email: "rosa@gmail.com",
          full_name: "rosana",
          id: 54020484048,
          phone: "04120173072"
        },
        {
          address: "filadelfia",
          agenda_slug: "celu",
          email: "mombola@gmail.com",
          full_name: "rafael",
          id: 9143216526,
          phone: "042423231"
        },
        {
          address: "araguaney",
          agenda_slug: "celu",
          email: "mani@gmail.com",
          full_name: "ElMani",
          id: 1944156195,
          phone: "112631"
        },
        {
          address: "india",
          agenda_slug: "celu",
          email: "gordo@gmail.com",
          full_name: "gordo",
          id: 12341356195,
          phone: "04124612381"
        }
      ]
        .sort((a, b) => {
          return a.full_name.localeCompare(b.full_name);
        })
        .map(contact => {
          const firstNameLetter = contact.full_name.charAt(0).toUpperCase();
          const restOfName = contact.full_name.slice(1).toLowerCase();
          const firstAddressLetter = contact.address.charAt(0).toUpperCase();
          const restOfAddress = contact.address.slice(1).toLowerCase();
          const email = contact.email.toLowerCase();
          return {
            ...contact,
            full_name: firstNameLetter + restOfName,
            address: firstAddressLetter + restOfAddress,
            email: email
          };
        })
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
