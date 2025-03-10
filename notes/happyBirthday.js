// Happy Birthday melody - FAST VERSION with shorter durations
export const happyBirthdayMelody = [
    // Introduction/pickup
    { note: 'f3', key: ']', duration: 120, gap: 20, velocity: 0.7 },  // Pickup note
    
    // First phrase - "Happy birthday to you"
    { note: 'c4', key: 'f', duration: 250, gap: 20, velocity: 0.75 },  // "Hap-"
    { note: 'c4', key: 'f', duration: 250, gap: 20, velocity: 0.7 },   // "-py"
    { note: 'd4', key: 'g', duration: 400, gap: 20, velocity: 0.8 },   // "birth-"
    { note: 'c4', key: 'f', duration: 400, gap: 20, velocity: 0.75 },  // "-day"
    { note: 'f4', key: 'j', duration: 400, gap: 20, velocity: 0.8 },   // "to"
    { note: 'e4', key: 'h', duration: 600, gap: 20, velocity: 0.75 },  // "you"
    
    // Second phrase - "Happy birthday to you"
    { note: 'c4', key: 'f', duration: 250, gap: 20, velocity: 0.75 },  // "Hap-"
    { note: 'c4', key: 'f', duration: 250, gap: 20, velocity: 0.7 },   // "-py"
    { note: 'd4', key: 'g', duration: 400, gap: 20, velocity: 0.8 },   // "birth-"
    { note: 'c4', key: 'f', duration: 400, gap: 20, velocity: 0.75 },  // "-day"
    { note: 'g4', key: 'k', duration: 400, gap: 20, velocity: 0.85 },  // "to"
    { note: 'f4', key: 'j', duration: 600, gap: 20, velocity: 0.8 },   // "you"
    
    // Third phrase - "Happy birthday dear [name]"
    { note: 'c4', key: 'f', duration: 250, gap: 20, velocity: 0.75 },  // "Hap-"
    { note: 'c4', key: 'f', duration: 250, gap: 20, velocity: 0.7 },   // "-py"
    { note: 'c5', key: "'", duration: 400, gap: 20, velocity: 0.9 },   // "birth-" (climax)
    { note: 'a4', key: 'l', duration: 400, gap: 20, velocity: 0.85 },  // "-day"
    { note: 'f4', key: 'j', duration: 400, gap: 20, velocity: 0.8 },   // "dear"
    { note: 'e4', key: 'h', duration: 400, gap: 20, velocity: 0.75 },  // "[name]" part 1
    { note: 'd4', key: 'g', duration: 400, gap: 20, velocity: 0.7 },   // "[name]" part 2
    
    // Fourth phrase - "Happy birthday to you"
    { note: 'a#4', key: 'r', duration: 250, gap: 20, velocity: 0.85 }, // "Hap-" 
    { note: 'a#4', key: 'r', duration: 250, gap: 20, velocity: 0.8 },  // "-py"
    { note: 'a4', key: 'l', duration: 400, gap: 20, velocity: 0.8 },   // "birth-"
    { note: 'f4', key: 'j', duration: 400, gap: 20, velocity: 0.75 },  // "-day"
    { note: 'g4', key: 'k', duration: 400, gap: 20, velocity: 0.85 },  // "to"
    { note: 'f4', key: 'j', duration: 600, gap: 20, velocity: 0.9 }    // "you" - final
];