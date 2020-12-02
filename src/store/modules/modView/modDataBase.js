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
            // console.log('0' ,state)
            // console.log('1' ,state.modDatas[0])
            // console.log('2' ,state.modDatas[1])
            // console.log('3' ,state.modDatas[2])
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