/*
    struct MarshalZone
    {
        float  m_zoneStart;   // Fraction (0..1) of way through the lap the marshal zone starts
        int8   m_zoneFlag;    // -1 = invalid/unknown, 0 = none, 1 = green, 2 = blue, 3 = yellow, 4 = red
    };
*/

const Parser = require('binary-parser').Parser;

const marshalZone = new Parser().floatle('m_zoneStart').uint8('m_zoneFlag');

module.exports = marshalZone;
