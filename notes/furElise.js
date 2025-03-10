// Fur Elise - COMPLETE with keyboard mappings
export const furEliseMelody = [
    // Main theme - Section A (Primary theme)
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.8 },
    { note: 'd#4', key: '=', duration: 250, gap: 30, velocity: 0.75 },
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.8 },
    { note: 'd#4', key: '=', duration: 250, gap: 30, velocity: 0.75 },
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.8 },
    { note: 'b3', key: 'd', duration: 250, gap: 30, velocity: 0.75 },
    { note: 'd4', key: 'g', duration: 250, gap: 30, velocity: 0.77 },
    { note: 'c4', key: 'f', duration: 250, gap: 30, velocity: 0.75 },
    
    // Left hand accompaniment
    { note: 'a2', key: 'n', duration: 500, gap: 30, velocity: 0.65 }, // Bass (was a0, moved to a2)
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },  // Chord
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.6 },  // Chord
    
    // Melody continues
    { note: 'a3', key: 's', duration: 500, gap: 30, velocity: 0.8 },
    
    // Left hand continues
    { note: 'c2', key: 'z', duration: 500, gap: 30, velocity: 0.65 }, // Was c1, moved to c2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.6 },
    
    // Melody
    { note: 'e3', key: '/', duration: 500, gap: 30, velocity: 0.75 },
    
    // Left hand
    { note: 'a2', key: 'n', duration: 500, gap: 30, velocity: 0.65 }, // Was a1, moved to a2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.6 },
    
    // Melody
    { note: 'c4', key: 'f', duration: 500, gap: 30, velocity: 0.8 },
    
    // Left hand - E major chord
    { note: 'e2', key: 'c', duration: 500, gap: 30, velocity: 0.65 }, // Was e1, moved to e2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.6 },
    
    // Melody
    { note: 'b3', key: 'd', duration: 500, gap: 30, velocity: 0.75 },
    
    // Left hand
    { note: 'e2', key: 'c', duration: 500, gap: 30, velocity: 0.65 }, // Was e1, moved to e2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.6 },
    
    // Melody
    { note: 'a3', key: 's', duration: 500, gap: 30, velocity: 0.8 },
    
    // Left hand - A minor chord
    { note: 'a2', key: 'n', duration: 500, gap: 30, velocity: 0.65 }, // Was a1, moved to a2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.6 },
    
    // Repeat theme with variation for ending
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.8 },
    { note: 'd#4', key: '=', duration: 250, gap: 30, velocity: 0.75 },
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.8 },
    { note: 'd#4', key: '=', duration: 250, gap: 30, velocity: 0.75 },
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.8 },
    { note: 'b3', key: 'd', duration: 250, gap: 30, velocity: 0.75 },
    { note: 'd4', key: 'g', duration: 250, gap: 30, velocity: 0.77 },
    { note: 'c4', key: 'f', duration: 250, gap: 30, velocity: 0.75 },
    
    // Left hand
    { note: 'a2', key: 'n', duration: 500, gap: 30, velocity: 0.65 }, // Was a0, moved to a2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.6 },
    
    // Melody
    { note: 'a3', key: 's', duration: 500, gap: 30, velocity: 0.8 },
    
    // Left hand
    { note: 'c2', key: 'z', duration: 500, gap: 30, velocity: 0.65 }, // Was c1, moved to c2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.6 },
    
    // Melody different ending
    { note: 'e3', key: '/', duration: 500, gap: 30, velocity: 0.75 },
    
    // Left hand
    { note: 'a2', key: 'n', duration: 500, gap: 30, velocity: 0.65 }, // Was a1, moved to a2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.6 },
    
    // Variation in ending
    { note: 'b3', key: 'd', duration: 500, gap: 30, velocity: 0.75 },
    
    // Left hand
    { note: 'e2', key: 'c', duration: 500, gap: 30, velocity: 0.65 }, // Was e1, moved to e2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.6 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.6 },
    
    // Ending of first section
    { note: 'a3', key: 's', duration: 750, gap: 100, velocity: 0.8 },
    
    // Section B - First development section (faster tempo)
    // Right hand arpeggios
    { note: 'c4', key: 'f', duration: 200, gap: 20, velocity: 0.8 },
    { note: 'e2', key: 'c', duration: 400, gap: 20, velocity: 0.65 }, // Left hand
    { note: 'e4', key: 'h', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'g4', key: 'k', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'c5', key: "'", duration: 200, gap: 20, velocity: 0.9 },
    
    { note: 'g3', key: 'a', duration: 200, gap: 20, velocity: 0.8 },
    { note: 'c2', key: 'z', duration: 400, gap: 20, velocity: 0.65 }, // Left hand
    { note: 'c4', key: 'f', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'e4', key: 'h', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'g4', key: 'k', duration: 200, gap: 20, velocity: 0.9 },
    
    { note: 'g3', key: 'a', duration: 200, gap: 20, velocity: 0.8 },
    { note: 'b2', key: 'm', duration: 400, gap: 20, velocity: 0.65 }, // Left hand (was b1)
    { note: 'd4', key: 'g', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'f4', key: 'j', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'g4', key: 'k', duration: 200, gap: 20, velocity: 0.9 },
    
    { note: 'f3', key: ']', duration: 200, gap: 20, velocity: 0.8 },
    { note: 'a2', key: 'n', duration: 400, gap: 20, velocity: 0.65 }, // Was a1, moved to a2
    { note: 'c4', key: 'f', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'e4', key: 'h', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'f4', key: 'j', duration: 200, gap: 20, velocity: 0.9 },
    
    // More development arpeggios
    { note: 'e3', key: '/', duration: 200, gap: 20, velocity: 0.8 },
    { note: 'e2', key: 'c', duration: 400, gap: 20, velocity: 0.65 }, // Was e1, moved to e2
    { note: 'b3', key: 'd', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'd4', key: 'g', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'e4', key: 'h', duration: 200, gap: 20, velocity: 0.9 },
    
    { note: 'd3', key: '.', duration: 200, gap: 20, velocity: 0.8 },
    { note: 'd2', key: 'x', duration: 400, gap: 20, velocity: 0.65 }, // Was d1, moved to d2
    { note: 'a3', key: 's', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'c4', key: 'f', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'd4', key: 'g', duration: 200, gap: 20, velocity: 0.9 },
    
    { note: 'c3', key: ',', duration: 200, gap: 20, velocity: 0.8 },
    { note: 'c2', key: 'z', duration: 400, gap: 20, velocity: 0.65 }, // Was c1, moved to c2
    { note: 'g3', key: 'a', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'b3', key: 'd', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'c4', key: 'f', duration: 200, gap: 20, velocity: 0.9 },
    
    // Transition back to main theme
    { note: 'b2', key: 'm', duration: 200, gap: 20, velocity: 0.8 },
    { note: 'b2', key: 'm', duration: 400, gap: 20, velocity: 0.65 }, // Was b0, moved to b2
    { note: 'f#3', key: '8', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'a3', key: 's', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'b3', key: 'd', duration: 200, gap: 20, velocity: 0.9 },
    
    // Dramatic build-up
    { note: 'e3', key: '/', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'e2', key: 'c', duration: 400, gap: 20, velocity: 0.7 }, // Was e1, moved to e2
    { note: 'e4', key: 'h', duration: 200, gap: 20, velocity: 0.9 },
    { note: 'e3', key: '/', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'e4', key: 'h', duration: 200, gap: 20, velocity: 0.9 },
    
    { note: 'd#3', key: '7', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'b2', key: 'm', duration: 400, gap: 20, velocity: 0.7 }, // Was b0, moved to b2
    { note: 'd#4', key: '=', duration: 200, gap: 20, velocity: 0.9 },
    { note: 'd#3', key: '7', duration: 200, gap: 20, velocity: 0.85 },
    { note: 'd#4', key: '=', duration: 200, gap: 20, velocity: 0.9 },
    
    // Return to main theme with more intensity
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.9 },
    { note: 'd#4', key: '=', duration: 250, gap: 30, velocity: 0.85 },
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.9 },
    { note: 'd#4', key: '=', duration: 250, gap: 30, velocity: 0.85 },
    { note: 'e4', key: 'h', duration: 250, gap: 30, velocity: 0.9 },
    { note: 'b3', key: 'd', duration: 250, gap: 30, velocity: 0.8 },
    { note: 'd4', key: 'g', duration: 250, gap: 30, velocity: 0.85 },
    { note: 'c4', key: 'f', duration: 250, gap: 30, velocity: 0.8 },
    
    // Left hand with more intensity
    { note: 'a2', key: 'n', duration: 500, gap: 30, velocity: 0.7 }, // Was a0, moved to a2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.65 },
    
    // Melody
    { note: 'a3', key: 's', duration: 500, gap: 30, velocity: 0.85 },
    
    // Left hand 
    { note: 'c2', key: 'z', duration: 500, gap: 30, velocity: 0.7 }, // Was c1, moved to c2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.65 },
    
    // Final phrase with stronger dynamics
    { note: 'e3', key: '/', duration: 500, gap: 30, velocity: 0.8 },
    
    // Left hand
    { note: 'a2', key: 'n', duration: 500, gap: 30, velocity: 0.7 }, // Was a1, moved to a2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'a2', key: 'n', duration: 250, gap: 30, velocity: 0.65 },
    
    // Final cadence
    { note: 'b3', key: 'd', duration: 500, gap: 30, velocity: 0.85 },
    
    // Left hand
    { note: 'e2', key: 'c', duration: 500, gap: 30, velocity: 0.7 }, // Was e1, moved to e2
    { note: 'e2', key: 'c', duration: 250, gap: 30, velocity: 0.65 },
    { note: 'g#2', key: '4', duration: 250, gap: 30, velocity: 0.65 },
    
    // Final chord - A minor with extended resonance
    { note: 'a2', key: 'n', duration: 300, gap: 30, velocity: 0.75 }, // Was a0, moved to a2
    { note: 'e2', key: 'c', duration: 300, gap: 30, velocity: 0.75 }, // Was e1, moved to e2
    { note: 'a2', key: 'n', duration: 300, gap: 30, velocity: 0.75 }, // Was a1, moved to a2
    { note: 'c2', key: 'z', duration: 300, gap: 30, velocity: 0.75 },
    { note: 'e2', key: 'c', duration: 300, gap: 30, velocity: 0.8 },
    { note: 'a2', key: 'n', duration: 300, gap: 30, velocity: 0.85 },
    { note: 'c3', key: ',', duration: 300, gap: 30, velocity: 0.85 },
    { note: 'e3', key: '/', duration: 300, gap: 30, velocity: 0.9 },
    { note: 'a3', key: 's', duration: 1500, gap: 100, velocity: 0.95 }
];