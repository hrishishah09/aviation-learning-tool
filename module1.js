const module1Lessons = [
  {
    title: "Introduction to Air Law & Regulations",
    content: "Aviation is heavily regulated to ensure safety. In Canada, civil aviation is governed by Transport Canada through the Canadian Aviation Regulations (CARs). Pilots must carry valid documentation at all times, including their License or Permit, a valid Medical Certificate, and proof of identification. The type of medical certificate required depends on the license type (e.g., Category 1 for Commercial, Category 3 for Private Pilot). Understanding your privileges and limitations as a pilot is your legal responsibility before taking command of any aircraft.",
    concepts: ['Transport Canada', 'CARs', 'Medical Certificates', 'Pilot Privileges'],
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b"
  },
  {
    title: "Aviation Terminology & Communications",
    content: "Clear communication is critical in aviation. Pilots and Air Traffic Control (ATC) use the ICAO Phonetic Alphabet (Alpha, Bravo, Charlie...) to avoid misunderstandings over the radio. Aviation operates on a universal time standard called Coordinated Universal Time (UTC), often referred to as 'Zulu Time', ensuring all flight plans and weather reports share the same timeline regardless of local time zones. Furthermore, it's vital to know the difference between an Aerodrome (any area used for aircraft operations) and an Airport (an aerodrome with a certified status).",
    concepts: ['Phonetic Alphabet', 'Zulu Time', 'Aerodrome vs Airport', 'ATC Clearances']
  },
  {
    title: "Anatomy of an Aircraft",
    content: "An aircraft is divided into several major components. The Fuselage is the main body that holds the crew, passengers, and cargo. The Wings generate the lift required for flight and often contain the fuel tanks. The Empennage (tail section) provides stability and control, consisting of the vertical stabilizer (rudder) and horizontal stabilizer (elevator). The Landing Gear supports the aircraft on the ground, and the Propulsion System (engine and propeller) generates the thrust needed to move forward.",
    concepts: ['Fuselage', 'Empennage', 'Landing Gear', 'Ailerons, Elevators, Rudder'],
    image: "https://images.unsplash.com/photo-1559080463-5c7eb3a52de1"
  },
  {
    title: "Introduction to Theory of Flight",
    content: "Flight is governed by physical laws, most notably Newton's Third Law (for every action, there is an equal and opposite reaction) and Bernoulli's Principle (as the velocity of a fluid increases, its pressure decreases). There are four fundamental forces acting on an aircraft in flight: Lift (upward), Weight (downward), Thrust (forward), and Drag (backward). In steady, unaccelerated flight, Lift equals Weight, and Thrust equals Drag. The shape of the wing, called an airfoil, is specifically designed to manipulate these air pressure differences to generate lift.",
    concepts: ["Bernoulli's Principle", "Newton's Third Law", 'The Four Forces', 'Airfoils']
  }
];

let currentLessonIndex = 0;

function getElementByIdSafe(id) {
  return document.getElementById(id);
}

function renderLessonsNav() {
  const nav = getElementByIdSafe('lessons-nav');
  nav.innerHTML = '';

  module1Lessons.forEach((lesson, index) => {
    const btn = document.createElement('button');
    btn.className = 'lesson-nav-btn';
    if (index === currentLessonIndex) {
      btn.classList.add('active');
    }
    btn.textContent = lesson.title;
    btn.addEventListener('click', () => selectLesson(index));
    nav.appendChild(btn);
  });
}

function renderLesson() {
  const lesson = module1Lessons[currentLessonIndex];

  getElementByIdSafe('lesson-title').textContent = lesson.title;

  const imageContainer = getElementByIdSafe('lesson-image-container');
  imageContainer.innerHTML = '';
  if (lesson.image) {
    const img = document.createElement('img');
    img.src = lesson.image;
    img.alt = lesson.title;
    img.className = 'lesson-image';
    imageContainer.appendChild(img);
  }

  getElementByIdSafe('lesson-text').textContent = lesson.content;

  const conceptsList = getElementByIdSafe('concepts-list');
  conceptsList.innerHTML = '';
  if (lesson.concepts && lesson.concepts.length > 0) {
    lesson.concepts.forEach(concept => {
      const li = document.createElement('li');
      li.textContent = concept;
      conceptsList.appendChild(li);
    });
  }

  const counter = getElementByIdSafe('lesson-counter');
  counter.textContent = `${currentLessonIndex + 1} / ${module1Lessons.length}`;

  const prevBtn = getElementByIdSafe('prev-btn');
  const nextBtn = getElementByIdSafe('next-btn');
  prevBtn.disabled = currentLessonIndex === 0;
  nextBtn.disabled = currentLessonIndex === module1Lessons.length - 1;

  renderLessonsNav();
}

function selectLesson(index) {
  currentLessonIndex = index;
  renderLesson();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function previousLesson() {
  if (currentLessonIndex > 0) {
    selectLesson(currentLessonIndex - 1);
  }
}

function nextLesson() {
  if (currentLessonIndex < module1Lessons.length - 1) {
    selectLesson(currentLessonIndex + 1);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getElementByIdSafe('prev-btn').addEventListener('click', previousLesson);
  getElementByIdSafe('next-btn').addEventListener('click', nextLesson);

  renderLesson();
});
