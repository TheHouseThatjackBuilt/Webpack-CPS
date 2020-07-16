'use strict';

export const mainDescriptionButton = document.querySelector('.main__description-button');
export const repairedBrandsButton = document.querySelector('.repaired-brands__drop-button');
export const repairEquipmentButton = document.querySelector('.repair-equipment__drop-button');

export const mainDescription = document.querySelector('.main__description');
export const repairedBrands = document.querySelector('.repaired-brands__wrapper');
export const repairEquipment = document.querySelector('.repair-equipment__wrapper');

export function descriptionShow() {

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

export function openBrandsList() {

    if (repairedBrands.classList.contains('hidden_height') ) {

        this.textContent = 'Скрыть';
        repairedBrands.classList.toggle('hidden_height');
    }
    else {
        repairedBrands.classList.toggle('hidden_height');
        this.textContent = 'Показать всё';
    }
}

export function openRepairEquipment() {

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

