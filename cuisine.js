 const cuisines = [
            {
                name: "Italian",
                flag: "🇮🇹",
                description: "Rich in flavor and tradition, Italian cuisine emphasizes fresh ingredients and simple preparation techniques.",
                dishes: ["Pizza", "Pasta", "Risotto", "Lasagna", "Tiramisu", "Gelato", "Bruschetta", "Carbonara", "Bolognese", "Ravioli"]
            },
            {
                name: "Japanese",
                flag: "🇯🇵",
                description: "Known for its emphasis on seasonal ingredients, presentation, and umami flavors.",
                dishes: ["Sushi", "Ramen", "Tempura", "Yakitori", "Miso Soup", "Udon", "Sashimi", "Teriyaki", "Bento", "Mochi"]
            },
            {
                name: "French",
                flag: "🇫🇷",
                description: "Elegant and sophisticated, French cuisine is renowned for its techniques and fine dining traditions.",
                dishes: ["Croissant", "Coq au Vin", "Bouillabaisse", "Ratatouille", "Crème Brûlée", "Escargot", "Quiche", "Soufflé", "Macarons", "Baguette"]
            },
            {
                name: "Chinese",
                flag: "🇨🇳",
                description: "Diverse regional styles with emphasis on balance, harmony, and the five fundamental tastes.",
                dishes: ["Dim Sum", "Peking Duck", "Kung Pao Chicken", "Hot Pot", "Fried Rice", "Dumplings", "Sweet and Sour Pork", "Chow Mein", "Spring Rolls", "Mapo Tofu"]
            },
            {
                name: "Indian",
                flag: "🇮🇳",
                description: "Vibrant spices and diverse regional specialties create a complex and flavorful cuisine.",
                dishes: ["Curry", "Biryani", "Tandoori Chicken", "Naan", "Samosa", "Dal", "Butter Chicken", "Palak Paneer", "Chapati", "Gulab Jamun"]
            },
            {
                name: "Mexican",
                flag: "🇲🇽",
                description: "Bold flavors combining indigenous ingredients with Spanish influences.",
                dishes: ["Tacos", "Guacamole", "Enchiladas", "Quesadillas", "Mole", "Churros", "Pozole", "Tamales", "Fajitas", "Salsa"]
            },
            {
                name: "Thai",
                flag: "🇹🇭",
                description: "Perfect balance of sweet, sour, salty, and spicy flavors with fresh herbs and aromatics.",
                dishes: ["Pad Thai", "Tom Yum", "Green Curry", "Mango Sticky Rice", "Som Tam", "Massaman Curry", "Pad Krapow", "Larb", "Thai Basil Stir Fry", "Coconut Soup"]
            },
            {
                name: "Spanish",
                flag: "🇪🇸",
                description: "Mediterranean influences with regional specialties and social dining traditions.",
                dishes: ["Paella", "Tapas", "Gazpacho", "Jamón", "Tortilla Española", "Churros", "Sangria", "Patatas Bravas", "Croquetas", "Flan"]
            },
            {
                name: "Greek",
                flag: "🇬🇷",
                description: "Fresh Mediterranean ingredients with olive oil, herbs, and ancient culinary traditions.",
                dishes: ["Moussaka", "Gyros", "Greek Salad", "Souvlaki", "Baklava", "Tzatziki", "Dolmades", "Spanakopita", "Feta Cheese", "Ouzo"]
            },
            {
                name: "Korean",
                flag: "🇰🇷",
                description: "Fermented foods, bold flavors, and communal dining with emphasis on vegetables and rice.",
                dishes: ["Kimchi", "Bulgogi", "Bibimbap", "Korean BBQ", "Japchae", "Tteokbokki", "Samgyetang", "Banchan", "Galbi", "Hotteok"]
            },
            {
                name: "Lebanese",
                flag: "🇱🇧",
                description: "Fresh ingredients, aromatic spices, and healthy Mediterranean-style cooking.",
                dishes: ["Hummus", "Tabbouleh", "Falafel", "Shawarma", "Baklava", "Fattoush", "Kibbeh", "Manakish", "Labneh", "Kebab"]
            },
            {
                name: "Turkish",
                flag: "🇹🇷",
                description: "Bridge between European and Asian cuisines with rich Ottoman heritage.",
                dishes: ["Döner Kebab", "Turkish Delight", "Baklava", "Meze", "Pide", "Köfte", "Turkish Coffee", "Börek", "Lahmacun", "Iskender"]
            },
            {
                name: "Brazilian",
                flag: "🇧🇷",
                description: "Diverse regional cuisine with African, Portuguese, and indigenous influences.",
                dishes: ["Feijoada", "Churrasco", "Açaí Bowl", "Coxinha", "Pão de Açúcar", "Moqueca", "Brigadeiro", "Caipirinha", "Pastéis", "Farofa"]
            },
            {
                name: "Moroccan",
                flag: "🇲🇦",
                description: "Aromatic spices, tagines, and a blend of Berber, Arab, and Mediterranean influences.",
                dishes: ["Tagine", "Couscous", "Pastilla", "Harira", "Mint Tea", "Mechoui", "Rfissa", "Chebakia", "Msemen", "Zaalouk"]
            },
            {
                name: "Vietnamese",
                flag: "🇻🇳",
                description: "Fresh herbs, light broths, and balanced flavors with French colonial influences.",
                dishes: ["Pho", "Banh Mi", "Spring Rolls", "Bun Cha", "Cao Lau", "Nem Ran", "Com Tam", "Che", "Goi Cuon", "Banh Xeo"]
            },
            {
                name: "Peruvian",
                flag: "🇵🇪",
                description: "Fusion of indigenous, Spanish, Chinese, and Japanese culinary traditions.",
                dishes: ["Ceviche", "Lomo Saltado", "Aji de Gallina", "Anticuchos", "Papa Rellena", "Causa", "Pisco Sour", "Rocoto Relleno", "Tacu Tacu", "Suspiro Limeño"]
            },
            {
                name: "Ethiopian",
                flag: "🇪🇹",
                description: "Unique spice blends and communal dining with injera bread as the foundation.",
                dishes: ["Injera", "Doro Wat", "Kitfo", "Berbere", "Ethiopian Coffee", "Gomen", "Shiro", "Tibs", "Tej", "Ayib"]
            },
            {
                name: "German",
                flag: "🇩🇪",
                description: "Hearty comfort foods with regional specialties and excellent beer culture.",
                dishes: ["Bratwurst", "Sauerkraut", "Schnitzel", "Pretzels", "Black Forest Cake", "Sauerbraten", "Spätzle", "Currywurst", "Strudel", "Beer"]
            },
            {
                name: "Russian",
                flag: "🇷🇺",
                description: "Hearty dishes designed for cold climates with influences from across the vast country.",
                dishes: ["Borscht", "Beef Stroganoff", "Blini", "Caviar", "Pelmeni", "Vodka", "Olivier Salad", "Solyanka", "Syrniki", "Kasha"]
            },
            {
                name: "Caribbean",
                flag: "🏝️",
                description: "Tropical ingredients with African, European, and indigenous influences creating vibrant flavors.",
                dishes: ["Jerk Chicken", "Rice and Peas", "Plantains", "Curry Goat", "Ackee and Saltfish", "Rum Cake", "Callaloo", "Doubles", "Roti", "Conch Fritters"]
            }
        ];

        function createCuisineCard(cuisine) {
            return `
                <div class="cuisine-card" data-cuisine="${cuisine.name.toLowerCase()}">
                    <div class="cuisine-title">
                        <span class="flag">${cuisine.flag}</span>
                        <span>${cuisine.name} Cuisine</span>
                    </div>
                    <div class="cuisine-description">${cuisine.description}</div>
                    <div class="dishes-title">Famous Dishes:</div>
                    <div class="dishes-list">
                        ${cuisine.dishes.map(dish => `<span class="dish">${dish}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        function renderCuisines() {
            const grid = document.getElementById('cuisineGrid');
            grid.innerHTML = cuisines.map(createCuisineCard).join('');
        }

        function searchCuisines() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const cards = document.querySelectorAll('.cuisine-card');
            const noResults = document.getElementById('noResults');
            let hasResults = false;

            cards.forEach(card => {
                const cuisineName = card.dataset.cuisine;
                const cardText = card.textContent.toLowerCase();
                
                if (searchTerm === '' || cardText.includes(searchTerm) || cuisineName.includes(searchTerm)) {
                    card.style.display = 'block';
                    hasResults = true;
                } else {
                    card.style.display = 'none';
                }
            });

            noResults.style.display = hasResults ? 'none' : 'block';
        }

        // Initialize the page
        renderCuisines();

        // Add search functionality
        document.getElementById('searchInput').addEventListener('input', searchCuisines);

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.cuisine-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });