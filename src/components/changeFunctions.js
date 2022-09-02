const changeStatusProg = (id, item, st) => {
    if (item.id === id) {
        item.status = "progress"
    } else {
        item.status = st
    }

    return item.status

}
const changeStatusCanc = (id, item, st) => {
    if (item.id === id) {
        item.status = "cancel"
    } else {
        item.status = st
    }

    return item.status

}
const changeStatusComp = (id, item, st) => {
    if (item.id === id) {
        item.status = "completed"
    } else {
        item.status = st
    }

    return item.status
}
const changeStatusRej = (id, item, st) => {

    if (item.id === id) {
        item.status = "reject"
    } else {
        item.status = st
    }

    return item.status
}
export { changeStatusCanc, changeStatusProg, changeStatusRej, changeStatusComp }