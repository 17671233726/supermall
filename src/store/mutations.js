import {
    ADD_COUNTER,
    ADD_TO_CART,
    CHANGE_CHECKED,
    SELECT_ALL,
    SELECT_NOT_ALL
} from "./mutation-types"
export default {
    [ADD_COUNTER](state, payload) {
        payload.oldProduct.counter += payload.counter
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true;
        state.cartList.push(payload)
    },
    [CHANGE_CHECKED](state, payload) {
        let cartList = state.cartList;
        cartList.forEach(item => {
            if (item.iid == payload.iid) {
                item.checked = !item.checked;
            }
        })
    },
    [SELECT_ALL](state) {
        state.cartList.forEach(v => {
            v.checked = true;
        })
    },
    [SELECT_NOT_ALL](state) {
        state.cartList.forEach(v => {
            v.checked = false;
        })
    }
}