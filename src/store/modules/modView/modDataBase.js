const nameLS = {
    modsData: ['modReceiptLK', 'modReceiptReport', 'modReceiptFine']
}

export default {
    actions: {
        fetchModDatas({commit}) { // кастыль надо чтомы запускало сразу мутацию
            const modDatas = []
            commit('startModDatas', modDatas) // запуск мутации заливки стартовых данных
        }
    },
    mutations: {
        startModDatas(state, modDatas) { // стартовое заполнение
            if(window.localStorage.getItem('modReceiptLK') == null || window.localStorage.getItem('modReceiptLK') === null) {
                state.modDatas = modDatas
            } else {
                nameLS.modsData.forEach(elem => state.modDatas.unshift(JSON.parse(window.localStorage.getItem(elem))))
            }
        }
    },

    state: {
        modDatas: []
    },
    getters: {
        allModDatas(state) { // вывод всех данных
            return state.modDatas
        }
    }
}