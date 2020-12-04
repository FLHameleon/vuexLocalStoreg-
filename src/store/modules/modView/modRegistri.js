const nameLS = {
    dataName:'modRegistri'
}

export default {
    actions: {},
    mutations: {
        upDateModRegistri(state, newObj) { // добарвение объекта с данными в LS
            state.modRegistris = JSON.parse(window.localStorage.getItem(nameLS.dataName))
            state.modRegistris.unshift(newObj)
            window.localStorage.setItem(nameLS.dataName, JSON.stringify(state.modRegistris))
        }
    },

    state: {
        modRegistris: []
    },

    getters: {}
}