const nameLS = {
    zagolovPost:'zagolovPost',
    TextPost:'TextPost'
}

export default {
    actions: {
        fetchStartPostfrmx(myctx) {
            const res = []
            res.push(window.localStorage.getItem(nameLS.zagolovPost))
            res.push(window.localStorage.getItem(nameLS.TextPost))

            myctx.commit('startZnah', res)
        }
    },
    mutations: {
        startZnah(state, res) {
            state.pole = res
        },
        updatePostFromx(state, saveData) {
            window.localStorage.setItem(nameLS.zagolovPost, saveData.poleOne)
            window.localStorage.setItem(nameLS.TextPost, saveData.poleTwo)
        }
    },
    state: {
        pole: []
    },
    getters: {
        postfromx(state) {
        return state
        }
    }
}