// Moonlight Sonata First Movement - COMPLETE VERSION with transposition
export const moonlightSonataMelody = [
    // Measure 1 - Triplet figure in right hand with bass note (transposed up one octave)
    { note: 'c#2', key: 'q', duration: 1500, gap: 30, velocity: 0.7 }, // Bass note (original c#1)
    { note: 'g#3', key: '9', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.1 (original g#2)
    { note: 'c#4', key: '-', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.2 (original c#3)
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 1.3 (original e3)
    { note: 'g#4', key: 'e', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.1 (original g#3)
    { note: 'c#5', key: 't', duration: 300, gap: 30, velocity: 0.75 }, // Triplet 2.2 - melody (original c#4)
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.3 (original e3)
    
    // Measure 2 - Same pattern with slight melodic variation (transposed)
    { note: 'g#3', key: '9', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 3.1
    { note: 'c#4', key: '-', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 3.2
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 3.3
    { note: 'g#4', key: 'e', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 4.1
    { note: 'b4', key: ';', duration: 300, gap: 30, velocity: 0.75 }, // Triplet 4.2 - melody
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 4.3
    
    // Measure 3 - Harmony changes to A major (transposed)
    { note: 'a2', key: 'n', duration: 1500, gap: 30, velocity: 0.7 }, // Bass note (was a0)
    { note: 'a3', key: 's', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.1
    { note: 'c#4', key: '-', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.2
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 1.3
    { note: 'a4', key: 'l', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.1
    { note: 'c#5', key: 't', duration: 300, gap: 30, velocity: 0.75 }, // Triplet 2.2 - melody
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.3
    
    // Measure 4 - Move to F# minor (transposed)
    { note: 'f#2', key: '3', duration: 1500, gap: 30, velocity: 0.7 }, // Bass note (was f#1)
    { note: 'f#3', key: '8', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.1
    { note: 'a3', key: 's', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.2
    { note: 'c#4', key: '-', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 1.3
    { note: 'f#4', key: 'w', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.1
    { note: 'a4', key: 'l', duration: 300, gap: 30, velocity: 0.75 }, // Triplet 2.2 - melody
    { note: 'c#4', key: '-', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.3
    
    // Measure 5 - Return to C# minor with rising melody (transposed)
    { note: 'c#2', key: 'q', duration: 1500, gap: 30, velocity: 0.7 }, // Bass note
    { note: 'g#3', key: '9', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.1
    { note: 'c#4', key: '-', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.2
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 1.3
    { note: 'g#4', key: 'e', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.1
    { note: 'd#5', key: 'y', duration: 300, gap: 30, velocity: 0.75 }, // Triplet 2.2 - melody note
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.3
    
    // Measure 6 - Rising tension (transposed)
    { note: 'b2', key: 'm', duration: 1500, gap: 30, velocity: 0.7 }, // Bass note (was b1)
    { note: 'f#3', key: '8', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.1
    { note: 'b3', key: 'd', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.2
    { note: 'd#4', key: '=', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 1.3
    { note: 'f#4', key: 'w', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.1
    { note: 'e5', key: 'i', duration: 300, gap: 30, velocity: 0.8 }, // Triplet 2.2 - melody note
    { note: 'd#4', key: '=', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.3
    
    // Measure 7 - Melody climbs to G# (transposed)
    { note: 'g#2', key: '4', duration: 1500, gap: 30, velocity: 0.7 }, // Bass note (was g#0)
    { note: 'g#3', key: '9', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.1
    { note: 'b3', key: 'd', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.2
    { note: 'd#4', key: '=', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 1.3
    { note: 'g#4', key: 'e', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.1
    { note: 'g#5', key: 'p', duration: 300, gap: 30, velocity: 0.85 }, // Triplet 2.2 - melody note peak
    { note: 'd#4', key: '=', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.3
    
    // Measure 8 - Return to main theme (transposed)
    { note: 'c#2', key: 'q', duration: 1500, gap: 30, velocity: 0.7 }, // Bass note
    { note: 'g#3', key: '9', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.1
    { note: 'c#4', key: '-', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.2
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 1.3
    { note: 'g#4', key: 'e', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.1
    { note: 'g#5', key: 'p', duration: 300, gap: 30, velocity: 0.8 }, // Triplet 2.2 - melody return
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.3
    
    // Measure 9 - Melody descends (transposed)
    { note: 'c#2', key: 'q', duration: 1500, gap: 30, velocity: 0.7 }, // Bass note
    { note: 'g#3', key: '9', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.1
    { note: 'c#4', key: '-', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 1.2
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.7 }, // Triplet 1.3
    { note: 'g#4', key: 'e', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.1
    { note: 'e5', key: 'i', duration: 300, gap: 30, velocity: 0.75 }, // Triplet 2.2 - melody descends
    { note: 'e4', key: 'h', duration: 300, gap: 30, velocity: 0.6 }, // Triplet 2.3
    
    // Measure 10 - Final resolution (transposed)
    { note: 'c#2', key: 'q', duration: 800, gap: 30, velocity: 0.75 }, // Bass note
    { note: 'g#2', key: '4', duration: 800, gap: 30, velocity: 0.7 }, // Harmony
    { note: 'c#3', key: '6', duration: 800, gap: 30, velocity: 0.7 }, // Harmony
    { note: 'e3', key: '/', duration: 800, gap: 30, velocity: 0.7 }, // Harmony
    { note: 'g#3', key: '9', duration: 800, gap: 30, velocity: 0.7 }, // Harmony
    { note: 'c#4', key: '-', duration: 800, gap: 30, velocity: 0.75 }, // Harmony
    { note: 'e4', key: 'h', duration: 800, gap: 30, velocity: 0.75 }, // Harmony
    { note: 'g#4', key: 'e', duration: 800, gap: 30, velocity: 0.75 }, // Harmony
    { note: 'c#5', key: 't', duration: 1500, gap: 100, velocity: 0.85 } // Final melody note
];