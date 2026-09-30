// src/theme/colors.js
// DECK — Swiss editorial palette. Ink on paper, one red signal.
// Red (`sig`) is reserved ONLY for the featured badge + destructive actions.

export const light = {
    bg: '#fbfaf7',        // warm paper background
    surface: '#ffffff',   // raised sheet (search, tab bar, cards)
    surface2: '#f1efe9',  // sunken well / chips
    ink: '#0b0b09',       // near-black primary text
    dim: '#56544c',       // secondary text / deks
    faint: '#9a988c',     // meta, timestamps, index numbers
    rule: '#e3e1d8',      // hairline dividers
    ruleStrong: '#b8b6a9',// input / chip borders
    sig: '#c8102e',       // signal red (featured / destructive)
    sigInk: '#ffffff',    // text/icon on top of sig
  }
 export const dark =  {
    bg: 'rgb(10, 10, 9)',
    surface: '#111110',
    surface2: '#17170f',
    ink: '#edece5',
    dim: '#9d9b90',
    faint: '#605e55',
    rule: '#222220',
    ruleStrong: '#3d3b34',
    sig: '#ff4d4d',
    sigInk: '#0a0a09',
  }


export const themes = {
  light,
  dark,
} 
export default themes