import Dropdown from 'bootstrap/js/dist/dropdown';
import Modal from 'bootstrap/js/dist/modal';
// let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle = "tooltip"]'));
// let tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl){
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// });

const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
[...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl));

new Modal(document.querySelector('#exampleModal'), {
    backdrop: 'static'
});
// or
// const myModalAlternative = new bootstrap.Modal('#myModal', options)