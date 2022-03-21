# VueJS Example

Vue merupakan front end javascript yang dibuat untuk membangun user interface sebuah website .

- Vue biasanya digunakan untuk membuat single-page apps yang berjalan di client, tetapi bisa juga digunakan untuk membuat fullstack applications melalui HTTP Request pada server backend. Vuejs populer dengan Node.js & Express (MEVN Stack)

- Vue juga bisa dijalankan dengan server-side dengan menggunakan SSR framework seperti NUXT.

Kenapa menggunakan VUE

- Create dynamic frontend apps & websites.
- Easy learning curve
- Easy to integrate with other projects
- Fast & lightweight
- Virtual DOM
- Extremely populer
- Great community

Sebelum mempelajari VueJS sebaiknya mempelajari terlebih dahulu

- JavaScript Fundamentals
- Async Programming
- Array Methods
- Fetch API
- NPM

->Penggunaan "State / Data"
-> Components bisa memiliki datanya sendiri yang mana bisa menentukan secara spesifik penerapan komponen dan dataapa yang akan ditampilkan.
->Vuex merupakan state manager yang digunakan untuk global state
->Options API vs Composition API

->VUE CLI
-Tools command line untuk membuat app Vue.

```
npm install -g @vue/cli
```

atau

```
yarn global add @vue/cli
```

## start create app

```
vue create my-app
```

atau

```
vue ui
```

# Step

1. Installation vue-cli

   `npm install -g vue-cli`

2. Installation Project

   `vue init webpack scotch-store`

format `vue init [template] [project-name]`

3. install package and running development
   `cd online-store`
   `npm install`
   `npm run dev`


---
# Vuejs-guides

- npm i -g @vue/cli
- vue install -g @vue/cli
- vue init webpack-simple appName
- npm install
- npm install vue-router --save
- npm install vuex --save
- npm install firebase
- VueRouter
- VueX

### untuk update

- npm update -g @vue/cli

  - VueX sebuah library untuk mengatur state management pattern.
  - VueX memusatkan state ke dalam satu global scope untuk aplikasi tersebut.
    - Thee Items
      - The Store: Creates the global state object
      - Mutations: change the state
      - Actions: commit mutations

- Props
- Property
  - Methods: layaknya method yang dibutton, memiliki parameter
  - Computed: return value tanpa memiliki parameter.
  - Filters
  - template
  - data:
  - data()

