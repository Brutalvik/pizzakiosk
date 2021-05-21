import { makeAutoObservable } from "mobx";

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    cart = {
        
    }
}

export const store = window.Store = new Store()