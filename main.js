const lessons = [
  {
    id: 'module-1',
    title: 'Foundations of Aviation',
    sublessons: [
      {
        id: 'intro-air-law',
        title: 'Introduction to Air Law & Regulations',
        content: 'Aviation is heavily regulated to ensure safety. In Canada, civil aviation is governed by Transport Canada through the Canadian Aviation Regulations (CARs). Pilots must carry valid documentation at all times, including their License or Permit, a valid Medical Certificate, and proof of identification. The type of medical certificate required depends on the license type (e.g., Category 1 for Commercial, Category 3 for Private Pilot). Understanding your privileges and limitations as a pilot is your legal responsibility before taking command of any aircraft.',
        concepts: ['Transport Canada', 'CARs', 'Medical Certificates', 'Pilot Privileges'],
        image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b'
      },
      {
        id: 'aviation-terminology',
        title: 'Aviation Terminology & Communications',
        content: 'Clear communication is critical in aviation. Pilots and Air Traffic Control (ATC) use the ICAO Phonetic Alphabet (Alpha, Bravo, Charlie...) to avoid misunderstandings over the radio. Aviation operates on a universal time standard called Coordinated Universal Time (UTC), often referred to as \'Zulu Time\', ensuring all flight plans and weather reports share the same timeline regardless of local time zones. Furthermore, it\'s vital to know the difference between an Aerodrome (any area used for aircraft operations) and an Airport (an aerodrome with a certified status).',
        concepts: ['Phonetic Alphabet', 'Zulu Time', 'Aerodrome vs Airport', 'ATC Clearances'],
        image: ''
      },
      {
        id: 'anatomy-aircraft',
        title: 'Anatomy of an Aircraft',
        content: 'An aircraft is divided into several major components. The Fuselage is the main body that holds the crew, passengers, and cargo. The Wings generate the lift required for flight and often contain the fuel tanks. The Empennage (tail section) provides stability and control, consisting of the vertical stabilizer (rudder) and horizontal stabilizer (elevator). The Landing Gear supports the aircraft on the ground, and the Propulsion System (engine and propeller) generates the thrust needed to move forward.',
        concepts: ['Fuselage', 'Empennage', 'Landing Gear', 'Ailerons, Elevators, Rudder'],
        image: 'https://images.unsplash.com/photo-1559080463-5c7eb3a52de1'
      },
      {
        id: 'intro-theory-flight',
        title: 'Introduction to Theory of Flight',
        content: 'Flight is governed by physical laws, most notably Newton\'s Third Law (for every action, there is an equal and opposite reaction) and Bernoulli\'s Principle (as the velocity of a fluid increases, its pressure decreases). There are four fundamental forces acting on an aircraft in flight: Lift (upward), Weight (downward), Thrust (forward), and Drag (backward). In steady, unaccelerated flight, Lift equals Weight, and Thrust equals Drag. The shape of the wing, called an airfoil, is specifically designed to manipulate these air pressure differences to generate lift.',
        concepts: ['Bernoulli\'s Principle', 'Newton\'s Third Law', 'The Four Forces', 'Airfoils'],
        image: ''
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Advanced Air Law & Aerodynamics',
    sublessons: [
      {
        id: 'licensing-docs',
        title: 'Licensing & Documentation',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'aerodromes-part-1',
        title: 'Aerodromes: Part 1',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'laws-forces',
        title: 'Physical Laws and Forces',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'lift-drag',
        title: 'Lift and Drag Dynamics',
        content: '',
        concepts: [],
        image: ''
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Airspace & Pilot Health',
    sublessons: [
      {
        id: 'aerodromes-part-2',
        title: 'Aerodromes: Part 2',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'vfr-flight-conditions',
        title: 'VFR Flight Conditions & Airspace',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'aviation-medicine',
        title: 'Aviation Medicine & Human Factors',
        content: '',
        concepts: [],
        image: ''
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Procedures & Operations',
    sublessons: [
      {
        id: 'rules-air',
        title: 'Rules of the Air',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'maintenance-occurrences',
        title: 'Maintenance and Aircraft Occurrences',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'flight-plans',
        title: 'Flight Plans and Itineraries',
        content: '',
        concepts: [],
        image: ''
      }
    ]
  },
  {
    id: 'module-5',
    title: 'Flight Controls & Stability',
    sublessons: [
      {
        id: 'aircraft-stability',
        title: 'Aircraft Stability',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'flight-controls',
        title: 'Primary and Secondary Flight Controls',
        content: '',
        concepts: [],
        image: ''
      }
    ]
  },
  {
    id: 'module-6',
    title: 'Critical Flight Dynamics',
    sublessons: [
      {
        id: 'stalls',
        title: 'Stalls',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'spins-dives-slips',
        title: 'Spins, Spiral Dives, and Slips',
        content: '',
        concepts: [],
        image: ''
      }
    ]
  },
  {
    id: 'module-7',
    title: 'Meteorology Fundamentals',
    sublessons: [
      {
        id: 'intro-meteorology',
        title: 'Introduction to Meteorology',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'stability-air',
        title: 'Stability of the Air',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'clouds-visibility',
        title: 'Clouds and Obstructions to Visibility',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'winds-air-masses',
        title: 'Winds and Air Masses',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'fronts-weather',
        title: 'Fronts and Extreme Weather',
        content: '',
        concepts: [],
        image: ''
      }
    ]
  },
  {
    id: 'module-8',
    title: 'Aviation Weather Services',
    sublessons: [
      {
        id: 'awos-metars-tafs',
        title: 'AWOS, METARs, and TAFs',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'gfas-charts',
        title: 'GFAs, Upper Winds, and CFPS Charts',
        content: '',
        concepts: [],
        image: ''
      }
    ]
  },
  {
    id: 'module-9',
    title: 'Navigation & Instruments',
    sublessons: [
      {
        id: 'magnetic-compass',
        title: 'The Magnetic Compass',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'pitot-static',
        title: 'Pitot-Static Instruments',
        content: '',
        concepts: [],
        image: ''
      },
      {
        id: 'navigation-charts',
        title: 'Introduction to Navigation & Chart Usage',
        content: '',
        concepts: [],
        image: ''
      }
    ]
  }
]

const scenarios = [
  {
    id: 'low-airspeed',
    title: 'Scenario 1: Airspeed Dropping Below Safe Level',
    situation: 'You are on final approach to land at a small airport. Your airspeed has been decreasing gradually, and you notice it\'s now 5 knots below the safe minimum speed. The ground is visible ahead. Your altitude is only 200 feet. What do you do?',
    lessonLink: 'stall',
    choices: [
      {
        text: 'Push the control stick forward (lower the nose) and apply maximum engine power to regain airspeed immediately.',
        correct: true,
        feedback: 'Correct! This is the safe decision. Lowering the nose reduces the wing angle and allows the wing to generate lift more efficiently. Adding power provides the thrust needed to accelerate and regain safe airspeed. This action prevents a stall—the worst possible scenario at this low altitude. You\'ve prioritized airspeed over altitude, which is exactly right when you\'re low and slow.'
      },
      {
        text: 'Pull the control stick back further to maintain altitude and prevent descending further toward the ground.',
        correct: false,
        feedback: 'This is unsafe. Pulling back will increase the wing angle, which makes a stall even more likely at this dangerously low speed. At 200 feet, a stall would be catastrophic because you won\'t have altitude to recover. Maintaining altitude is not worth the risk of stalling. Always prioritize airspeed over altitude when flying low and slow.'
      },
      {
        text: 'Keep the current pitch attitude and wait for the airspeed to naturally recover on final approach.',
        correct: false,
        feedback: 'Late correction at best. Waiting is too risky because you\'re already close to the stall speed. Delaying action reduces your margin of safety. The longer you wait, the closer you get to an uncontrollable stall. In this critical situation, immediate action to increase airspeed is essential. Relying on chance or expecting natural recovery is never acceptable when safety is at risk.'
      }
    ]
  },
  {
    id: 'steep-climb',
    title: 'Scenario 2: Climbing Too Steeply After Takeoff',
    situation: 'After takeoff, you\'re climbing steeply (nose pointing well above the horizon) to gain altitude quickly. The airspeed is decreasing noticeably, and you feel slight buffeting in the controls. You want to clear some power lines ahead. What is your best action?',
    lessonLink: 'flight-control',
    choices: [
      {
        text: 'Lower the nose to a shallower climb angle while maintaining or increasing power to keep airspeed above safe minimums.',
        correct: true,
        feedback: 'Correct! This is the safe decision. Shallow climbing angles are more efficient for gaining altitude while maintaining good airspeed margins. The buffeting you felt is a stall warning—the wing is at a dangerous angle. Lowering the nose reduces the wing angle, increases airspeed, and makes you fly safer. Shallow climbs also increase your ground clearance distance because you travel farther forward while still gaining altitude.'
      },
      {
        text: 'Keep the steep climb angle and push full throttle to maintain airspeed while clearing the obstacle.',
        correct: false,
        feedback: 'This is unsafe. Even at full power, a steep pitch angle means the wing is at a high angle of attack. Your engine won\'t generate enough lift to overcome the high wing angle at climbing speed. You\'ll continue losing airspeed toward a stall. Full power won\'t help if the wing angle is wrong. The buffeting you felt is a warning you\'re already approaching critical conditions.'
      },
      {
        text: 'Lower the nose significantly and dive to gain airspeed, then attempt a steep climb to clear the obstacle.',
        correct: false,
        feedback: 'This is inefficient and risky. You would waste altitude diving down to gain speed, then try climbing steeply again—repeating the same problem. This yo-yo pattern uses up altitude and energy without solving the real issue: your climb angle was too steep. A continuous, shallow climb is safer and more efficient. Avoid making drastic pitch changes unless absolutely necessary.'
      }
    ]
  },
  {
    id: 'fast-landing',
    title: 'Scenario 3: Landing Approach Too Fast',
    situation: 'You\'re on final approach to land but carrying too much speed. The runway is 5,000 feet long (plenty of space), and you\'re descending normally. Your airspeed is 15% faster than the recommended landing speed. How do you correct this?',
    lessonLink: 'drag',
    choices: [
      {
        text: 'Reduce engine power and raise the nose slightly to increase drag and slow down before landing.',
        correct: true,
        feedback: 'Correct! This is the safe decision. Reducing power slows the engine\'s contribution to speed. Raising the nose increases the wing angle, which increases induced drag—the drag created by generating lift. The combination slows you down safely. Landing slower gives you a shorter landing distance, more control, and safer handling. With a 5,000-foot runway, you have time to do this smoothly without rushing.'
      },
      {
        text: 'Continue at the current speed and land normally, using most of the runway to stop.',
        correct: false,
        feedback: 'This is a late correction at best. While the long runway means you\'ll probably stop safely, you\'re not managing the situation well. Landing faster means longer landing distance, less control during the landing, more wear on the aircraft, and increased risk. As a pilot, you should slow to the recommended speed when you have time to do so. Good airmanship means being prepared, not rushing through approaches.'
      },
      {
        text: 'Lower the nose and increase power to descend faster and land quickly before the speed stabilizes.',
        correct: false,
        feedback: 'This is unsafe and makes the problem worse. Increasing power will speed you up even more, not slow you down. Lowering the nose increases your descent rate dangerously, making a fast landing even worse. You need to manage descent rate and speed separately. Increasing power when you\'re already too fast shows poor energy management and creates risk. Reduce power and manage drag to slow down.'
      }
    ]
  },
  {
    id: 'altitude-loss',
    title: 'Scenario 4: Unexpected Altitude Loss During Cruise',
    situation: 'You\'re cruising at 3,000 feet when you notice you\'re descending slowly (losing altitude) even though you haven\'t changed the controls. The airspeed is stable and normal. The wind may have changed. What is your primary action?',
    lessonLink: 'lift',
    choices: [
      {
        text: 'Increase engine power to maintain or regain the lost altitude.',
        correct: true,
        feedback: 'Correct! This is the appropriate action. If airspeed is normal but you\'re losing altitude, it means lift is insufficient to maintain height. Increasing power increases airspeed, which increases lift according to the lift equation. More lift allows you to stop descending and maintain altitude. You\'ve correctly identified that more power = more speed = more lift. This fundamental relationship is core to energy management in flight.'
      },
      {
        text: 'Pull back on the control stick to pitch up and stop the descent.',
        correct: false,
        feedback: 'This is unsafe. Pitching up reduces airspeed, which reduces lift even more. You would make the descent worse, not better. If you descend too much while pitching up, you could stall. You must understand that pitch controls airspeed in the short term; to maintain altitude, you need to maintain or increase airspeed by adding power. Pitching up without power is backwards.'
      },
      {
        text: 'Reduce power because the aircraft might be climbing too steeply unintentionally.',
        correct: false,
        feedback: 'This is incorrect. You already verified the airspeed is stable and normal, and you haven\'t changed the controls. Reducing power would decrease airspeed and lift, making you descend faster. If you\'re descending, adding power is the correct response, not reducing it. Misdiagnosing the problem leads to the wrong action. Always gather accurate information before acting.'
      }
    ]
  }
]

let appState = {
  currentSection: 'learn',
  currentWeekIndex: 0,
  currentSublessonIndex: 0,
  currentScenarioIndex: 0,
  correctAnswers: 0,
  totalAttempts: 0,
  scenarioAnswered: false,
  scenarioFeedback: null,
  expandedWeeks: {}
}

function getElementByIdSafe(id) {
  return document.getElementById(id)
}

function toggleWeekExpansion(weekIndex) {
  appState.expandedWeeks[weekIndex] = !appState.expandedWeeks[weekIndex]
  renderLessonsList()
}

function selectSublesson(weekIndex, sublessonIndex) {
  appState.currentWeekIndex = weekIndex
  appState.currentSublessonIndex = sublessonIndex
  renderLesson()
}

function renderLessonsList() {
  const listContainer = getElementByIdSafe('lessons-list')
  listContainer.innerHTML = ''

  lessons.forEach((week, weekIndex) => {
    const weekGroup = document.createElement('div')
    weekGroup.className = 'week-group'

    const weekHeader = document.createElement('button')
    weekHeader.className = `week-header ${appState.expandedWeeks[weekIndex] ? 'expanded' : ''}`
    weekHeader.textContent = week.title
    weekHeader.addEventListener('click', () => toggleWeekExpansion(weekIndex))

    weekGroup.appendChild(weekHeader)

    if (appState.expandedWeeks[weekIndex]) {
      const sublessonsList = document.createElement('div')
      sublessonsList.className = 'sublessons-list'

      week.sublessons.forEach((sublesson, sublessonIndex) => {
        const sublessonBtn = document.createElement('button')
        const isActive = appState.currentWeekIndex === weekIndex && appState.currentSublessonIndex === sublessonIndex
        sublessonBtn.className = `sublesson-btn ${isActive ? 'active' : ''}`
        sublessonBtn.textContent = sublesson.title
        sublessonBtn.addEventListener('click', () => selectSublesson(weekIndex, sublessonIndex))
        sublessonsList.appendChild(sublessonBtn)
      })

      weekGroup.appendChild(sublessonsList)
    }

    listContainer.appendChild(weekGroup)
  })
}

function renderLesson() {
  const week = lessons[appState.currentWeekIndex]
  const sublesson = week.sublessons[appState.currentSublessonIndex]

  getElementByIdSafe('lesson-title').textContent = sublesson.title

  const lessonImageContainer = getElementByIdSafe('lesson-image-container')
  if (lessonImageContainer) {
    lessonImageContainer.innerHTML = ''
    if (sublesson.image) {
      const img = document.createElement('img')
      img.src = sublesson.image
      img.alt = sublesson.title
      img.className = 'lesson-image'
      lessonImageContainer.appendChild(img)
    }
  }

  getElementByIdSafe('lesson-text').textContent = sublesson.content

  const conceptsList = getElementByIdSafe('concepts-list')
  conceptsList.innerHTML = ''
  if (sublesson.concepts && sublesson.concepts.length > 0) {
    sublesson.concepts.forEach(concept => {
      const li = document.createElement('li')
      li.textContent = concept
      conceptsList.appendChild(li)
    })
  }

  const totalSublessons = lessons.reduce((sum, w) => sum + w.sublessons.length, 0)
  const currentIndex = lessons.slice(0, appState.currentWeekIndex).reduce((sum, w) => sum + w.sublessons.length, 0) + appState.currentSublessonIndex + 1

  const counter = getElementByIdSafe('lesson-counter')
  counter.textContent = `${currentIndex} / ${totalSublessons}`

  const isPrevDisabled = appState.currentWeekIndex === 0 && appState.currentSublessonIndex === 0
  const isNextDisabled = appState.currentWeekIndex === lessons.length - 1 && appState.currentSublessonIndex === week.sublessons.length - 1

  getElementByIdSafe('prev-lesson-btn').disabled = isPrevDisabled
  getElementByIdSafe('next-lesson-btn').disabled = isNextDisabled

  renderLessonsList()
}

function renderScenario() {
  const scenario = scenarios[appState.currentScenarioIndex]

  getElementByIdSafe('scenario-title').textContent = scenario.title

  const relatedLesson = lessons.find(l => l.id === scenario.lessonLink)
  getElementByIdSafe('related-lesson').textContent = `Related: ${relatedLesson.title}`

  getElementByIdSafe('situation-text').textContent = scenario.situation

  const choicesContainer = getElementByIdSafe('choices-container')
  choicesContainer.innerHTML = ''

  scenario.choices.forEach((choice, index) => {
    const button = document.createElement('button')
    button.className = 'choice-btn'
    button.textContent = choice.text
    button.disabled = appState.scenarioAnswered
    button.addEventListener('click', () => handleChoiceClick(index, choice))
    choicesContainer.appendChild(button)
  })

  const feedbackContainer = getElementByIdSafe('feedback-container')
  if (appState.scenarioAnswered) {
    feedbackContainer.classList.remove('hidden')
  } else {
    feedbackContainer.classList.add('hidden')
  }

  const counter = getElementByIdSafe('scenario-counter')
  counter.textContent = `${appState.currentScenarioIndex + 1} / ${scenarios.length}`

  getElementByIdSafe('next-scenario-btn').disabled = appState.currentScenarioIndex === scenarios.length - 1
}

function handleChoiceClick(index, choice) {
  const scenario = scenarios[appState.currentScenarioIndex]

  appState.scenarioAnswered = true
  appState.totalAttempts++

  let resultClass = ''
  let resultText = ''

  if (choice.correct) {
    appState.correctAnswers++
    resultClass = 'safe'
    resultText = 'Safe Decision'
  } else {
    const anyCorrectChoice = scenario.choices.some(c => c.correct)
    if (anyCorrectChoice && !choice.correct) {
      resultClass = 'unsafe'
      resultText = 'Unsafe Choice'
    }
  }

  const feedbackResult = getElementByIdSafe('feedback-result')
  feedbackResult.className = `feedback-result ${resultClass}`
  feedbackResult.textContent = resultText

  getElementByIdSafe('feedback-text').textContent = choice.feedback

  const feedbackBox = getElementByIdSafe('feedback-container').querySelector('.feedback-box')
  feedbackBox.className = `feedback-box ${resultClass}`

  updateScore()
  renderScenario()
}

function updateScore() {
  const scoreDisplay = getElementByIdSafe('score-display')
  scoreDisplay.textContent = `${appState.correctAnswers} / ${appState.totalAttempts}`
}

function nextLesson() {
  const week = lessons[appState.currentWeekIndex]

  if (appState.currentSublessonIndex < week.sublessons.length - 1) {
    appState.currentSublessonIndex++
  } else if (appState.currentWeekIndex < lessons.length - 1) {
    appState.currentWeekIndex++
    appState.currentSublessonIndex = 0
  }

  renderLesson()
}

function previousLesson() {
  if (appState.currentSublessonIndex > 0) {
    appState.currentSublessonIndex--
  } else if (appState.currentWeekIndex > 0) {
    appState.currentWeekIndex--
    appState.currentSublessonIndex = lessons[appState.currentWeekIndex].sublessons.length - 1
  }

  renderLesson()
}

function nextScenario() {
  if (appState.currentScenarioIndex < scenarios.length - 1) {
    appState.currentScenarioIndex++
    appState.scenarioAnswered = false
    renderScenario()
  }
}

function resetScore() {
  appState.correctAnswers = 0
  appState.totalAttempts = 0
  appState.scenarioAnswered = false
  appState.currentScenarioIndex = 0
  updateScore()
  renderScenario()
}

function switchSection(sectionName) {
  appState.currentSection = sectionName

  const sections = document.querySelectorAll('.section')
  sections.forEach(section => section.classList.remove('active'))

  if (sectionName === 'learn') {
    getElementByIdSafe('learn-section').classList.add('active')
  } else {
    getElementByIdSafe('practice-section').classList.add('active')
  }

  const navBtns = document.querySelectorAll('.nav-tabs .nav-btn')
  navBtns.forEach(btn => btn.classList.remove('active'))
  document.querySelector(`[data-section="${sectionName}"]`).classList.add('active')
}

function initializeEventListeners() {
  document.querySelectorAll('.nav-tabs .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchSection(btn.dataset.section)
    })
  })

  getElementByIdSafe('prev-lesson-btn').addEventListener('click', previousLesson)
  getElementByIdSafe('next-lesson-btn').addEventListener('click', nextLesson)

  getElementByIdSafe('next-scenario-btn').addEventListener('click', nextScenario)
  getElementByIdSafe('reset-score-btn').addEventListener('click', resetScore)
}

function initialize() {
  initializeEventListeners()
  renderLesson()
  renderScenario()
  updateScore()
}

initialize()
