import {
    ADD_COUNTER,
    ADD_TO_CART,
    SELECT_ALL,
    SELECT_NOT_ALL
} from "./mutation-types"
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid == payload.iid && item.stockId == payload.stockId);
            if (oldProduct) {
                context.commit(ADD_COUNTER, { oldProduct, counter: payload.counter });
                resolve("商品数量+1")
            } else {
                context.commit(ADD_TO_CART, payload);
                resolve("加入购物车成功")
            }
        })
    },
    selectAll(context, params) {
        if (params) {
            context.commit(SELECT_ALL)
        } else {
            context.commit(SELECT_NOT_ALL)
        }
    }
}