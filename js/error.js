
export const AlertError = {
    alert: document.querySelector('.error'),
    activeAlert(){
        this.alert.classList.remove('desable');
    },
    desableAlert(){
        this.alert.classList.add('desable');
    }
}