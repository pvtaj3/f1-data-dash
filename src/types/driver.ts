export interface Driver {
  name: string
  number: number
  team: string
  nationality: string
  championshipPosition: number
  points: number
  podiums: number
  bestFinish: number
  avgQualifying: number
  dnfs: number
  racesCompleted: number
  topTens: number
  qualifyingBattle: number
  lapTimes: number[]
  avgLapTime: number
  fastestLap: number
  sectorTimes: {
    sector1: number
    sector2: number
    sector3: number
  }
}
