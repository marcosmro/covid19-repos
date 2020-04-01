---
title: Models of Outbreak Trajectories and Hospital Demand
repo: neherlab/covid19_scenarios
twitter: richardneher
homepage: https://neherlab.org/covid19/
type: 
  - Model
  - Visualization
  - Website
language:
  - TypeScript
  - JavaScript
  - CSS
format:
  - M/A
license:
  - MIT
description: Tool based on an SIR model that simulates a COVID19 outbreak

---

This tool is based on an SIR model (see about page for details) that simulates a COVID19 outbreak. The population is initially mostly susceptible (other than for initial cases). Individuals that recover from COVID19 are subsequently immune. Currently, the parameters of the model are not fit to data but are simply defaults. These might fit better for some localities than others. In particular the initial cases counts are often only rough estimates.

The primary purpose of the tool is to explore the dynamics of COVID19 cases and the associated strain on the health care system in the near future. The outbreak is influenced by infection control measures such as school closures, lock-down etc. The effect of such measures can be included in the simulation by adjusting the mitigation parameters. Analogously, you can explore the effect of isolation on specific age groups in the column "Isolated" in the table on severity assumptions and age specific isolation.

Most parameters can be adjusted in the tool and for many of them we provide presets (scenarios).

Input data for the tool and the basic parameters of the populations are collected in a separate repository neherlab/covid19_scenarios_data. Please add data on populations and parsers of publicly available case count data there.