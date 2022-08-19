class healthBar {
    constructor(element, initialValue = 100) {
        this.fillElement = element.querySelector('#health-bar-fill');

        this.setValue(initialValue);
    }
    setValue (newValue) {
        if (newValue < 0) {
            newValue = 0;
        }
        if (newValue > 100) {
            newValue = 100;
        }

        this.value = newValue;
        this.update();
    }
}