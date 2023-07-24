const calc = (() => {
    
    const add = (x, y) => Number(x) + y;
    const sub = (x, y) => x - y;
    const pro = (x, y) => x * y;
    const div = (x, y) => x / y;
    
    return { add, sub, pro, div };
})();

export default calc;
