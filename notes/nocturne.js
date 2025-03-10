// Nocturne Op.9 No.2 by Chopin - with complete left hand pattern and full melody
export const nocturneMelody = [
    // Introduction - establishing the Eb major tonality
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },  // Left hand pattern begins
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    
    // First theme - right hand enters
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b3', key: 'd', duration: 450, gap: 30, velocity: 0.8 },  // Melody enters
    
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'c#4', key: '-', duration: 350, gap: 30, velocity: 0.82 },  // Melody continues
    
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'd4', key: 'g', duration: 450, gap: 30, velocity: 0.85 },  // Melody rises
    
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.7 },  // Change in harmony
    { note: 'f#2', key: '3', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'd#2', key: '2', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'f#2', key: '3', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e4', key: 'h', duration: 450, gap: 30, velocity: 0.87 },  // Melody peak
    
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.7 },  // Harmony shift
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'c#2', key: 'q', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'd#4', key: '=', duration: 350, gap: 30, velocity: 0.85 },  // Melody begins descent
    
    // Next phrase - graceful descent
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'c#4', key: '-', duration: 250, gap: 30, velocity: 0.82 },
    
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'c#2', key: 'q', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b3', key: 'd', duration: 250, gap: 30, velocity: 0.8 },
    
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'f#2', key: '3', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'd#2', key: '2', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'f#2', key: '3', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'a3', key: 's', duration: 250, gap: 30, velocity: 0.78 },
    
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },  // Return to tonic
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#3', key: '9', duration: 450, gap: 30, velocity: 0.76 },  // Melody returns to tonic
    
    // Middle section - ornamentation and elaboration
    { note: 'c#2', key: 'q', duration: 250, gap: 30, velocity: 0.7 },  // Shift to C# minor
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'c#3', key: '6', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b3', key: 'd', duration: 150, gap: 20, velocity: 0.78 },  // Grace notes and ornamentation
    { note: 'c#4', key: '-', duration: 150, gap: 20, velocity: 0.8 },
    { note: 'd4', key: 'g', duration: 150, gap: 20, velocity: 0.82 },
    
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'd#2', key: '2', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'd#2', key: '2', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e4', key: 'h', duration: 150, gap: 20, velocity: 0.85 },  // Rising ornaments
    { note: 'd#4', key: '=', duration: 150, gap: 20, velocity: 0.83 },
    { note: 'c#4', key: '-', duration: 150, gap: 20, velocity: 0.8 },
    
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'c#2', key: 'q', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b3', key: 'd', duration: 150, gap: 20, velocity: 0.78 },  // Falling ornaments
    { note: 'a3', key: 's', duration: 150, gap: 20, velocity: 0.76 },
    { note: 'g#3', key: '9', duration: 150, gap: 20, velocity: 0.74 },
    
    // Final section - return to main theme with variations
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },  // Return to tonic
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b3', key: 'd', duration: 450, gap: 30, velocity: 0.8 },  // Main theme returns
    
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'c#4', key: '-', duration: 350, gap: 30, velocity: 0.82 },  // Theme continues
    
    // Elaborate ornamental passage
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'd4', key: 'g', duration: 120, gap: 20, velocity: 0.85 },
    { note: 'e4', key: 'h', duration: 120, gap: 20, velocity: 0.87 },
    { note: 'f#4', key: 'w', duration: 120, gap: 20, velocity: 0.9 },  // Ornamental high point
    { note: 'e4', key: 'h', duration: 120, gap: 20, velocity: 0.87 },
    { note: 'd4', key: 'g', duration: 120, gap: 20, velocity: 0.85 },
    
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'f#2', key: '3', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'd#2', key: '2', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'f#2', key: '3', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'c#4', key: '-', duration: 120, gap: 20, velocity: 0.83 },
    { note: 'b3', key: 'd', duration: 120, gap: 20, velocity: 0.8 },
    { note: 'a3', key: 's', duration: 120, gap: 20, velocity: 0.78 },
    
    // Final cadence
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.72 },  // Final tonic pedal
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.7 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.72 },
    { note: 'b2', key: 'm', duration: 250, gap: 30, velocity: 0.75 },
    { note: 'g#3', key: '9', duration: 350, gap: 30, velocity: 0.8 },  // Melody resolves
    
    // Final chord - E major
    { note: 'e2', key: 'c', duration: 800, gap: 30, velocity: 0.8 },
    { note: 'b2', key: 'm', duration: 800, gap: 30, velocity: 0.8 },
    { note: 'e2', key: 'c', duration: 800, gap: 30, velocity: 0.8 },
    { note: 'g#2', key: '4', duration: 800, gap: 30, velocity: 0.85 },
    { note: 'b2', key: 'm', duration: 800, gap: 30, velocity: 0.85 },
    { note: 'e3', key: '/', duration: 1200, gap: 100, velocity: 0.9 }
];