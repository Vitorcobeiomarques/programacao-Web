document.addEventListener('DOMContentLoaded', function () {
    const propertyList = document.getElementById('propertyList');
    const interestsList = document.getElementById('interestsList');
    const scheduledVisitsList = document.getElementById('scheduledVisitsList');

    const propertyDatabase = [
        { id: 1, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_1.jpg', description: 'Apartamento na Vila Madalena, com 3 dormitórios, 1 vaga, salas para dois ambientes, 2 banheiros, cozinha completa com armários e acesso a área de serviço e com ótima área de lazer para as crianças.', location: 'Vila Madalena' ,price: 'R$300.000,00' },
        { id: 2, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_2.jpg', description: 'Apartamento na Chacára Santo Antônio, com 2 dormitórios, 1 vaga, sala de estar, 3 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Chacára Santo Antônio' ,price: 'R$289.000,00' },
        { id: 3, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_3.jpg', description: 'Apartamento no jardim Marajoara, com 3 dormitórios, 2 vagas, sala de estar, 3 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Jardim Marajoara' ,price: 'R$1.000.000,00' },
        { id: 4, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_4.jpg', description: 'Apartamento em Moema, com 1 dormitórios, 1 vaga, sala de estar, 1 banheiro, cozinha completa com armários e acesso a área de serviço', location: 'Moema' ,price: 'R$150.000,00' },
        { id: 5, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_5.jpg', description: 'Apartamento no Jardins, com 2 dormitórios, 2 vagas, sala de estar, 2 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Jardins' ,price: 'R$900.000,00' },
        { id: 6, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_6.jpg', description: 'Apartamento no Morumbi, com 3 dormitórios, 2 vagas, sala de estar, 3 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Morumbi' ,price: 'R$2.5000.000,00' },
        { id: 7, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_7.jpg', description: 'Apartamento na Barra Funda, com 3 dormitórios, 2 vagas, sala de estar, 3 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Barra Funda' ,price: 'R$560.000,00' },
        { id: 8, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_8.jpg', description: 'Apartamento no Itaim Bibi, com 3 dormitórios, 2 vagas, sala de estar, 3 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Itaim Bibi' ,price: 'R$700.810,00' },
        { id: 9, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_9.jpg', description: 'Apartamento no Brooklin, com 3 dormitórios, 1 vaga, sala de estar, 3 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Brooklin' ,price: 'R$1.000.800,00' },
        { id: 10, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_10.jpg', description: 'Apartamento no Itaim, com 2 dormitórios, 2 vagas, sala de estar, 3 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Itaim' ,price: 'R$862.250,,00' },
        { id: 11, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_11.jpg', description: 'Apartamento na Vila Mariana, com 3 dormitórios, 1 vaga, sala de estar, 2 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Vila Mariana' ,price: 'R$ 359.580,00' },
        { id: 12, type: 'Apartamento', image: '../assets/image/img_imoveis/ap_12.jpg', description: 'Apartamento na Pompéia, com 4 dormitórios, 2 vagas, sala de estar, 3 banheiros, cozinha completa com armários e acesso a área de serviço', location: 'Pompéia' ,price: 'R$2.800.900,00' },
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
