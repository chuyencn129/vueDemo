import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    contacts: [
      {
        id: 0,
        firstName: "Anna",
        lastName: "Arletti",
        phoneNumber: "+91254896156",
        emailAddress: "testname1@textdomain.com"
      },
      {
        id: 1,
        firstName: "Acacia",
        lastName: "Alice ",
        phoneNumber: "+91123456789",
        emailAddress: "testname2@textdomain.com"
      },
      {
        id: 2,
        firstName: "Alex",
        lastName: "Anne",
        phoneNumber: "+91124326887",
        emailAddress: "testname3@textdomain.com"
      },
      {
        id: 3,
        firstName: "Adela",
        lastName: "Bush",
        phoneNumber: "+91154336899",
        emailAddress: "testname4@textdomain.com"
      },
      {
        id: 4,
        firstName: "Adelaide",
        lastName: "Joan",
        phoneNumber: "+91869548888",
        emailAddress: "testname5@textdomain.com"
      },
      {
        id: 5,
        firstName: "Bdelai",
        lastName: "Henry",
        phoneNumber: "+91147566666",
        emailAddress: "testname6@textdomain.com"
      },
    ]
  },
  getters: {
    getContact: (state) => (id: number) => {
      return state.contacts.find(e => e.id == id)
    },
    search: (state) => (strSearch: string) => {
      strSearch = strSearch.trim();

      if(!strSearch){
        return state.contacts;
      }

      return state.contacts.filter(e => {
        let temp = `${e.firstName} ${e.lastName} ${e.phoneNumber} ${e.emailAddress}`;
        temp = temp.trim();
        temp = temp.toLowerCase();
        return temp.includes(strSearch.toLowerCase());
      })
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addNew(state, data){
      data.id = state.contacts.length;
      state.contacts.push(data);
    },
    delete(state, id: number){
      state.contacts = state.contacts.filter(e => e.id != id);
    },
    update(state, data){
      const index = state.contacts.findIndex( e => e.id == data.id);
      if(index >= 0){
        state.contacts[index] = data;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
