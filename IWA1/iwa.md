# Tally counter app

## Features
- Counting with incrementing button(+) and decrementing button(-)
- Easy to use 

## data
---
title: Tally App Counter
---
stateDiagram-v2
    [*] --> Code
    Code --> [*]

    Code --> App
    App--> User interface
    Moving --> Crash
    Crash --> [*]