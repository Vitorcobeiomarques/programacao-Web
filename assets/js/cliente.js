document.addEventListener('DOMContentLoaded', function () {
    const propertyList = document.getElementById('propertyList');
    const interestsList = document.getElementById('interestsList');
    const scheduledVisitsList = document.getElementById('scheduledVisitsList');

    const propertyDatabase = [
        { id: 1, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_1.jpg', description: 'Descrição do Imóvel 1', location: 'Centro' ,price: 'R$100,10' },
        { id: 2, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_2.jpg', description: 'Descrição do Imóvel 2', location: 'Centro' ,price: 'R$200,20' },
        { id: 3, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_3.jpg', description: 'Descrição do Imóvel 3', location: 'Centro' ,price: 'R$300,30' },
        { id: 4, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_4.jpg', description: 'Descrição do Imóvel 4', location: 'Centro' ,price: 'R$400,40' },
        { id: 5, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_5.jpg', description: 'Descrição do Imóvel 5', location: 'Centro' ,price: 'R$500,50' },
        { id: 6, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_6.jpg', description: 'Descrição do Imóvel 6', location: 'Centro' ,price: 'R$600,60' },
        { id: 7, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_7.jpg', description: 'Descrição do Imóvel 7', location: 'Centro' ,price: 'R$700,70' },
        { id: 8, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_8.jpg', description: 'Descrição do Imóvel 8', location: 'Centro' ,price: 'R$800,80' },
        { id: 9, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_9.jpg', description: 'Descrição do Imóvel 9', location: 'Centro' ,price: 'R$900,90' },
        { id: 10, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_10.jpg', description: 'Descrição do Imóvel 10', location: 'Centro' ,price: 'R$1000,00' },
        { id: 11, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_11.jpg', description: 'Descrição do Imóvel 11', location: 'Centro' ,price: 'R$1100,10' },
        { id: 12, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_12.jpg', description: 'Descrição do Imóvel 12', location: 'Centro' ,price: 'R$1200,20' },
    ];

    const addedInterests = new Set();
    const addedVisits = new Set();

    // Inicializa a lista de imóveis disponíveis
    propertyDatabase.forEach(property => {
        const propertyDiv = createPropertyElement(property);
        propertyList.appendChild(propertyDiv);
    });

    window.addToInterestList = function (propertyId) {
        if (!addedInterests.has(propertyId)) {
            const property = getPropertyById(propertyId);

            if (property) {
                const propertyCard = createPropertyCard(property);
                interestsList.appendChild(propertyCard);

                addedInterests.add(propertyId);
            }
        }
    };

    window.scheduleVisit = function (propertyId) {
        if (!addedVisits.has(propertyId)) {
            const property = getPropertyById(propertyId);

            if (property) {
                const propertyCard = createPropertyCard(property);
                scheduledVisitsList.appendChild(propertyCard);

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
        
        const propertyInfo = document.createElement('div');
        propertyInfo.classList.add('property-info');
        propertyDiv.appendChild(propertyInfo)

        const headingElement = document.createElement('h3');
        headingElement.textContent = property.type;
        propertyInfo.appendChild(headingElement);

        const locationElement = document.createElement('p');
        locationElement.classList.add('location');
        locationElement.textContent = property.location;
        propertyInfo.appendChild(locationElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = property.description;
        propertyInfo.appendChild(descriptionElement);

        const priceElement = document.createElement('p');
        priceElement.classList.add('price');
        priceElement.textContent = `Valor do Imóvel: ${property.price}`;
        propertyInfo.appendChild(priceElement);

        const addButton = document.createElement('button');
        addButton.textContent = '+ Lista de Interesse';
        addButton.addEventListener('click', function () {
            addToInterestList(property.id);
        });
        propertyInfo.appendChild(addButton);

        const scheduleButton = document.createElement('button');
        scheduleButton.textContent = 'Agendar Visita';
        scheduleButton.addEventListener('click', function () {
            scheduleVisit(property.id);
        });
        propertyInfo.appendChild(scheduleButton);

        return propertyDiv;
    }

    function createPropertyCard(property) {
        const listCard = document.createElement('div');
        listCard.classList.add('property-card');

        const imageElement = document.createElement('img');
        imageElement.src = property.image;
        imageElement.alt = `Imagem de ${property.type}`;
        listCard.appendChild(imageElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `${property.type} - ${property.location} - ${property.price}`;
        listCard.appendChild(descriptionElement);

        return listCard;
    }

    function getPropertyById(propertyId) {
        return propertyDatabase.find(property => property.id === propertyId);
    }
});
