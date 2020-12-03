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
            window.localStorage.setItem(nameLS.userLogin, myData.myData.dannieEmail)
            state.login = myData.myData.dannieEmail
            window.localStorage.setItem(nameLS.userPassword, myData.myData.danniePassword)
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
            console.log('vse dannie', allData)
            allData.forEach(element => {
                // console.log('login ',element.myData.dannieEmail)
                // console.log('parol ',element.myData.danniePassword)
                if(state.login == element.myData.dannieEmail && state.password == element.myData.danniePassword) {
                    state.login = ''
                    state.password = ''
                    isFlaf32 = true
                }  
            });


            if(isFlaf32) {
                console.log('yes')
                return true
            }
            // if(state.login == 'admin@gmail.com' && state.password == 'admin') {
            //     // state.login = ''
            //     // state.password = ''
            //     return true
            // }

            console.log('no')
        return false
        }
    }
}