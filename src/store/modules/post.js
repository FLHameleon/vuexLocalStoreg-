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
            
            // localStorage.clear()

            if(window.localStorage.getItem('myPosts') == null || window.localStorage.getItem('myPosts') === null) {
                state.posts = posts
            } else {
                state.posts = JSON.parse(window.localStorage.getItem('myPosts'))
            }
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
            window.localStorage.setItem('myPosts', JSON.stringify(state.posts))
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
        // allPosts(state) {
        //     return state.posts
        // },
        postsCount(state, getters) {
            return getters.validPosts.length
        }
    }
}