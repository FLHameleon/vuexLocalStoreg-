const nameLS = {
    dataName:'modRegistri'
}

export default {
    actions: {
        fetchModRegistri({commit}) { // кастыль надо чтомы запускало сразу мутацию
            const modRegistris = []
            commit('startModRegistri', modRegistris) // запуск мутании заливки стартовых данных
        }
    },
    mutations: {
        startModRegistri(state, modRegistris) { // стартовое заполнение
            if(window.localStorage.getItem(nameLS.dataName) == null || window.localStorage.getItem(nameLS.dataName) === null) {
                state.modRegistris = modRegistris
            } else {
                state.modRegistris = JSON.parse(window.localStorage.getItem(nameLS.dataName))
            }
        },
        upDateModRegistri(state, newObj) { // добарвение объекта с данными в LS
            state.modRegistris.unshift(newObj)
            window.localStorage.setItem(nameLS.dataName, JSON.stringify(state.modRegistris))
        }
    },

    state: {
        modRegistris: []
    },

    getters: {
        
        allModRegistri(state) { // вывод всех данных
            return state
        }
    }
}