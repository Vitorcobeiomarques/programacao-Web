document.addEventListener('DOMContentLoaded', function () {
    const propertyList = document.getElementById('propertyList');
    const interestsList = document.getElementById('interestsList');
    const scheduledVisitsList = document.getElementById('scheduledVisitsList');

    const propertyDatabase = [
        { id: 1, type: 'Casa', image: 'caminho_da_imagem1.jpg', description: 'Descrição do Imóvel 1', location: 'Centro' ,price: 'R$100,10' },
        { id: 2, type: 'Apartamento', image: 'caminho_da_imagem2.jpg', description: 'Descrição do Imóvel 2', location: 'Centro' ,price: 'R$200,20' },
        { id: 3, type: 'Casa', image: 'caminho_da_imagem3.jpg', description: 'Descrição do Imóvel 3', location: 'Centro' ,price: 'R$300,30' },
        { id: 4, type: 'Apartamento', image: 'caminho_da_imagem4.jpg', description: 'Descrição do Imóvel 4', location: 'Centro' ,price: 'R$400,40' },
        { id: 5, type: 'Casa', image: 'caminho_da_imagem5.jpg', description: 'Descrição do Imóvel 5', location: 'Centro' ,price: 'R$500,50' },
        { id: 6, type: 'Apartamento', image: 'caminho_da_imagem6.jpg', description: 'Descrição do Imóvel 6', location: 'Centro' ,price: 'R$600,60' },
        { id: 7, type: 'Casa', image: 'caminho_da_imagem7.jpg', description: 'Descrição do Imóvel 7', location: 'Centro' ,price: 'R$700,70' },
        { id: 8, type: 'Apartamento', image: 'caminho_da_imagem8.jpg', description: 'Descrição do Imóvel 8', location: 'Centro' ,price: 'R$800,80' },
        { id: 9, type: 'Casa', image: 'caminho_da_imagem9.jpg', description: 'Descrição do Imóvel 9', location: 'Centro' ,price: 'R$900,90' },
        { id: 10, type: 'Apartamento', image: 'caminho_da_imagem10.jpg', description: 'Descrição do Imóvel 10', location: 'Centro' ,price: 'R$1000,00' },
        { id: 11, type: 'Casa', image: 'caminho_da_imagem11.jpg', description: 'Descrição do Imóvel 11', location: 'Centro' ,price: 'R$1100,10' },
        { id: 12, type: 'Apartamento', image: 'caminho_da_imagem12.jpg', description: 'Descrição do Imóvel 12', location: 'Centro' ,price: 'R$1200,20' },
    ];
    
    const addedInterests = new Set();
    const addedVisits = new Set();

    propertyDatabase.forEach(property => {
        const propertyDiv = createPropertyElement(property);
        propertyList.appendChild(propertyDiv);
    });

    window.addToInterestList = function (propertyId) {
        if (!addedInterests.has(propertyId)) {
            const property = getPropertyById(propertyId);

            if (property) {
                const listItem = document.createElement('li');
                listItem.textContent = `${property.type} - ${property.description} - ${property.price}`;
                interestsList.appendChild(listItem);

                addedInterests.add(propertyId);
            }
        }
    };

    window.scheduleVisit = function (propertyId) {
        if (!addedVisits.has(propertyId)) {
            const property = getPropertyById(propertyId);

            if (property) {
                const listItem = document.createElement('li');
                listItem.textContent = `${property.type} - ${property.description}`;
                scheduledVisitsList.appendChild(listItem);

                addedVisits.add(propertyId);
            }
        }
    };

    function createPropertyElement(property) {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');
        propertyDiv.id = property.id;

        const imageElement = document.createElement('img');
        imageElement.src = property.image;
        imageElement.alt = `Imagem de ${property.type}`;
        propertyDiv.appendChild(imageElement);

        const headingElement = document.createElement('h3');
        headingElement.textContent = property.type;
        propertyDiv.appendChild(headingElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = property.description;
        propertyDiv.appendChild(descriptionElement);

        const locationElement = document.createElement('p');
        locationElement.textContent = `Localização: ${property.location}`;
        propertyDiv.appendChild(locationElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = `Valor do Imóvel: ${property.price}`;
        propertyDiv.appendChild(priceElement);

        const addButton = document.createElement('button');
        addButton.textContent = 'Adicionar à Lista';
        addButton.addEventListener('click', function () {
            addToInterestList(property.id);
        });
        propertyDiv.appendChild(addButton);

        const scheduleButton = document.createElement('button');
        scheduleButton.textContent = 'Agendar Visita';
        scheduleButton.addEventListener('click', function () {
            scheduleVisit(property.id);
        });
        propertyDiv.appendChild(scheduleButton);

        return propertyDiv;
    }

    function getPropertyById(propertyId) {
        return propertyDatabase.find(property => property.id === propertyId);
    }
});
