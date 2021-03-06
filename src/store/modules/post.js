const nameLS = {
    dataPosts:'myPosts'
}

export default {
    actions: {
        async fetchPosts({commit}, limit = 3) {
            const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            const posts = await res.json()
            commit('updatePosts', posts)
            }
    },
    mutations: {
        updatePosts(state, posts) {
            if(window.localStorage.getItem(nameLS.dataPosts) == null || window.localStorage.getItem(nameLS.dataPosts) === null) {
                state.posts = posts
            } else {
                state.posts = JSON.parse(window.localStorage.getItem(nameLS.dataPosts))
            }
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
            window.localStorage.setItem(nameLS.dataPosts, JSON.stringify(state.posts))
        }
    },
    state: {
        posts: []
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },
        postsCount(state, getters) {
            return getters.validPosts.length
        }
    }
}