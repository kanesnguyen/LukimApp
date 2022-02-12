const formatMoney = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export {formatMoney}