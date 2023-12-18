
export type ModuleCategory = 'Web' | 'User Management' | 'Gameplay & UX' | 'AI-Algo' |
    'Cybersecurity' | 'Devops' | 'Graphics' | 'Accessibility' | 'Object oriented' | 
    'Server-Side Pong'

export type ModuleType = 'Major' | 'Minor'

export type Module = {
    category: ModuleCategory
    name: string,
    description: string,
    type: ModuleType,
    depends: Module[],
}

// export type Choices = {
//     backend: null | 'pure Ruby' | 'django',
//     frontend: 'vanilla JS' | 'framework' | 'Bootstrap toolkit' | 'Graphics module',
//     database: null | 'PostgreSQL',
//     blockchain: null | 'Ethereum',
//     control: 'same keyboard' | 'remote players',
//     user: 'register alias' | 'standard user management module',
//     bot: boolean,
// }