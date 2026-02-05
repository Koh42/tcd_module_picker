import { Module, ModuleCategory, ModuleType } from "../types";

function m(category: ModuleCategory, type: ModuleType, name: string, description: string = '', depends: Module[] = []): Module {
    return { category, name, description, type, depends }
}

export const modules: Module[] = [
    m('Web', 'Major', 'Use a framework to build the backend'),
    m('Web', 'Minor', 'Use a framework or a toolkit to build the frontend'),
    m('Web', 'Minor', 'Use a database for the backend'),
    m('Web', 'Major', 'Store the score of a tournament in the Blockchain'),
    m('User Management', 'Major', 'Standard user management, authentication, users across tournaments'),
    m('User Management', 'Major', 'Implementing a remote authentication'),
    m('Gameplay & UX', 'Major', 'Remote players'),
    m('Gameplay & UX', 'Major', 'Multiplayer (more than 2 players in the same game)'),
    m('Gameplay & UX', 'Major', 'Add another game with user history and matchmaking'),
    m('Gameplay & UX', 'Minor', 'Game customization options'),
    m('Gameplay & UX', 'Major', 'Live chat'),
    m('AI-Algo', 'Major', 'Introduce an AI opponent'),
    m('AI-Algo', 'Minor', 'User and game stats dashboards'),
    m('Cybersecurity', 'Major', 'Implement WAF/ModSecurity with a hardened configuration and HashiCorp Vault for secrets management'),
    m('Cybersecurity', 'Minor', 'GDPR compliance options with user anonymization, local data management, and account deletion'),
    m('Cybersecurity', 'Major', 'Implement Two-Factor Authentication (2FA) and JWT'),
    m('Devops', 'Major', 'Infrastructure setup for log management'),
    m('Devops', 'Minor', 'Monitoring system'),
    m('Devops', 'Major', 'Designing the backend as microservices'),
    m('Graphics', 'Major', 'Use advanced 3D techniques'),
    m('Accessibility', 'Minor', 'Support on all devices'),
    m('Accessibility', 'Minor', 'Expanding browser compatibility'),
    m('Accessibility', 'Minor', 'Supports multiple languages'),
    m('Accessibility', 'Minor', 'Add accessibility features for visually impaired users'),
    m('Accessibility', 'Minor', 'Server-Side Rendering (SSR) integration'),
    m('Server-Side Pong', 'Major', 'Replace basic Pong with server-side Pong and implement an API'),
    m('Server-Side Pong', 'Major', 'Enabling Pong gameplay via CLI against web users with API integration'),
]
