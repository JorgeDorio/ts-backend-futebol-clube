import { IMatch } from '../interfaces/IMatch'
import { ITeam } from '../interfaces/ITeam'

export const userLogin = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

export const loginInputs = {
  email: "admin@admin.com",
  password: "secret_admin"
}

export const serviceLogin = {
  user: {
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
    id: 1,
    role: 'admin'
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyIsImlkIjoxLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE5NzAxMTMsImV4cCI6MTY2MjA1NjUxM30.BpjVjVNRkTW1I7E8__C_tKlsEj1kNDjcvmj-tRsFd2c'
}

export const allTeams: ITeam[] = [
  { id: 1, teamName: 'Avaí/Kindermann' },
  { id: 2, teamName: 'Bahia' },
  { id: 3, teamName: 'Botafogo' },
  { id: 4, teamName: 'Corinthians' },
  { id: 5, teamName: 'Cruzeiro' },
  { id: 6, teamName: 'Ferroviária' },
  { id: 7, teamName: 'Flamengo' },
  { id: 8, teamName: 'Grêmio' },
  { id: 9, teamName: 'Internacional' },
  { id: 10, teamName: 'Minas Brasília' },
  { id: 11, teamName: 'Napoli-SC' },
  { id: 12, teamName: 'Palmeiras' },
  { id: 13, teamName: 'Real Brasília' },
  { id: 14, teamName: 'Santos' },
  { id: 15, teamName: 'São José-SP' },
  { id: 16, teamName: 'São Paulo' },
]

export const team: ITeam = { id: 4, teamName: 'Corinthians' }

export const allMatches: IMatch[] = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 16,
      "teamName": "São Paulo"
    },
    "teamAway": {
      "id": 8,
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeam": 3,
    "homeTeamGoals": 0,
    "awayTeam": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 3,
      "teamName": "Botafogo"
    },
    "teamAway": {
      "id": 2,
      "teamName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeam": 7,
    "homeTeamGoals": 1,
    "awayTeam": 10,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 7,
      "teamName": "Flamengo"
    },
    "teamAway": {
      "id": 10,
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 6,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 5,
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "id": 13,
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 7,
    "homeTeam": 12,
    "homeTeamGoals": 2,
    "awayTeam": 6,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 12,
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "id": 6,
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 8,
    "homeTeam": 15,
    "homeTeamGoals": 0,
    "awayTeam": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 15,
      "teamName": "São José-SP"
    },
    "teamAway": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 9,
    "homeTeam": 1,
    "homeTeamGoals": 0,
    "awayTeam": 12,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "id": 12,
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 10,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 9,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 2,
      "teamName": "Bahia"
    },
    "teamAway": {
      "id": 9,
      "teamName": "Internacional"
    }
  },
  {
    "id": 11,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 13,
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "id": 3,
      "teamName": "Botafogo"
    }
  },
  {
    "id": 12,
    "homeTeam": 6,
    "homeTeamGoals": 0,
    "awayTeam": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 6,
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "id": 4,
      "teamName": "Corinthians"
    }
  },
  {
    "id": 13,
    "homeTeam": 8,
    "homeTeamGoals": 2,
    "awayTeam": 5,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 8,
      "teamName": "Grêmio"
    },
    "teamAway": {
      "id": 5,
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 14,
    "homeTeam": 14,
    "homeTeamGoals": 2,
    "awayTeam": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 14,
      "teamName": "Santos"
    },
    "teamAway": {
      "id": 16,
      "teamName": "São Paulo"
    }
  },
  {
    "id": 15,
    "homeTeam": 10,
    "homeTeamGoals": 0,
    "awayTeam": 15,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 10,
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "id": 15,
      "teamName": "São José-SP"
    }
  },
  {
    "id": 16,
    "homeTeam": 11,
    "homeTeamGoals": 0,
    "awayTeam": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 11,
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "id": 7,
      "teamName": "Flamengo"
    }
  },
  {
    "id": 17,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "id": 8,
      "teamName": "Grêmio"
    }
  },
  {
    "id": 18,
    "homeTeam": 12,
    "homeTeamGoals": 4,
    "awayTeam": 5,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 12,
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "id": 5,
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 19,
    "homeTeam": 11,
    "homeTeamGoals": 2,
    "awayTeam": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 11,
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "id": 2,
      "teamName": "Bahia"
    }
  },
  {
    "id": 20,
    "homeTeam": 7,
    "homeTeamGoals": 0,
    "awayTeam": 9,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 7,
      "teamName": "Flamengo"
    },
    "teamAway": {
      "id": 9,
      "teamName": "Internacional"
    }
  },
  {
    "id": 21,
    "homeTeam": 6,
    "homeTeamGoals": 3,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 6,
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "id": 13,
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 22,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 3,
      "teamName": "Botafogo"
    }
  },
  {
    "id": 23,
    "homeTeam": 15,
    "homeTeamGoals": 2,
    "awayTeam": 16,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "id": 15,
      "teamName": "São José-SP"
    },
    "teamAway": {
      "id": 16,
      "teamName": "São Paulo"
    }
  },
  {
    "id": 24,
    "homeTeam": 10,
    "homeTeamGoals": 2,
    "awayTeam": 14,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 10,
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 25,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 2,
      "teamName": "Bahia"
    },
    "teamAway": {
      "id": 6,
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 26,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 13,
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 27,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 15,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 5,
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "id": 15,
      "teamName": "São José-SP"
    }
  },
  {
    "id": 28,
    "homeTeam": 16,
    "homeTeamGoals": 3,
    "awayTeam": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 16,
      "teamName": "São Paulo"
    },
    "teamAway": {
      "id": 7,
      "teamName": "Flamengo"
    }
  },
  {
    "id": 29,
    "homeTeam": 9,
    "homeTeamGoals": 0,
    "awayTeam": 4,
    "awayTeamGoals": 4,
    "inProgress": false,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 4,
      "teamName": "Corinthians"
    }
  },
  {
    "id": 30,
    "homeTeam": 3,
    "homeTeamGoals": 0,
    "awayTeam": 12,
    "awayTeamGoals": 4,
    "inProgress": false,
    "teamHome": {
      "id": 3,
      "teamName": "Botafogo"
    },
    "teamAway": {
      "id": 12,
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 31,
    "homeTeam": 8,
    "homeTeamGoals": 2,
    "awayTeam": 10,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 8,
      "teamName": "Grêmio"
    },
    "teamAway": {
      "id": 10,
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 32,
    "homeTeam": 14,
    "homeTeamGoals": 5,
    "awayTeam": 11,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 14,
      "teamName": "Santos"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 33,
    "homeTeam": 1,
    "homeTeamGoals": 1,
    "awayTeam": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "id": 16,
      "teamName": "São Paulo"
    }
  },
  {
    "id": 34,
    "homeTeam": 9,
    "homeTeamGoals": 3,
    "awayTeam": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 6,
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 35,
    "homeTeam": 10,
    "homeTeamGoals": 1,
    "awayTeam": 5,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "id": 10,
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "id": 5,
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 36,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 7,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 2,
      "teamName": "Bahia"
    },
    "teamAway": {
      "id": 7,
      "teamName": "Flamengo"
    }
  },
  {
    "id": 37,
    "homeTeam": 15,
    "homeTeamGoals": 0,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 15,
      "teamName": "São José-SP"
    },
    "teamAway": {
      "id": 13,
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 38,
    "homeTeam": 14,
    "homeTeamGoals": 2,
    "awayTeam": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 14,
      "teamName": "Santos"
    },
    "teamAway": {
      "id": 4,
      "teamName": "Corinthians"
    }
  },
  {
    "id": 39,
    "homeTeam": 3,
    "homeTeamGoals": 2,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 3,
      "teamName": "Botafogo"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 40,
    "homeTeam": 12,
    "homeTeamGoals": 4,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 12,
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "id": 8,
      "teamName": "Grêmio"
    }
  },
  {
    "id": 41,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "id": 16,
      "teamName": "São Paulo"
    },
    "teamAway": {
      "id": 9,
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeam": 6,
    "homeTeamGoals": 1,
    "awayTeam": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "id": 6,
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 43,
    "homeTeam": 11,
    "homeTeamGoals": 0,
    "awayTeam": 10,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "id": 11,
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "id": 10,
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 44,
    "homeTeam": 7,
    "homeTeamGoals": 2,
    "awayTeam": 15,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "id": 7,
      "teamName": "Flamengo"
    },
    "teamAway": {
      "id": 15,
      "teamName": "São José-SP"
    }
  },
  {
    "id": 45,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "id": 5,
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "id": 3,
      "teamName": "Botafogo"
    }
  },
  {
    "id": 46,
    "homeTeam": 4,
    "homeTeamGoals": 1,
    "awayTeam": 12,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 12,
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 47,
    "homeTeam": 8,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "id": 8,
      "teamName": "Grêmio"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 48,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "id": 13,
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "id": 2,
      "teamName": "Bahia"
    }
  }
]

export const finishedMatches: IMatch[] = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 16,
      "teamName": "São Paulo"
    },
    "teamAway": {
      "id": 8,
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeam": 3,
    "homeTeamGoals": 0,
    "awayTeam": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 3,
      "teamName": "Botafogo"
    },
    "teamAway": {
      "id": 2,
      "teamName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeam": 7,
    "homeTeamGoals": 1,
    "awayTeam": 10,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 7,
      "teamName": "Flamengo"
    },
    "teamAway": {
      "id": 10,
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 6,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 5,
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "id": 13,
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 7,
    "homeTeam": 12,
    "homeTeamGoals": 2,
    "awayTeam": 6,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 12,
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "id": 6,
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 8,
    "homeTeam": 15,
    "homeTeamGoals": 0,
    "awayTeam": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 15,
      "teamName": "São José-SP"
    },
    "teamAway": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 9,
    "homeTeam": 1,
    "homeTeamGoals": 0,
    "awayTeam": 12,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "id": 12,
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 10,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 9,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 2,
      "teamName": "Bahia"
    },
    "teamAway": {
      "id": 9,
      "teamName": "Internacional"
    }
  },
  {
    "id": 11,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 13,
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "id": 3,
      "teamName": "Botafogo"
    }
  },
  {
    "id": 12,
    "homeTeam": 6,
    "homeTeamGoals": 0,
    "awayTeam": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 6,
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "id": 4,
      "teamName": "Corinthians"
    }
  },
  {
    "id": 13,
    "homeTeam": 8,
    "homeTeamGoals": 2,
    "awayTeam": 5,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 8,
      "teamName": "Grêmio"
    },
    "teamAway": {
      "id": 5,
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 14,
    "homeTeam": 14,
    "homeTeamGoals": 2,
    "awayTeam": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 14,
      "teamName": "Santos"
    },
    "teamAway": {
      "id": 16,
      "teamName": "São Paulo"
    }
  },
  {
    "id": 15,
    "homeTeam": 10,
    "homeTeamGoals": 0,
    "awayTeam": 15,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 10,
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "id": 15,
      "teamName": "São José-SP"
    }
  },
  {
    "id": 16,
    "homeTeam": 11,
    "homeTeamGoals": 0,
    "awayTeam": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 11,
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "id": 7,
      "teamName": "Flamengo"
    }
  },
  {
    "id": 17,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "id": 8,
      "teamName": "Grêmio"
    }
  },
  {
    "id": 18,
    "homeTeam": 12,
    "homeTeamGoals": 4,
    "awayTeam": 5,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 12,
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "id": 5,
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 19,
    "homeTeam": 11,
    "homeTeamGoals": 2,
    "awayTeam": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 11,
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "id": 2,
      "teamName": "Bahia"
    }
  },
  {
    "id": 20,
    "homeTeam": 7,
    "homeTeamGoals": 0,
    "awayTeam": 9,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 7,
      "teamName": "Flamengo"
    },
    "teamAway": {
      "id": 9,
      "teamName": "Internacional"
    }
  },
  {
    "id": 21,
    "homeTeam": 6,
    "homeTeamGoals": 3,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 6,
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "id": 13,
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 22,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 3,
      "teamName": "Botafogo"
    }
  },
  {
    "id": 23,
    "homeTeam": 15,
    "homeTeamGoals": 2,
    "awayTeam": 16,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "id": 15,
      "teamName": "São José-SP"
    },
    "teamAway": {
      "id": 16,
      "teamName": "São Paulo"
    }
  },
  {
    "id": 24,
    "homeTeam": 10,
    "homeTeamGoals": 2,
    "awayTeam": 14,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 10,
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 25,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 2,
      "teamName": "Bahia"
    },
    "teamAway": {
      "id": 6,
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 26,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 13,
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 27,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 15,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "id": 5,
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "id": 15,
      "teamName": "São José-SP"
    }
  },
  {
    "id": 28,
    "homeTeam": 16,
    "homeTeamGoals": 3,
    "awayTeam": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 16,
      "teamName": "São Paulo"
    },
    "teamAway": {
      "id": 7,
      "teamName": "Flamengo"
    }
  },
  {
    "id": 29,
    "homeTeam": 9,
    "homeTeamGoals": 0,
    "awayTeam": 4,
    "awayTeamGoals": 4,
    "inProgress": false,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 4,
      "teamName": "Corinthians"
    }
  },
  {
    "id": 30,
    "homeTeam": 3,
    "homeTeamGoals": 0,
    "awayTeam": 12,
    "awayTeamGoals": 4,
    "inProgress": false,
    "teamHome": {
      "id": 3,
      "teamName": "Botafogo"
    },
    "teamAway": {
      "id": 12,
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 31,
    "homeTeam": 8,
    "homeTeamGoals": 2,
    "awayTeam": 10,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 8,
      "teamName": "Grêmio"
    },
    "teamAway": {
      "id": 10,
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 32,
    "homeTeam": 14,
    "homeTeamGoals": 5,
    "awayTeam": 11,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 14,
      "teamName": "Santos"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 33,
    "homeTeam": 1,
    "homeTeamGoals": 1,
    "awayTeam": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "id": 16,
      "teamName": "São Paulo"
    }
  },
  {
    "id": 34,
    "homeTeam": 9,
    "homeTeamGoals": 3,
    "awayTeam": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 6,
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 35,
    "homeTeam": 10,
    "homeTeamGoals": 1,
    "awayTeam": 5,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "id": 10,
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "id": 5,
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 36,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 7,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 2,
      "teamName": "Bahia"
    },
    "teamAway": {
      "id": 7,
      "teamName": "Flamengo"
    }
  },
  {
    "id": 37,
    "homeTeam": 15,
    "homeTeamGoals": 0,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 15,
      "teamName": "São José-SP"
    },
    "teamAway": {
      "id": 13,
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 38,
    "homeTeam": 14,
    "homeTeamGoals": 2,
    "awayTeam": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 14,
      "teamName": "Santos"
    },
    "teamAway": {
      "id": 4,
      "teamName": "Corinthians"
    }
  },
  {
    "id": 39,
    "homeTeam": 3,
    "homeTeamGoals": 2,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 3,
      "teamName": "Botafogo"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 40,
    "homeTeam": 12,
    "homeTeamGoals": 4,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 12,
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "id": 8,
      "teamName": "Grêmio"
    }
  }
]

export const matchesInProgress: IMatch[] = [
  {
    "id": 41,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "id": 16,
      "teamName": "São Paulo"
    },
    "teamAway": {
      "id": 9,
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeam": 6,
    "homeTeamGoals": 1,
    "awayTeam": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "id": 6,
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 43,
    "homeTeam": 11,
    "homeTeamGoals": 0,
    "awayTeam": 10,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "id": 11,
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "id": 10,
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 44,
    "homeTeam": 7,
    "homeTeamGoals": 2,
    "awayTeam": 15,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "id": 7,
      "teamName": "Flamengo"
    },
    "teamAway": {
      "id": 15,
      "teamName": "São José-SP"
    }
  },
  {
    "id": 45,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "id": 5,
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "id": 3,
      "teamName": "Botafogo"
    }
  },
  {
    "id": 46,
    "homeTeam": 4,
    "homeTeamGoals": 1,
    "awayTeam": 12,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 12,
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 47,
    "homeTeam": 8,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "id": 8,
      "teamName": "Grêmio"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 48,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "id": 13,
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "id": 2,
      "teamName": "Bahia"
    }
  }
]

export const createdMatch: IMatch = {
  "id": 50,
  "homeTeam": 9,
  "awayTeam": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  "inProgress": true
}

export const match: IMatch = {
  "homeTeam": 9,
  "awayTeam": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyIsImlkIjoxLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjIwMDQwMTUsImV4cCI6MTY2MjA5MDQxNX0.tUZQaXqrQTDktypWEBlSrnv7orUctkKHLJn2uxhD71M"
