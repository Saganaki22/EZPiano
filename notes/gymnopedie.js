// Gymnopedie No.1 by Erik Satie - Complete arrangement with proper impressionist harmonies
export const gymnopedieMelody = [
    // Introduction - establishing the gentle 3/4 rhythm
    { note: 'd1', duration: 900, gap: 40, velocity: 0.65 }, // Bass pedal D
    { note: 'a1', duration: 200, gap: 30, velocity: 0.55 }, // Left hand chord
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'f2', duration: 200, gap: 30, velocity: 0.55 }, // Minor third for Dorian mode
    
    { note: 'pause', duration: 500, gap: 0, velocity: 0 }, // Brief pause for phrasing
    
    // First theme - melody enters
    { note: 'd1', duration: 900, gap: 40, velocity: 0.65 }, // Bass pedal continues
    { note: 'a1', duration: 200, gap: 30, velocity: 0.55 }, // Left hand chord
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'f2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'd4', duration: 900, gap: 40, velocity: 0.8 }, // Melody enters
    
    { note: 'g1', duration: 900, gap: 40, velocity: 0.65 }, // Bass moves to G
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 }, // Left hand chord
    { note: 'g2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'b2', duration: 200, gap: 30, velocity: 0.55 }, // Major for contrast
    { note: 'b3', duration: 900, gap: 40, velocity: 0.75 }, // Melody continues
    
    { note: 'a1', duration: 900, gap: 40, velocity: 0.65 }, // Bass to A
    { note: 'e2', duration: 200, gap: 30, velocity: 0.55 }, // Left hand chord
    { note: 'a2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'c3', duration: 200, gap: 30, velocity: 0.55 }, // Minor again
    { note: 'a3', duration: 900, gap: 40, velocity: 0.75 }, // Melody descends
    
    { note: 'g1', duration: 900, gap: 40, velocity: 0.65 }, // Bass to G
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 }, // Left hand chord
    { note: 'g2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'b2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'g3', duration: 900, gap: 40, velocity: 0.7 }, // Melody continues descent
    
    // Second phrase - with subtle variations
    { note: 'd1', duration: 900, gap: 40, velocity: 0.65 }, // Return to tonic
    { note: 'a1', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'f2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'd4', duration: 900, gap: 40, velocity: 0.8 }, // Melody repeats
    
    { note: 'g1', duration: 900, gap: 40, velocity: 0.65 },
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'g2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'b2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'b3', duration: 900, gap: 40, velocity: 0.75 },
    
    { note: 'e1', duration: 900, gap: 40, velocity: 0.65 }, // Variation - E bass
    { note: 'b1', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'e2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'g2', duration: 200, gap: 30, velocity: 0.55 }, // Minor
    { note: 'c4', duration: 900, gap: 40, velocity: 0.8 }, // Melody variation
    
    { note: 'a1', duration: 900, gap: 40, velocity: 0.65 }, // A bass
    { note: 'e2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'a2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'c3', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'a3', duration: 900, gap: 40, velocity: 0.75 },
    
    // Middle section - more harmonic color
    { note: 'c1', duration: 900, gap: 40, velocity: 0.65 }, // C bass - subdominant
    { note: 'g1', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'c2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'e2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'c4', duration: 900, gap: 40, velocity: 0.8 }, // Melody on chord tone
    
    { note: 'f1', duration: 900, gap: 40, velocity: 0.65 }, // F bass
    { note: 'c2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'f2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'a2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'a3', duration: 900, gap: 40, velocity: 0.75 }, // Melody descends
    
    { note: 'bb0', duration: 900, gap: 40, velocity: 0.65 }, // Bb - Neapolitan color
    { note: 'f1', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'bb1', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'g3', duration: 900, gap: 40, velocity: 0.7 }, // Melody continues
    
    { note: 'a0', duration: 900, gap: 40, velocity: 0.7 }, // A as dominant
    { note: 'e1', duration: 200, gap: 30, velocity: 0.6 },
    { note: 'a1', duration: 200, gap: 30, velocity: 0.6 },
    { note: 'c#2', duration: 200, gap: 30, velocity: 0.6 }, // Major dominant
    { note: 'f3', duration: 900, gap: 40, velocity: 0.7 }, // Melody lands on sixth
    
    // Return to main theme with richer harmonization
    { note: 'd1', duration: 900, gap: 40, velocity: 0.65 }, // Return to tonic
    { note: 'a1', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'f2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'd4', duration: 900, gap: 40, velocity: 0.8 }, // Main theme returns
    
    { note: 'g1', duration: 900, gap: 40, velocity: 0.65 },
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'g2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'b2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'b3', duration: 900, gap: 40, velocity: 0.75 },
    
    { note: 'a1', duration: 900, gap: 40, velocity: 0.65 },
    { note: 'e2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'a2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'c3', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'a3', duration: 900, gap: 40, velocity: 0.75 },
    
    { note: 'g1', duration: 900, gap: 40, velocity: 0.65 },
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'g2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'b2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'g3', duration: 900, gap: 40, velocity: 0.7 },
    
    // Final section - gentle conclusion
    { note: 'd1', duration: 900, gap: 40, velocity: 0.65 }, // Final tonic pedal
    { note: 'a1', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'd2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'f2', duration: 200, gap: 30, velocity: 0.55 },
    { note: 'f3', duration: 900, gap: 40, velocity: 0.7 }, // Melody descends further
    
    { note: 'a0', duration: 900, gap: 40, velocity: 0.6 }, // Subdominant
    { note: 'a1', duration: 200, gap: 30, velocity: 0.5 },
    { note: 'd2', duration: 200, gap: 30, velocity: 0.5 },
    { note: 'f2', duration: 200, gap: 30, velocity: 0.5 },
    { note: 'd3', duration: 900, gap: 40, velocity: 0.6 }, // Melody continues descent
    
    // Final cadence - D minor with added 6th (Dorian flavor)
    { note: 'd1', duration: 1200, gap: 50, velocity: 0.7 }, // Bass
    { note: 'a1', duration: 1200, gap: 50, velocity: 0.65 }, // Fifth
    { note: 'd2', duration: 1200, gap: 50, velocity: 0.65 }, // Tonic
    { note: 'f2', duration: 1200, gap: 50, velocity: 0.65 }, // Minor third
    { note: 'b2', duration: 1200, gap: 50, velocity: 0.65 }, // Added 6th - Dorian characteristic
    { note: 'd3', duration: 1500, gap: 100, velocity: 0.8 }  // Final melody note
];