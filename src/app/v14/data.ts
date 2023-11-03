import { Module, ModuleCategory, ModuleType } from "../types";

function m(category: ModuleCategory, type: ModuleType, name: string, description: string = '', depends: Module[] = []): Module {
    return { category, name, description, type, depends }
}

export const modules: Module[] = [
    m('Web', 'Major', 'Use a Framework as backend'),
    m('Web', 'Minor', 'Use a front-end framework or toolkit'),
    m('Web', 'Minor', 'Use a database for the backend'),
    m('Web', 'Major', 'Store the score of a tournament in the Blockchain'),
    m('User Management', 'Major', 'Standard user management, authentication, users across tournaments'),
    m('User Management', 'Major', 'Implementing a remote authentication'),
    m('Gameplay & UX', 'Major', 'Remote players'),
    m('Gameplay & UX', 'Major', 'Multiplayers (more than 2 in the same game)'),
    m('Gameplay & UX', 'Major', 'Add Another Game with User History and Matchmaking'),
    m('Gameplay & UX', 'Minor', 'Game Customization Options'),
    m('Gameplay & UX', 'Major', 'Live chat'),
    m('IA-Algo', 'Major', 'Introduce an AI Opponent'),
    m('IA-Algo', 'Minor', 'User and Game Stats Dashboards'),
    m('Cybersecurity', 'Major', 'Implement WAF/ModSecurity with Hardened Configuration and HashiCorp Vault for Secrects Management'),
    m('Cybersecurity', 'Minor', 'GDPR Compliance Options with User Anonymization, Local Data Management, and Account Deletion'),
    m('Cybersecurity', 'Major', 'Implement Two-Factor Authentication (2FA) and JWT'),
    m('Devops', 'Major', 'Infrastructure Setup for Log Management'),
    m('Devops', 'Minor', 'Monitoring system'),
    m('Devops', 'Major', 'Designing the Backend as Microservices'),
    m('Graphics', 'Major', 'Use of advanced 3D techniques'),
    m('Accessibility', 'Minor', 'Support on all devices'),
    m('Accessibility', 'Minor', 'Expanding Browser Compatibility'),
    m('Accessibility', 'Minor', 'Multiple language supports'),
    m('Accessibility', 'Minor', 'Add accessibility for Visually Impaired Users'),
    m('Accessibility', 'Minor', 'Server-Side Rendering (SSR) Integration'),
    m('Object oriented', 'Major', 'Replacing Basic Pong with Server-Side Pong and Implementing an API'),
    m('Object oriented', 'Major', 'Enabling Pong Gameplay via CLI against Web Users with API Integration'),
]
