// Comprehensive Question Bank across Subjects & Sub-Categories
const defaultGames = [
    {
        id: 1,
        title: "Physics: Laws of Motion & Energy",
        category: "Science",
        subCategory: "Physics",
        desc: "Master mechanics, force, light, electricity, and fundamental physics concepts.",
        comments: [{ user: "Aryan", text: "Great revision for mechanics!" }],
        questions: [
            { q: "What is the SI unit of Force?", opts: ["Joule", "Newton", "Watt", "Pascal"], ans: "Newton" },
            { q: "Speed of light in vacuum is approximately:", opts: ["3 × 10^8 m/s", "3 × 10^6 m/s", "1.5 × 10^8 m/s", "340 m/s"], ans: "3 × 10^8 m/s" },
            { q: "Which law states every action has an equal and opposite reaction?", opts: ["First Law", "Second Law", "Third Law", "Law of Gravitation"], ans: "Third Law" },
            { q: "What is the unit of electrical resistance?", opts: ["Volt", "Ampere", "Ohm", "Coulomb"], ans: "Ohm" },
            { q: "Which lens is used to correct myopia (nearsightedness)?", opts: ["Convex", "Concave", "Cylindrical", "Bifocal"], ans: "Concave" },
            { q: "Sound waves cannot travel through:", opts: ["Water", "Steel", "Air", "Vacuum"], ans: "Vacuum" },
            { q: "Rate of change of velocity is called:", opts: ["Speed", "Momentum", "Acceleration", "Displacement"], ans: "Acceleration" },
            { q: "Which device converts mechanical energy into electrical energy?", opts: ["Motor", "Generator", "Battery", "Transformer"], ans: "Generator" },
            { q: "SI unit of Power is:", opts: ["Joule", "Newton", "Watt", "Hertz"], ans: "Watt" },
            { q: "Escape velocity on Earth is approximately:", opts: ["9.8 km/s", "11.2 km/s", "7.9 km/s", "15.4 km/s"], ans: "11.2 km/s" },
            { q: "Which color of light deviates the most in a prism?", opts: ["Red", "Yellow", "Green", "Violet"], ans: "Violet" },
            { q: "What is the SI unit of frequency?", opts: ["Hertz", "Decibel", "Meter", "Second"], ans: "Hertz" },
            { q: "Transformer works on the principle of:", opts: ["Self Induction", "Mutual Induction", "Photoelectric Effect", "Thermionic Emission"], ans: "Mutual Induction" },
            { q: "Kinetic energy formula is:", opts: ["mgh", "1/2 mv^2", "mv", "ma"], ans: "1/2 mv^2" },
            { q: "Which mirror is used as a rear-view mirror in vehicles?", opts: ["Plane", "Concave", "Convex", "Parabolic"], ans: "Convex" },
            { q: "What is the value of acceleration due to gravity (g) on Earth?", opts: ["9.8 m/s²", "8.9 m/s²", "10.8 m/s²", "6.67 m/s²"], ans: "9.8 m/s²" },
            { q: "Electric current is measured using:", opts: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"], ans: "Ammeter" },
            { q: "Which phenomenon causes twinkling of stars?", opts: ["Reflection", "Atmospheric Refraction", "Dispersion", "Scattering"], ans: "Atmospheric Refraction" },
            { q: "SI unit of Pressure is:", opts: ["Newton", "Pascal", "Joule", "Poise"], ans: "Pascal" },
            { q: "Nuclear fusion takes place in:", opts: ["Nuclear Reactor", "The Sun", "Battery", "Thermal Plant"], ans: "The Sun" }
        ]
    },
    {
        id: 2,
        title: "Chemistry: Elements & Reactions",
        category: "Science",
        subCategory: "Chemistry",
        desc: "Test your knowledge of periodic table, acids, bases, and chemical formulas.",
        comments: [],
        questions: [
            { q: "What is the chemical symbol for Gold?", opts: ["Ag", "Au", "Fe", "Gd"], ans: "Au" },
            { q: "What is the pH value of pure water?", opts: ["5", "7", "9", "14"], ans: "7" },
            { q: "Which gas is known as laughing gas?", opts: ["Nitrous Oxide", "Carbon Monoxide", "Methane", "Ammonia"], ans: "Nitrous Oxide" },
            { q: "Atomic number of Carbon is:", opts: ["4", "6", "8", "12"], ans: "6" },
            { q: "Which acid is found in lemons?", opts: ["Acetic Acid", "Citric Acid", "Lactic Acid", "Tartaric Acid"], ans: "Citric Acid" },
            { q: "Chemical formula of common salt is:", opts: ["NaCl", "KCl", "NaOH", "HCl"], ans: "NaCl" },
            { q: "Which gas is most abundant in Earth's atmosphere?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], ans: "Nitrogen" },
            { q: "Hardest natural substance on Earth is:", opts: ["Iron", "Diamond", "Quartz", "Graphite"], ans: "Diamond" },
            { q: "Which metal is liquid at room temperature?", opts: ["Sodium", "Mercury", "Iron", "Aluminium"], ans: "Mercury" },
            { q: "Chemical formula of Baking Soda is:", opts: ["Na2CO3", "NaHCO3", "CaCO3", "NaCl"], ans: "NaHCO3" },
            { q: "Who is known as the father of the Periodic Table?", opts: ["Dalton", "Mendeleev", "Bohr", "Rutherford"], ans: "Mendeleev" },
            { q: "Which gas turns lime water milky?", opts: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"], ans: "Carbon Dioxide" },
            { q: "Number of electrons in a neutral Hydrogen atom:", opts: ["0", "1", "2", "3"], ans: "1" },
            { q: "Rusting of iron is an example of:", opts: ["Reduction", "Oxidation", "Sublimation", "Neutralization"], ans: "Oxidation" },
            { q: "Which non-metal is a good conductor of electricity?", opts: ["Sulfur", "Graphite", "Phosphorus", "Iodine"], ans: "Graphite" },
            { q: "Main component of biogas is:", opts: ["Ethane", "Methane", "Propane", "Butane"], ans: "Methane" },
            { q: "Dry ice is solid:", opts: ["Water", "Carbon Dioxide", "Nitrogen", "Ammonia"], ans: "Carbon Dioxide" },
            { q: "Bronze is an alloy of Copper and:", opts: ["Zinc", "Tin", "Iron", "Nickel"], ans: "Tin" },
            { q: "Which vitamin is also known as Ascorbic Acid?", opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], ans: "Vitamin C" },
            { q: "Atomic mass of Oxygen is:", opts: ["8", "12", "16", "32"], ans: "16" }
        ]
    },
    {
        id: 3,
        title: "Biology: Human Body & Life Science",
        category: "Science",
        subCategory: "Biology",
        desc: "Explore cell biology, human anatomy, genetics, and plant systems.",
        comments: [],
        questions: [
            { q: "Which organelle is called the powerhouse of the cell?", opts: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"], ans: "Mitochondria" },
            { q: "Largest organ in the human body is:", opts: ["Liver", "Brain", "Skin", "Heart"], ans: "Skin" },
            { q: "Which blood group is known as the universal donor?", opts: ["A+", "B+", "AB+", "O-"], ans: "O-" },
            { q: "Photosynthesis takes place in which part of a plant cell?", opts: ["Chloroplast", "Vacuole", "Cell Wall", "Mitochondria"], ans: "Chloroplast" },
            { q: "How many chambers does a human heart have?", opts: ["2", "3", "4", "5"], ans: "4" },
            { q: "Deficiency of Iron causes:", opts: ["Scurvy", "Rickets", "Anemia", "Goitre"], ans: "Anemia" },
            { q: "Which vitamin is synthesized in skin using sunlight?", opts: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], ans: "Vitamin D" },
            { q: "Basic functional unit of the kidney is:", opts: ["Neuron", "Nephron", "Alveoli", "Villi"], ans: "Nephron" },
            { q: "Total number of bones in an adult human body:", opts: ["206", "208", "212", "300"], ans: "206" },
            { q: "Which gas do plants absorb during photosynthesis?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: "Carbon Dioxide" },
            { q: "Insulin hormone is secreted by:", opts: ["Liver", "Pancreas", "Thyroid", "Pituitary"], ans: "Pancreas" },
            { q: "DNA stands for:", opts: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Deoxyribose Acid", "Double Nucleic Acid"], ans: "Deoxyribonucleic Acid" },
            { q: "Which blood cells fight infections?", opts: ["RBC", "WBC", "Platelets", "Plasma"], ans: "WBC" },
            { q: "Longest bone in the human body is:", opts: ["Tibia", "Femur", "Humerus", "Radius"], ans: "Femur" },
            { q: "Normal human body temperature is:", opts: ["35°C", "37°C", "39°C", "40°C"], ans: "37°C" },
            { q: "Study of fungi is called:", opts: ["Botany", "Mycology", "Zoology", "Virology"], ans: "Mycology" },
            { q: "Which part of the brain controls balance and posture?", opts: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], ans: "Cerebellum" },
            { q: "Green pigment in leaves is:", opts: ["Carotene", "Chlorophyll", "Xanthophyll", "Hemoglobin"], ans: "Chlorophyll" },
            { q: "Malaria is caused by:", opts: ["Bacteria", "Virus", "Protozoa", "Fungus"], ans: "Protozoa" },
            { q: "Universal recipient blood group is:", opts: ["O+", "O-", "AB+", "A-"], ans: "AB+" }
        ]
    },
    {
        id: 4,
        title: "Mathematics Challenge",
        category: "Math",
        subCategory: "",
        desc: "Sharpen your arithmetic, algebra, geometry, and probability skills.",
        comments: [],
        questions: [
            { q: "What is 15% of 200?", opts: ["20", "25", "30", "35"], ans: "30" },
            { q: "Solve for x: 3x - 9 = 12", opts: ["5", "6", "7", "8"], ans: "7" },
            { q: "Value of Pi (π) up to two decimal places:", opts: ["3.12", "3.14", "3.16", "3.18"], ans: "3.14" },
            { q: "Sum of interior angles of a triangle is:", opts: ["90°", "180°", "270°", "360°"], ans: "180°" },
            { q: "Square root of 144 is:", opts: ["11", "12", "13", "14"], ans: "12" },
            { q: "What is the next prime number after 7?", opts: ["9", "10", "11", "13"], ans: "11" },
            { q: "Area of a rectangle with length 8 and width 5:", opts: ["13", "26", "40", "45"], ans: "40" },
            { q: "What is 2^5 (2 raised to power 5)?", opts: ["16", "25", "32", "64"], ans: "32" },
            { q: "Probability of getting heads in a fair coin toss:", opts: ["0.25", "0.5", "0.75", "1"], ans: "0.5" },
            { q: "How many sides does a hexagon have?", opts: ["5", "6", "7", "8"], ans: "6" },
            { q: "What is 0 divided by any non-zero number?", opts: ["0", "1", "Infinity", "Undefined"], ans: "0" },
            { q: "Cube of 4 is:", opts: ["12", "16", "48", "64"], ans: "64" },
            { q: "If a = 4 and b = 3, what is √(a² + b²)?", opts: ["5", "6", "7", "25"], ans: "5" },
            { q: "LCM of 4 and 6 is:", opts: ["8", "12", "18", "24"], ans: "12" },
            { q: "HCF of 12 and 18 is:", opts: ["2", "3", "6", "9"], ans: "6" },
            { q: "Perimeter of a square with side 9 cm:", opts: ["18 cm", "27 cm", "36 cm", "81 cm"], ans: "36 cm" },
            { q: "Value of sin(90°) is:", opts: ["0", "0.5", "1", "Undefined"], ans: "1" },
            { q: "1 kilometer equals how many meters?", opts: ["100", "500", "1000", "10000"], ans: "1000" },
            { q: "Average of 10, 20, 30 is:", opts: ["15", "20", "25", "30"], ans: "20" },
            { q: "Smallest prime number is:", opts: ["0", "1", "2", "3"], ans: "2" }
        ]
    },
    {
        id: 5,
        title: "General Knowledge World Quiz",
        category: "General Knowledge",
        subCategory: "",
        desc: "Boost your awareness of world capitals, geography, inventions, and awards.",
        comments: [],
        questions: [
            { q: "Which is the largest continent in the world?", opts: ["Africa", "Asia", "Europe", "North America"], ans: "Asia" },
            { q: "What is the capital of Japan?", opts: ["Seoul", "Beijing", "Tokyo", "Bangkok"], ans: "Tokyo" },
            { q: "Which planet is known as the Red Planet?", opts: ["Venus", "Mars", "Jupiter", "Saturn"], ans: "Mars" },
            { q: "Who invented the telephone?", opts: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Isaac Newton"], ans: "Alexander Graham Bell" },
            { q: "Which is the longest river in the world?", opts: ["Amazon", "Nile", "Ganga", "Yangtze"], ans: "Nile" },
            { q: "National animal of India is:", opts: ["Lion", "Elephant", "Bengal Tiger", "Peacock"], ans: "Bengal Tiger" },
            { q: "Which is the smallest ocean in the world?", opts: ["Indian", "Atlantic", "Arctic", "Pacific"], ans: "Arctic" },
            { q: "Mount Everest is located in which mountain range?", opts: ["Andes", "Rockies", "Himalayas", "Alps"], ans: "Himalayas" },
            { q: "Currency of the United Kingdom is:", opts: ["Euro", "Dollar", "Pound Sterling", "Yen"], ans: "Pound Sterling" },
            { q: "Who wrote the Indian National Anthem?", opts: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhas Chandra Bose"], ans: "Rabindranath Tagore" },
            { q: "Which country is known as the Land of the Rising Sun?", opts: ["China", "Japan", "Korea", "Thailand"], ans: "Japan" },
            { q: "Largest desert in the world is:", opts: ["Thar", "Gobi", "Sahara", "Kalahari"], ans: "Sahara" },
            { q: "How many colors are there in a rainbow?", opts: ["5", "6", "7", "8"], ans: "7" },
            { q: "First man to walk on the Moon:", opts: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Rakesh Sharma"], ans: "Neil Armstrong" },
            { q: "Which is the largest mammal on Earth?", opts: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], ans: "Blue Whale" },
            { q: "Capital of Australia is:", opts: ["Sydney", "Melbourne", "Canberra", "Perth"], ans: "Canberra" },
            { q: "Olympic Games are held every how many years?", opts: ["2", "3", "4", "5"], ans: "4" },
            { q: "Which instrument measures atmospheric pressure?", opts: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"], ans: "Barometer" },
            { q: "Taj Mahal is situated on the banks of which river?", opts: ["Ganga", "Yamuna", "Godavari", "Narmada"], ans: "Yamuna" },
            { q: "World Environment Day is celebrated on:", opts: ["5 June", "22 April", "15 August", "10 December"], ans: "5 June" }
        ]
    },
    {
        id: 6,
        title: "Social Science: History & Civics",
        category: "Social Science",
        subCategory: "",
        desc: "Learn about Indian Constitution, freedom struggle, civics, and geography.",
        comments: [],
        questions: [
            { q: "Who is known as the Father of the Indian Constitution?", opts: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], ans: "Dr. B.R. Ambedkar" },
            { q: "When did India gain independence?", opts: ["26 January 1950", "15 August 1947", "2 October 1947", "15 August 1950"], ans: "15 August 1947" },
            { q: "How many fundamental rights are in the Indian Constitution?", opts: ["5", "6", "7", "8"], ans: "6" },
            { q: "Minimum voting age in India is:", opts: ["16", "18", "21", "25"], ans: "18" },
            { q: "Who started the Dandi March in 1930?", opts: ["Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh", "Bal Gangadhar Tilak"], ans: "Mahatma Gandhi" },
            { q: "Upper house of the Indian Parliament is called:", opts: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Gram Sabha"], ans: "Rajya Sabha" },
            { q: "Which latitude passes through the middle of India?", opts: ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle"], ans: "Tropic of Cancer" },
            { q: "Who was the first President of India?", opts: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Zakir Husain"], ans: "Dr. Rajendra Prasad" },
            { q: "Indus Valley Civilization site Lothal is in which state?", opts: ["Punjab", "Rajasthan", "Gujarat", "Haryana"], ans: "Gujarat" },
            { q: "Term of a Lok Sabha member is:", opts: ["4 years", "5 years", "6 years", "Lifetime"], ans: "5 years" },
            { q: "Which soil is best suited for cotton cultivation?", opts: ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil"], ans: "Black Soil" },
            { q: "Who gave the slogan 'Jai Jawan Jai Kisan'?", opts: ["Lal Bahadur Shastri", "Indira Gandhi", "Atal Bihari Vajpayee", "Mahatma Gandhi"], ans: "Lal Bahadur Shastri" },
            { q: "Headquarters of the United Nations (UN) is in:", opts: ["Geneva", "Paris", "New York", "London"], ans: "New York" },
            { q: "Constitution Day in India is celebrated on:", opts: ["26 January", "15 August", "26 November", "2 October"], ans: "26 November" },
            { q: "Which is the southernmost tip of mainland India?", opts: ["Indira Point", "Kanyakumari", "Rameswaram", "Kochi"], ans: "Kanyakumari" },
            { q: "Who founded the Maurya Empire?", opts: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Chanakya"], ans: "Chandragupta Maurya" },
            { q: "Panchayati Raj system belongs to which tier of government?", opts: ["Central", "State", "Local Self-Government", "Judiciary"], ans: "Local Self-Government" },
            { q: "Which crop is known as a Kharif crop?", opts: ["Wheat", "Rice (Paddy)", "Mustard", "Barley"], ans: "Rice (Paddy)" },
            { q: "Right to Education (RTE) is under which Article?", opts: ["Article 14", "Article 19", "Article 21A", "Article 32"], ans: "Article 21A" },
            { q: "Who built the Red Fort in Delhi?", opts: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"], ans: "Shah Jahan" }
        ]
    },
    {
        id: 7,
        title: "Good Habits vs Bad Habits",
        category: "Habits",
        subCategory: "",
        desc: "Identify healthy daily routines, civic sense, digital hygiene, and positive habits.",
        comments: [],
        questions: [
            { q: "Washing hands with soap before eating is a:", opts: ["Good Habit", "Bad Habit", "Useless Action", "Waste of Time"], ans: "Good Habit" },
            { q: "Throwing plastic wrappers on the road instead of a dustbin is a:", opts: ["Good Habit", "Bad Habit", "Smart Move", "Civic Duty"], ans: "Bad Habit" },
            { q: "Brushing your teeth twice a day is a:", opts: ["Bad Habit", "Good Habit", "Optional Habit", "Harmful Habit"], ans: "Good Habit" },
            { q: "Using mobile phone late at night and losing sleep is a:", opts: ["Good Habit", "Bad Habit", "Healthy Routine", "Productive Habit"], ans: "Bad Habit" },
            { q: "Helping elders cross the road safely is a:", opts: ["Bad Habit", "Good Habit", "Selfish Act", "Rude Behavior"], ans: "Good Habit" },
            { q: "Interrupting someone while they are speaking is a:", opts: ["Good Habit", "Bad Habit", "Polite Gesture", "Leadership Skill"], ans: "Bad Habit" },
            { q: "Drinking 7-8 glasses of clean water daily is a:", opts: ["Bad Habit", "Good Habit", "Harmful Routine", "Lazy Habit"], ans: "Good Habit" },
            { q: "Wasting electricity by leaving fans and lights on in an empty room is a:", opts: ["Good Habit", "Bad Habit", "Eco-friendly Habit", "Smart Habit"], ans: "Bad Habit" },
            { q: "Revising your school/college notes daily is a:", opts: ["Bad Habit", "Good Habit", "Waste of Energy", "Boring Habit"], ans: "Good Habit" },
            { q: "Biting fingernails when stressed is a:", opts: ["Good Habit", "Bad Habit", "Hygienic Habit", "Healthy Habit"], ans: "Bad Habit" },
            { q: "Saying 'Thank You' and 'Please' politely is a:", opts: ["Bad Habit", "Good Habit", "Weakness", "Unnecessary Habit"], ans: "Good Habit" },
            { q: "Eating junk food every single day instead of balanced meals is a:", opts: ["Good Habit", "Bad Habit", "Fitness Secret", "Healthy Diet"], ans: "Bad Habit" },
            { q: "Exercising or playing outdoor sports for 30 minutes daily is a:", opts: ["Bad Habit", "Good Habit", "Waste of Time", "Risky Habit"], ans: "Good Habit" },
            { q: "Sharing your password with strangers online is a:", opts: ["Good Habit", "Bad Habit", "Safe Practice", "Friendly Gesture"], ans: "Bad Habit" },
            { q: "Keeping your study desk and room clean is a:", opts: ["Bad Habit", "Good Habit", "Tiring Habit", "Useless Habit"], ans: "Good Habit" },
            { q: "Cheating during an exam is a:", opts: ["Good Habit", "Bad Habit", "Smart Shortcut", "Honest Effort"], ans: "Bad Habit" },
            { q: "Planting trees and watering plants is a:", opts: ["Bad Habit", "Good Habit", "Harmful Action", "Waste of Water"], ans: "Good Habit" },
            { q: "Procrastinating and delaying homework until the last minute is a:", opts: ["Good Habit", "Bad Habit", "Time Management", "Best Strategy"], ans: "Bad Habit" },
            { q: "Listening carefully to teachers and parents is a:", opts: ["Bad Habit", "Good Habit", "Old-fashioned Habit", "Weak Habit"], ans: "Good Habit" },
            { q: "Leaving tap water running while brushing teeth is a:", opts: ["Good Habit", "Bad Habit", "Water Conservation", "Clean Habit"], ans: "Bad Habit" }
        ]
    }
];

// State Management
let games = JSON.parse(localStorage.getItem('eduGamesV2')) || defaultGames;
let users = JSON.parse(localStorage.getItem('eduUsers')) || [];
let currentUser = JSON.parse(localStorage.getItem('eduCurrentUser')) || null;
let isRegisterMode = false;

// Active Quiz State
let activeGame = null;
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

window.onload = () => {
    updateNav();
    renderGames();
};

function showNotification(msg) {
    const box = document.getElementById('notificationBox');
    box.innerText = msg;
    box.classList.remove('hidden');
    setTimeout(() => box.classList.add('hidden'), 3000);
}

function showSection(section) {
    ['authSection', 'exploreSection', 'createSection', 'dashboardSection'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(section + 'Section').classList.remove('hidden');

    if (section === 'dashboard') renderDashboard();
    if (section === 'explore') renderGames();
}

function updateNav() {
    const loggedIn = currentUser !== null;
    document.getElementById('createBtn').classList.toggle('hidden', !loggedIn);
    document.getElementById('dashBtn').classList.toggle('hidden', !loggedIn);
    document.getElementById('logoutBtn').classList.toggle('hidden', !loggedIn);
    document.getElementById('authBtn').classList.toggle('hidden', loggedIn);
}

// Auth Logic
function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    document.getElementById('authTitle').innerText = isRegisterMode ? "Create Account" : "Login to EduPlay";
    document.getElementById('username').classList.toggle('hidden', !isRegisterMode);
    document.getElementById('authSubmitBtn').innerText = isRegisterMode ? "Register" : "Login";
    document.getElementById('togglePrompt').innerText = isRegisterMode ? "Already have an account?" : "Don't have an account?";
}

document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const name = document.getElementById('username').value.trim();

    if (isRegisterMode) {
        if (users.find(u => u.email === email)) return showNotification("Email already registered!");
        const newUser = { name, email, password, enrolled: [] };
        users.push(newUser);
        localStorage.setItem('eduUsers', JSON.stringify(users));
        currentUser = newUser;
        showNotification("Welcome, " + name + "!");
    } else {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) return showNotification("Invalid email or password!");
        currentUser = user;
        showNotification("Welcome back, " + user.name + "!");
    }

    localStorage.setItem('eduCurrentUser', JSON.stringify(currentUser));
    updateNav();
    showSection('explore');
});

function logout() {
    currentUser = null;
    localStorage.removeItem('eduCurrentUser');
    updateNav();
    showSection('explore');
    showNotification("Logged out successfully.");
}

// Category & Science Sub-Category Filter Logic
function handleCategoryChange() {
    const cat = document.getElementById('categoryFilter').value;
    const subFilter = document.getElementById('subCategoryFilter');
    if (cat === "Science") {
        subFilter.classList.remove('hidden');
    } else {
        subFilter.classList.add('hidden');
        subFilter.value = "All";
    }
    renderGames();
}

function toggleCreateSubCat() {
    const cat = document.getElementById('gameCategory').value;
    document.getElementById('gameSubCategory').classList.toggle('hidden', cat !== "Science");
}

// Create New Game Content
document.getElementById('createGameForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('gameCategory').value;
    const subCategory = category === "Science" ? document.getElementById('gameSubCategory').value : "";
    
    const newGame = {
        id: Date.now(),
        title: document.getElementById('gameTitle').value,
        category,
        subCategory,
        desc: document.getElementById('gameDesc').value,
        comments: [],
        questions: [{
            q: document.getElementById('gameQuestion').value,
            opts: [
                document.getElementById('optA').value,
                document.getElementById('optB').value,
                document.getElementById('optC').value,
                document.getElementById('optD').value
            ],
            ans: document.getElementById('gameAnswer').value
        }]
    };
    games.push(newGame);
    localStorage.setItem('eduGamesV2', JSON.stringify(games));
    e.target.reset();
    showNotification("New game published!");
    showSection('explore');
});

// Render Games
function renderGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const subCategory = document.getElementById('subCategoryFilter').value;
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = "";

    const filtered = games.filter(g => {
        const matchCat = category === "All" || g.category === category;
        const matchSub = subCategory === "All" || g.subCategory === subCategory;
        const matchSearch = g.title.toLowerCase().includes(query) || g.desc.toLowerCase().includes(query);
        return matchCat && matchSub && matchSearch;
    });

    filtered.forEach(game => {
        const isEnrolled = currentUser && currentUser.enrolled.some(e => e.gameId === game.id);
        const badgeText = game.subCategory ? `${game.category} • ${game.subCategory}` : game.category;
        grid.innerHTML += `
            <div class="game-card">
                <div>
                    <span class="badge">${badgeText}</span>
                    <h3>${game.title}</h3>
                    <p style="margin: 10px 0; color: #555;">${game.desc}</p>
                    <small style="color: #64748b;">Bank: ${game.questions.length} Questions | Modes: 5, 10, 20 Qs</small>
                </div>
                <div style="margin-top: 15px;">
                    ${isEnrolled 
                        ? `<button class="btn-primary" onclick="openGameModal(${game.id})">Play Quiz</button>`
                        : `<button class="btn-primary" onclick="enrollGame(${game.id})">Enroll Now</button>`
                    }
                </div>
            </div>
        `;
    });
}

// Enrollment
function enrollGame(gameId) {
    if (!currentUser) {
        showNotification("Please login first to enroll!");
        return showSection('auth');
    }
    currentUser.enrolled.push({ gameId, progress: 0 });
    syncUserData();
    showNotification("Enrolled! Click 'Play Quiz' to start.");
    renderGames();
}

// Dashboard
function renderDashboard() {
    if (!currentUser) return;
    document.getElementById('profName').innerText = currentUser.name;
    document.getElementById('profEmail').innerText = currentUser.email;
    document.getElementById('enrolledCount').innerText = currentUser.enrolled.length;
    
    const completed = currentUser.enrolled.filter(e => e.progress >= 70).length;
    document.getElementById('completedCount').innerText = completed;

    const grid = document.getElementById('enrolledGrid');
    grid.innerHTML = "";

    currentUser.enrolled.forEach(item => {
        const game = games.find(g => g.id === item.gameId);
        if (!game) return;
        grid.innerHTML += `
            <div class="game-card">
                <h3>${game.title}</h3>
                <p>Best Score: <strong>${item.progress}%</strong></p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${item.progress}%"></div>
                </div>
                <button class="btn-primary" onclick="openGameModal(${game.id})">Launch Quiz</button>
            </div>
        `;
    });
}

// Quiz Modal & Length Selection (5, 10, 20 Questions)
function openGameModal(gameId) {
    activeGame = games.find(g => g.id === gameId);
    const badgeText = activeGame.subCategory ? `${activeGame.category} • ${activeGame.subCategory}` : activeGame.category;
    
    document.getElementById('modalTitle').innerText = activeGame.title;
    document.getElementById('modalBadge').innerText = badgeText;
    document.getElementById('modalDesc').innerText = activeGame.desc;
    
    resetModalSetup();
    renderComments(activeGame);
    document.getElementById('gameModal').classList.remove('hidden');
}

function resetModalSetup() {
    document.getElementById('quizSetupBox').classList.remove('hidden');
    document.getElementById('quizPlayBox').classList.add('hidden');
    document.getElementById('quizResultBox').classList.add('hidden');
}

function closeModal() {
    document.getElementById('gameModal').classList.add('hidden');
}

function startQuiz(count) {
    // Shuffle questions and pick requested count (5, 10, or 20)
    const shuffled = [...activeGame.questions].sort(() => Math.random() - 0.5);
    quizQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
    
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('quizSetupBox').classList.add('hidden');
    document.getElementById('quizPlayBox').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const qObj = quizQuestions[currentQuestionIndex];
    document.getElementById('questionCounter').innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    document.getElementById('liveScore').innerText = `Score: ${score}`;
    document.getElementById('quizQuestionText').innerText = qObj.q;

    const optsBox = document.getElementById('optionsContainer');
    optsBox.innerHTML = "";
    qObj.opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(opt);
        optsBox.appendChild(btn);
    });
}

function handleAnswer(selectedOpt) {
    const correctAns = quizQuestions[currentQuestionIndex].ans;
    if (selectedOpt === correctAns) {
        score++;
        showNotification("Correct!");
    } else {
        showNotification("Wrong! Correct answer: " + correctAns);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById('quizPlayBox').classList.add('hidden');
    document.getElementById('quizResultBox').classList.remove('hidden');

    const percentage = Math.round((score / quizQuestions.length) * 100);
    document.getElementById('finalScoreText').innerText = `You scored ${score} out of ${quizQuestions.length} (${percentage}%)`;

    // Update User Progress
    const enrollment = currentUser.enrolled.find(e => e.gameId === activeGame.id);
    if (enrollment && percentage > enrollment.progress) {
        enrollment.progress = percentage;
        syncUserData();
    }
    if (!document.getElementById('dashboardSection').classList.contains('hidden')) {
        renderDashboard();
    }
}

// Comments
function renderComments(game) {
    const list = document.getElementById('commentsList');
    list.innerHTML = game.comments.length ? "" : "<p style='color:#777;'>No feedback yet.</p>";
    game.comments.forEach(c => {
        list.innerHTML += `<div class="comment-item"><strong>${c.user}:</strong> ${c.text}</div>`;
    });
}

function addComment() {
    const text = document.getElementById('commentText').value.trim();
    if (!text) return;
    activeGame.comments.push({ user: currentUser.name, text });
    localStorage.setItem('eduGamesV2', JSON.stringify(games));
    document.getElementById('commentText').value = "";
    renderComments(activeGame);
    showNotification("Feedback posted!");
}

function syncUserData() {
    localStorage.setItem('eduCurrentUser', JSON.stringify(currentUser));
    const idx = users.findIndex(u => u.email === currentUser.email);
    if (idx !== -1) users[idx] = currentUser;
    localStorage.setItem('eduUsers', JSON.stringify(users));
}