// Ode to Joy (Beethoven) - Full orchestral reduction with complete harmonization
export const odeToJoyMelody = [
    // Introduction - establishing the D major harmonies
    { note: 'd1', duration: 400, gap: 30, velocity: 0.7 },  // Bass
    { note: 'a1', duration: 400, gap: 30, velocity: 0.65 }, // Fifth
    { note: 'd2', duration: 400, gap: 30, velocity: 0.65 }, // Octave
    { note: 'f#2', duration: 400, gap: 30, velocity: 0.65 }, // Third
    
    // Main theme - First phrase
    { note: 'd1', duration: 500, gap: 30, velocity: 0.7 }, // Bass D
    { note: 'a1', duration: 500, gap: 30, velocity: 0.65 }, // Harmony
    { note: 'd2', duration: 500, gap: 30, velocity: 0.65 }, // Harmony
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.65 }, // Harmony
    { note: 'd3', duration: 500, gap: 30, velocity: 0.85 }, // Melody

    { note: 'd1', duration: 500, gap: 30, velocity: 0.65 }, // Same chord
    { note: 'a1', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'd3', duration: 500, gap: 30, velocity: 0.8 }, // Repeated note
    
    { note: 'a1', duration: 500, gap: 30, velocity: 0.7 }, // A major
    { note: 'e2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'a2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'c#3', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'e3', duration: 500, gap: 30, velocity: 0.85 }, // Melody rises
    
    { note: 'd1', duration: 500, gap: 30, velocity: 0.75 }, // D major with stronger bass
    { note: 'a1', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'f#3', duration: 500, gap: 30, velocity: 0.9 }, // Melody climbs
    
    // Second phrase
    { note: 'g1', duration: 500, gap: 30, velocity: 0.75 }, // G major
    { note: 'd2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'g2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'b2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'g3', duration: 500, gap: 30, velocity: 0.9 }, // Melody continues rising
    
    { note: 'g1', duration: 500, gap: 30, velocity: 0.7 }, // Same chord
    { note: 'd2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'g2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'b2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'g3', duration: 500, gap: 30, velocity: 0.85 }, // Repeated note
    
    { note: 'd1', duration: 500, gap: 30, velocity: 0.7 }, // D major
    { note: 'a1', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'f#3', duration: 500, gap: 30, velocity: 0.85 }, // Melody descends
    
    { note: 'a1', duration: 500, gap: 30, velocity: 0.75 }, // A major dominant
    { note: 'e2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'a2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'c#3', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'e3', duration: 500, gap: 30, velocity: 0.85 }, // Return to midpoint
    
    // Third phrase - repeat of first phrase
    { note: 'd1', duration: 500, gap: 30, velocity: 0.75 }, // Return to tonic
    { note: 'a1', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'd3', duration: 500, gap: 30, velocity: 0.85 }, // Main theme returns
    
    { note: 'd1', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'a1', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.65 },
    { note: 'd3', duration: 500, gap: 30, velocity: 0.8 },
    
    { note: 'a1', duration: 500, gap: 30, velocity: 0.75 },
    { note: 'e2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'a2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'c#3', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'e3', duration: 500, gap: 30, velocity: 0.85 },
    
    { note: 'd1', duration: 500, gap: 30, velocity: 0.75 },
    { note: 'a1', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'f#3', duration: 500, gap: 30, velocity: 0.9 },
    
    // Fourth phrase - second theme
    { note: 'd1', duration: 500, gap: 30, velocity: 0.75 }, // D major with emphasis
    { note: 'a1', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'd3', duration: 500, gap: 30, velocity: 0.9 }, // Melody emphasizes tonic
    
    { note: 'a1', duration: 500, gap: 30, velocity: 0.75 }, // A major
    { note: 'e2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'a2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'c#3', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'c#3', duration: 500, gap: 30, velocity: 0.85 }, // Melody on third
    
    { note: 'b1', duration: 500, gap: 30, velocity: 0.75 }, // B minor
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'b2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'd3', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'b2', duration: 500, gap: 30, velocity: 0.85 }, // Melody descends
    
    { note: 'f#1', duration: 500, gap: 30, velocity: 0.75 }, // F# major (dominant of B)
    { note: 'c#2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'a#2', duration: 500, gap: 30, velocity: 0.7 },
    { note: 'a#2', duration: 500, gap: 30, velocity: 0.85 }, // Melody on third
    
    // "Tutti" orchestral section - full chords
    { note: 'b1', duration: 400, gap: 30, velocity: 0.8 }, // Forte B minor 
    { note: 'f#2', duration: 400, gap: 30, velocity: 0.8 },
    { note: 'b2', duration: 400, gap: 30, velocity: 0.8 },
    { note: 'd3', duration: 400, gap: 30, velocity: 0.85 },
    { note: 'f#3', duration: 400, gap: 30, velocity: 0.9 }, // Melody in octaves
    { note: 'b3', duration: 400, gap: 30, velocity: 0.9 },
    
    { note: 'g1', duration: 400, gap: 30, velocity: 0.8 }, // G major
    { note: 'd2', duration: 400, gap: 30, velocity: 0.8 },
    { note: 'g2', duration: 400, gap: 30, velocity: 0.8 },
    { note: 'b2', duration: 400, gap: 30, velocity: 0.85 },
    { note: 'g3', duration: 400, gap: 30, velocity: 0.9 },
    { note: 'b3', duration: 400, gap: 30, velocity: 0.9 },
    
    { note: 'd1', duration: 400, gap: 30, velocity: 0.85 }, // D major 
    { note: 'a1', duration: 400, gap: 30, velocity: 0.85 },
    { note: 'd2', duration: 400, gap: 30, velocity: 0.85 },
    { note: 'f#2', duration: 400, gap: 30, velocity: 0.85 },
    { note: 'a2', duration: 400, gap: 30, velocity: 0.9 },
    { note: 'd3', duration: 400, gap: 30, velocity: 0.9 },
    { note: 'f#3', duration: 400, gap: 30, velocity: 0.95 },
    
    { note: 'a0', duration: 400, gap: 30, velocity: 0.9 }, // A major dominant
    { note: 'e1', duration: 400, gap: 30, velocity: 0.9 },
    { note: 'a1', duration: 400, gap: 30, velocity: 0.9 },
    { note: 'c#2', duration: 400, gap: 30, velocity: 0.9 },
    { note: 'e2', duration: 400, gap: 30, velocity: 0.9 },
    { note: 'a2', duration: 400, gap: 30, velocity: 0.95 },
    { note: 'c#3', duration: 400, gap: 30, velocity: 0.95 },
    { note: 'e3', duration: 400, gap: 30, velocity: 1.0 },
    
    // Final triumphant return to main theme
    { note: 'd1', duration: 500, gap: 30, velocity: 0.9 }, // Triumphant return to tonic
    { note: 'a1', duration: 500, gap: 30, velocity: 0.85 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.85 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.85 },
    { note: 'd3', duration: 500, gap: 30, velocity: 0.95 }, // Melody with forte
    
    { note: 'd1', duration: 500, gap: 30, velocity: 0.85 },
    { note: 'a1', duration: 500, gap: 30, velocity: 0.8 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.8 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.8 },
    { note: 'd3', duration: 500, gap: 30, velocity: 0.9 },
    
    { note: 'a1', duration: 500, gap: 30, velocity: 0.85 },
    { note: 'e2', duration: 500, gap: 30, velocity: 0.8 },
    { note: 'a2', duration: 500, gap: 30, velocity: 0.8 },
    { note: 'c#3', duration: 500, gap: 30, velocity: 0.8 },
    { note: 'e3', duration: 500, gap: 30, velocity: 0.9 },
    
    { note: 'd1', duration: 500, gap: 30, velocity: 0.9 },
    { note: 'a1', duration: 500, gap: 30, velocity: 0.85 },
    { note: 'd2', duration: 500, gap: 30, velocity: 0.85 },
    { note: 'f#2', duration: 500, gap: 30, velocity: 0.85 },
    { note: 'f#3', duration: 500, gap: 30, velocity: 0.95 },
    
    // Final cadence
    { note: 'a0', duration: 400, gap: 30, velocity: 0.85 }, // A dominant seventh
    { note: 'e1', duration: 400, gap: 30, velocity: 0.85 },
    { note: 'g1', duration: 400, gap: 30, velocity: 0.85 }, // Seventh added
    { note: 'c#2', duration: 400, gap: 30, velocity: 0.85 },
    { note: 'e2', duration: 400, gap: 30, velocity: 0.85 },
    
    // Final resolution chord - D major with full orchestral texture
    { note: 'd1', duration: 1000, gap: 50, velocity: 0.95 }, // Bass
    { note: 'a1', duration: 1000, gap: 50, velocity: 0.9 },
    { note: 'd2', duration: 1000, gap: 50, velocity: 0.9 },
    { note: 'f#2', duration: 1000, gap: 50, velocity: 0.9 },
    { note: 'a2', duration: 1000, gap: 50, velocity: 0.9 },
    { note: 'd3', duration: 1000, gap: 50, velocity: 0.95 },
    { note: 'f#3', duration: 1000, gap: 50, velocity: 0.95 },
    { note: 'a3', duration: 1200, gap: 100, velocity: 1.0 }  // Final melody note
];