const nameLS = {
    userLogin:'userLogin',
    userPassword:'userPassword'
}
export default {
    actions: {
        fetchStartInDBase(myctx) {
            const res = ''
            myctx.commit('startInDBase', res)
        }
    },
    mutations: {
        startInDBase(state, res) {
            state.login = ''
        },
        checkData(state, myData) {
            state.login = myData.myData.dannieEmail
            state.password = myData.myData.danniePassword
        }
    },
    state: {
        login: '',
        password: '',

    },
    getters: {
        allModRezault(state) {
            let allData
            let isFlaf32 = false

            allData = JSON.parse(window.localStorage.getItem('modRegistri'))
            allData.forEach(element => {
                if(state.login == element.myData.dannieEmail && state.password == element.myData.danniePassword) {
                    state.login = ''
                    state.password = ''
                    isFlaf32 = true
                }  
            });


            if(isFlaf32) {
                return true
            }
            
        return false
        }
    }
}