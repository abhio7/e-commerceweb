
const saveData = require('./app');

test("Testing save item in local storage", () => {
    try {
        saveData("furniture1_test", "test_products");
        const data = localStorage.getItem('test_products');
        expect(data).toBe("furniture1_test");
    } catch (error) {
        data(error);
    }
})