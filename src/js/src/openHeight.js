'use strict';

const mainDescriptionButton = document.querySelector('.main__description-button');
const repairedBrandsButton = document.querySelector('.repaired-brands__drop-button');
const repairEquipmentButton = document.querySelector('.repair-equipment__drop-button');

const mainDescription = document.querySelector('.main__description');
const repairedBrands = document.querySelector('.repaired-brands__wrapper');
const repairEquipment = document.querySelector('.repair-equipment__wrapper');

function descriptionShow() {

    if ( mainDescription.classList.contains('main_hidden') ) {

        this.textContent = 'Скрыть';
        mainDescription.classList.toggle('main_hidden');
        mainDescription.classList.toggle('main__description_scrollbar');
    }
    else {
        this.textContent = 'Читать далее';
        mainDescription.classList.toggle('main_hidden');
        mainDescription.classList.toggle('main__description_scrollbar');
    }
}

function openBrandsList() {

    if (repairedBrands.classList.contains('hidden_height') ) {

        this.textContent = 'Скрыть';
        repairedBrands.classList.toggle('hidden_height');
    }
    else {
        repairedBrands.classList.toggle('hidden_height');
        this.textContent = 'Показать всё';
    }
}

function openRepairEquipment() {

    if ( repairEquipment.classList.contains('hidden_height') ) {

        this.textContent = 'Скрыть';
        repairEquipment.classList.toggle('hidden_height');
    }
    else {
        this.textContent = 'Показать всё';
        repairEquipment.classList.toggle('hidden_height');
    }
}

mainDescriptionButton.addEventListener('click', descriptionShow);
repairedBrandsButton.addEventListener('click', openBrandsList);
repairEquipmentButton.addEventListener('click', openRepairEquipment);

export { mainDescriptionButton, repairedBrandsButton, repairEquipmentButton  }